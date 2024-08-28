<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/piyook/roshambo">
    <img src="images/game.png" alt="Logo" width="200" height="160">
  </a>

  <h3 align="center">Rock, Paper, Scissors, Lizard, Spock Game</h3>

  <p align="center">
    A simple demo app based on Roshambo (rock, paper, scissors) using Vue-3 and Laravel
    <br />
    <a href="https://github.com/piyook/roshambo"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
 <img src="images/rules.png" alt="Logo" width="300" height="200">
 </p>
 <br>
 
 
The project is a simple game app based on roshambo (rock,paper,scissors) that has a front-end built with Vue-3 and a back-end API built with Laravel used to record users scores and handle game logic.

The vue components are stored in a <b> Vapp folder within the Laravel resources folder </b>.

Vite package.json was modded to build the VUE production dist folder to the Laravel
public folder and also update the app.blade.php which was used to build
the index.html file. In this use-case the laravel blade templating engine is
not being used.

All url routes are redirected to index.html to allow Vue-Router to serve the
Vue pages but still allows Laravel to work in the backend.

SPA Authorization is achieved using Laravel Fortify and SPA Authentication
using Laravel Sanctum making use of session and http cookies (possible
because the API is on the same url as the web app otherwise CORS issues
would force the use of authorization headers instead of cookies).

The project was developed in, and deployed, using Docker containers.

### Built With

- Vue-3
- Vite
- Laravel 11
- Docker
- Bootswatch

## Getting Started

The project can be built and run in docker local containers for convenience.

### Prerequisites

Node.js (v20 +) and Docker Desktop need to be installed.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/piyook/roshambo.git
   ```

2. env files have been included in the repo as this is a demo. Values can be changed in .env,env/mysql.env and src/resources/vapp/.env.local and re-added to .gitignore.

## Usage

Initial set-up of the project - pulls docker images and starts services

```sh
npm run setup
```

stop all containers

```sh
npm stop
```

start built containers

```sh
npm start
```

re-start containers

```sh
npm restart
```

<b>Nuke</b> project - removing all caches, node modules, docker resources and rebuild

```sh
npm run nuke
```

The app is available on localhost:5173

## Using The App

1. First Create a new user by registering
2. Once logged in, play the game by putting in a stake value and choosing an icon

The user should remain logged beacuse of a long lived access cookie but if required then log in with the credentials created in step 1.

## Contact

Piyook - [@piyookD](https://twitter.com/piyookD) - email piyook@piyook.com

Project Link: [https://github.com/piyook/roshambo](https://github.com/piyook/roshambo)
