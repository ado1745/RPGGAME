let player;  //we declare player in global scope instead of constructor, so it's we can use it any where 

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}





let PlayerMoves = {
    calcAttack: function () {
        //who attack first ? 
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;


        // player Attack
        let playerAttack = function () {
            let calBaseDamage;
            if (player.power > 0) {
                calBaseDamage = player.strength * player.power / 1000;
            } else {
                calBaseDamage = player.strength * player.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * 10) + 1;
            let calOuPutDamage = calBaseDamage + offsetDamage;
            //number of hits
            let numberOfHits = Math.floor(Math.random() * (player.agility / 10) / 2) + 1;
            let attackValues = [calOuPutDamage, numberOfHits];
            return attackValues;
        };

        // enemy Attack
        let eneyAttack = function () {
            let calBaseDamage;
            if (enemy.power > 0) {
                calBaseDamage = player.strength * enemy.power / 1000;
            } else {
                calBaseDamage = player.strength * enemy.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * 10) + 1;
            let calOuPutDamage = calBaseDamage + offsetDamage;
            //number of hits
            let numberOfHits = Math.floor(Math.random() * (player.agility / 10) / 2) + 1;
            let attackValues = [calOuPutDamage, numberOfHits];
            return attackValues;
        };

        let getPlayerHealth = $('.playerHealth')
        let getEnemyHealth = $('.enemyHealth')
        //intiate attack
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert(`You hit ${playerAttackValues[1]} damage ${playerAttackValues[1]} times`);
            if (enemy.health <= 0) {
                alert("You win, refresh browser to play again");
                getPlayerHealth.html(`Health: ${player.health}`);
                getEnemyHealth.text(`Health: 0`);
            } else {
                getEnemyHealth.html(`Health: ${enemy.health}`);

                let enemyAttackValues = eneyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert(`Enemy hit ${enemyAttackValues[1]} damage ${enemyAttackValues[1]} times`);
                if (player.health <= 0) {
                    alert("You lose, refresh browser to play again");
                    getPlayerHealth.html(`Health: )`);
                    getEnemyHealth.text(`Health: ${enemy.health}`);

                } else {
                    getPlayerHealth.text(`Health: ${player.health}`);

                }
            };
        }

    }
}


