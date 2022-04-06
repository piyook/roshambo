<template>
    <section class="container text-center p-4 mt-4 mb-5 border border-primary">
        <div>
            <h1 class="display-4 mb-5">ABOUT</h1>
            <div class="text-info">
                <h4>
                    This is a demo app coded in Vue-3 and Laravel-8 using
                    Bootswatch Styling (Superhero).
                </h4>
                <br />
                <h4>
                    Laravel and MySql is used as a backend API microservice
                    protected using Fortify for Authorization and Sanctum for
                    Authentication.
                </h4>
                <br />
                <h4>
                    The App was developed on a local Dockerized Development
                    Set-up.
                </h4>
                <br />
                <h4>
                    The Dockerized App was then originally uploaded to AWS using
                    DockerHub onto an EC2 instance connected to an AWS RDS MySQL
                    Database.
                </h4>
                <br />
                <h4>
                    NOTE: This App was recently updated (April 2022) to use Laravel 9 / PHP
                    8.1 with a Vue-3 frontend developed using Vite. <br />It is
                    now hosted on an Apache server on a shared host
                    rather than on AWS using an Nginx Server running in a docker
                    container on a dedicated EC2 instance (for cost reasons).
                </h4>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media only screen and (max-width: 750px) {
    h4 {
        font-size: 18px;
    }
}
</style>
