let player;  //we declare player in global scope instead of constructor, so it's we can use it any where 

function Player(classType, health, mana, strength, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    // this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    firstMoveCalc: function () {
        //who attack first ? 
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        let firstMoveCalc = function () {
            if (getPlayerSpeed >= getEnemySpeed) {
                $(".gameStats").html(`<p class="fightChoice"><strong>${player.classType}</strong> you have faster
                 speed you can attack or defent first?</p>`)
            } else {
                $(".gameStats").html(`<p class="fightChoice"><strong>${enemy.enemyType}</strong> have faster
                 speed and going to attack first!</p>`);
                EnemyMoves.enemyTimerFun();
            }
        }
        firstMoveCalc();
    },

    playerAttack: function () {
        let baseDamage = player.strength * player.mana / 1000
        // this will always make sure that our baseDamage is round number without any decimal points
        let roundBaseDamge = Math.floor(baseDamage)
        // Making sure that we game a bit randomness 
        let offsetDamage = Math.floor(Math.random() * 10) + 1;
        return roundBaseDamge + offsetDamage;
    },

};







