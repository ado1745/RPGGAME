let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },

    resetPlayer: function (classType) {
        switch (classType) {
            case "Serg":
                player = new Player(classType, 200, 0, 200, 100, 50); //classType, health, mana, strength, agility, speed
                break;
            case "John":
                player = new Player(classType, 100, 0, 100, 150, 200); //classType, health, mana, strength, agility, speed
                break;

            case "Tana&Wilson":
                player = new Player(classType, 80, 0, 50, 200, 50); //classType, health, mana, strength, agility, speed
                break;

            default:
                break;
        }
        $('.heroInfo').html(`<img src="./assets/teamOne_Pics/${classType}.gif" class="selectedHeroPic">` +
            `<div class="selectedHero">` +
            `<h3 class="hName">${classType}</h3>` +
            `<p class="playerHealth">Health: ${player.health}</p>` +
            `<p>Power: ${player.mana}</p>` +
            `<p>Strenght: ${player.strength}</p>` +
            `<p>Agility: ${player.agility}</p>` +
            `<p>Speed: ${player.speed}</p>` +
            `</div>`)

        //display fighter Name in the middle column    
        $('.selectedPlayerName').text(`${player.classType}`);
    },

    setPreFight: function () {
        // Create a lets find Enemey Btn
        let fight = $('.fightBtn');
        fight.html(`<button type="button"  class="btn-lg btn-outline-dark fightBtn">Let's Find Enemy</button>`);


        // Create Game Control Btns 
        $('.fightBtn').on('click', function () {
            GameManager.setFight()
            fight.hide();
            $('.gameButtons').html(`<button type="button" onclick="GameManager.setFight()" class="btn-lg btn-outline-dark nextEnemy cntrBtn">Next Enemy</button>` +
                `<button type="button" onclick="" class="btn-lg btn-outline-danger attack cntrBtn">Attack</button>` +
                `<button type="button" class="btn-lg btn-outline-warning defend cntrBtn">Defend</button>` +
                `<button type="button" class="btn-lg btn-outline-dark dodge cntrBtn">Dodge</button>`);

            $('.gameDiscrip').hide();
            $('.gameDiscrip2').hide();


            //diplay Names after find button pressed 
            $('.fighterName').addClass("visible");
        });



    },

    setFight: function () {

        let enemy0 = new Enemy("Roxy", 200, 0, 1000, 150, 100);
        let enemy1 = new Enemy("Daniel", 2000, 0, 150, 100, 100);

        let chooseRandomEnemy = Math.floor(Math.random() * 2);
        console.log(chooseRandomEnemy);

        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy0;
                break;
            case 1:
                enemy = enemy1;
                break;
        }


        //create Enemy stats
        $('.getEnemy').html(`<img src="./assets/enemyPics/${enemy.enemyType}.gif" class="selectedHeroPic">` +
            `<div class="selectedHero">` +
            `<h3 class="hName">${enemy.enemyType}</h3>` +
            `<p class="enemyHealth">Health: ${enemy.health}</p>` +
            `<p>Power: ${enemy.mana}</p>` +
            `<p>Strenght: ${enemy.strength}</p>` +
            `<p>Agility: ${enemy.agility}</p>` +
            `<p>Speed: ${enemy.speed}</p>` +
            `</div>`);

        //display fighter Name in the middle column
        $('.selectedEnemyName').html(enemy.enemyType);
    }
};




