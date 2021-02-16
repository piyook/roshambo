<template>

<section class="text-center p-4 mt-4 border border-primary mb-5">

    <h2 class="text-center mt-2 mb-3"> RULES </h2>

    <div id="imageDeck">

                <div class="itemCard">
                    <h2 class="display-5 text-primary">Rock</h2>
                    <img src="/img/rock.png">
                </div>

                <div class="itemCard">
                    <h2 class="display-5 text-primary">Paper</h2>
                    <img src="/img/paper.png">
                </div>

               <div class="itemCard">
                    <h2 class="display-5 text-primary">Scissors</h2>
                    <img src="/img/scissors.png">
                </div>

                <div class="itemCard">
                    <h2 class="text-primary">Lizard</h2>
                    <img src="/img/lizard.png">
                </div>

                <div class="itemCard">
                    <h2 class="display-5 text-primary">Spock</h2>
                    <img src="/img/spock.png">
                </div>
    


        <ul class="list-group">
            <li class="list-group-item">Scissors Cuts Paper</li>
            <li class="list-group-item">Paper Covers Rock</li>
            <li class="list-group-item">Rock Crushes Lizard</li>
            <li class="list-group-item">Lizard Poisons Spock</li>
            <li class="list-group-item">Spock Smashes Scissors</li>
        </ul>

        <ul class="list-group">
            <li class="list-group-item">Scissors Stab Lizard</li>
            <li class="list-group-item">Lizard Eats Paper</li>
            <li class="list-group-item">Paper Disproves Spock</li>
            <li class="list-group-item">Spock Vaporizes Rock</li>
            <li class="list-group-item">Rock Blunts Scissors</li>
        </ul>
    </div>



</section>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

 div #imageDeck {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
    }

img {
        width: 120px;
        margin: 10px 40px 40px 40px;
    }

.itemCard {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

li {
    border-color:white;
}


</style>