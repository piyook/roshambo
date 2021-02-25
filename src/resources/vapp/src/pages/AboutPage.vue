<template>
    
    <section class="container text-center p-4 mt-4 border border-primary">

       <div>
            <h1 class="display-4 mb-5"> ABOUT </h1>
            <div class="text-info">
                <h4>This is a demo app coded in Vue-3 and Laravel-8 using Bootswatch 
                Styling (Superhero).</h4><br>
                <h4>Laravel and MySql is used as a backend API microservice protected
                    using Fortify for Authorization and Sanctum for Authentication. </h4><br>
                <h4>The App was developed on a local Dockerized Development Set-up.</h4><br>
                <h4>The Dockerized App was then uploaded to AWS using DockerHub onto an EC2 
                instance with Kubernetes for container management.</h4>
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