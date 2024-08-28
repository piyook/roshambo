#!/usr/bin/env bash

info () {
  printf "\r  [ \033[00;34m..\033[0m ] $1\n"
}

success () {
  printf "\r\033[2K  [ \033[00;32mOK\033[0m ] $1\n"
}

fail () {
  printf "\r\033[2K  [\033[0;31mFAIL\033[0m] $1\n"
  echo ''
  exit
}

LOG_FILE="$(pwd)/nuke-it.log"
# remove log file if already exists
[[ ! -e "$LOG_FILE" ]] || rm "$LOG_FILE"

# everyone loves a mushroom cloud ;)
if hash base64 2>/dev/null && hash gunzip 2>/dev/null; then
    base64 --decode <<<"H4sIAJQcFFwAA11NQQrDMAy7+xW6NYHiPKAv2B8CTgeBHsYKbcbopW+fHRraTrYSI0UO0CBgsbOvEzXZCTo4JMCrzSL+sJyWtRrK5O1uphOxYE2zqtb9GbX3+56ibmYEG0+jYjD+aUEZSa4IAv0o3jSy2KN0K8qUMb9fG77jhjLjmbF+lsxE9APlrOhe9gAAAA==" | gunzip
fi

info "> cleaning laravel cache"
docker compose exec php php artisan cache:clear

info "> cleaning bootstrap cache"
rm src/bootstrap/cache/packages.php && rm src/bootstrap/cache/services.php



info "> stopping docker services and deleting all resources"
docker compose down --rmi all --volumes


info "> removing root node_modules"
rm -rf node_modules
info "> cleaning npm cache"
npm cache clean --force


info "> removing vue node_modules"
rm -rf src/resources/vapp/node_modules
info "> cleaning npm cache"
npm cache clean --force

info "> removing vendor files"
rm -rf vendor 



info "> building docker resources < please wait - this can take quite a while ;) >"
docker compose run --rm composer install >> "$LOG_FILE" \
    && docker compose up -d mysql >> "$LOG_FILE" \
    && docker compose up -d php >> "$LOG_FILE" \
    && docker compose up -d server >> "$LOG_FILE" \
    && docker compose up -d vue >> "$LOG_FILE" \
    && docker compose exec php php artisan migrate >> "$LOG_FILE"


success "*** nuked the project. all build artifacts have been removed and docker restarted. ***"