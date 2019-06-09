let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
        plaerAttackMove();
        defend();


    },

    resetPlayer: function (classType) {
        switch (classType) {
            case "Serg":
                player = new Player(classType, 100, 65, 200, 100); //classType, health, mana, strength, speed
                break;
            case "John":
                player = new Player(classType, 100, 20, 100, 150); //classType, health, mana, strength, speed
                break;

            case "Tana&Wilson":
                player = new Player(classType, 100, 50, 50, 200); //classType, health, mana, strength, speed
                break;

            default:
                break;
        }
        $('.heroInfo').html(`<img src="./assets/teamOne_Pics/${classType}.gif" class="selectedHeroPic">` +
            `<div class="selectedHero">` +
            `<h3 class="hName">${classType}</h3>` +
            `<p class="playerHealth">Health: ${player.health}</p>` +
            `<p>Mana: ${player.mana}</p>` +
            `<p>Strenght: ${player.strength}</p>` +
            // `<p>Agility: ${player.agility}</p>` +
            `<p>Speed: ${player.speed}</p>` +
            `</div>`)

        //display fighter Name in the middle column    
        $('.selectedPlayerName').text(`${player.classType}`);
    },

    setPreFight: function () {
        // Create a lets find Enemey Btn
        let fight = $('.fightBtn');
        fight.html(`<button type="button"  class="btn-lg btn-outline-dark findEnemyBtn">Let's Find Enemy</button>`);


        // Create Game Control Btns 
        $('.findEnemyBtn').on('click', function () {
            GameManager.setFight()
            fight.hide();
            $('.gameButtons').html(`<button type="button" onclick="GameManager.setFight()" class="btn-lg btn-outline-dark nextEnemy cntrBtn">Next Enemy</button>` +
                `<button type="button" onclick="" class="btn-lg btn-outline-danger startFightBtn cntrBtn">Start Fight</button>`);
            // hide middle column game disc
            $('.gameDiscrip').hide();
            $('.gameDiscrip2').hide();

            //diplay Names after find button pressed 
            $('.fighterName').addClass("visible");


        });

        $(document).on('click', '.startFightBtn', function () {
            $('.gameButtons').html(
                `<button type="button" onclick="" class="btn-lg btn-outline-danger attack cntrBtn">Attack</button>` +
                `<button type="button" class="btn-lg btn-outline-warning defend cntrBtn">Defend</button>`);
            PlayerMoves.firstMoveCalc();
        });

    },

    setFight: function () {

        let enemy0 = new Enemy("Roxy", 20, 0, 100, 150);
        let enemy1 = new Enemy("Daniel", 200, 0, 150, 250);

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
            `<p>Mana: ${enemy.mana}</p>` +
            `<p>Strenght: ${enemy.strength}</p>` +
            // `<p>Agility: ${enemy.agility}</p>` +
            `<p>Speed: ${enemy.speed}</p>` +
            `</div>`);

        //display fighter Name in the middle column
        $('.selectedEnemyName').html(enemy.enemyType);

    },

};




// Player attack move 
function plaerAttackMove() {
    $(document).on('click', '.attack', function () {
        let playerHitPoints = PlayerMoves.playerAttack();
        $('.gameStats').html(`<p>You hit <strong>${enemy.enemyType}</strong> with ${playerHitPoints} points</p>`);

        enemy.health = enemy.health - playerHitPoints;
        console.log(enemy.health);

        $('.enemyHealth').html(`Health: ${enemy.health}`);
        $('.enemyTimer').show();
        EnemyMoves.enemyTimerFun();


        if (enemy.health <= 0) {
            $('.enemyHealth').html(`Health: 0`);
            $('.attack').hide();
            $('.defend').hide();
            $('.VS').html(`<p>${player.classType} You won</p>`);

        }

    });
};

// Enemy attack move 
function enemyAttackMove() {

    let enemyHitPoint = EnemyMoves.enemyAttack();
    $('.gameStats').html(`<p><strong>${enemy.enemyType}</strong> hit you with ${enemyHitPoint} points</p>`);

    player.health = player.health - enemyHitPoint;
    console.log(player.health);

    $('.playerHealth').html(`Health: ${player.health}`);

    if (player.health <= 0) {
        $('.playerHealth').html(`Health: 0`);
        $('.attack').hide();
        $('.defend').hide();
        $('.VS').html(`<p>${player.classType} You lost</p>`);
    }
};





function defend() {
    $(document).on('click', '.defend', function () {
        alert("test");
    });
};