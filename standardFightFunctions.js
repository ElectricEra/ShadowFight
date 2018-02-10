function roll(a) {
	return a >= Math.random();
}

function getValue(min, max) {
	let a = parseInt(min);
	let b = parseInt(max);
	return a + Math.floor(Math.random() * (b - a + 1))
}

function coreHitLogic(minion1, minion2) {
	if (roll(minion1.critChance)) {
		minion1.attackThisTurn *= minion1.critModifier;
		console.log("Critical strike!")
	}

	if (roll(minion2.armorProcChance)) {
		if (minion2.armorDurability > 0) {
			minion2.armorDurability -= 1;
			if (minion2.armorPower < minion1.attackThisTurn) {
				minion1.damageToApply = minion1.attackThisTurn - minion2.armorPower;
			} else {
				minion1.damageToApply = 0;
			}
		} else {
			minion1.damageToApply = minion1.attackThisTurn;
		}
	} else {
		console.log("Target\'s armor didn't work.")
	}
	
	minion2.health -= minion1.damageToApply;
}

function hit(minion1, minion2) {
	if (roll(minion1.canHit)) {
		if (roll(minion1.hitChance)) {
			coreHitLogic(minion1, minion2);	
		} else {
			console.log("Unit missed his attack.")
		}
	} else {
		console.log("Unit wasn\'t able to hit.")
	}
}

function getAttack(minion) {
	minion.attackThisTurn = getValue(minion.attackMin, minion.attackMax)
}

function attack(minion1, minion2) {
	getAttack(minion1);
	hit(minion1, minion2);
	console.log(minion1);
	console.log(minion2);
}

function prepareMinionToFight(minion, friendlyPassive, friendlyAura, enemyPassive, enemyAura) {
}

function displayMinion() {
	document.getElementById('card1').innerHTML = `
		<div class='card'>
			<div class='general'>
				<div class='left'>
					
				</div>
				<div class='image'>
					<img src='' />
				</div>
				<div class='right'>
				
				</div>
			</div>
			<div class='detailed'>
			</div>
			<div class='text'>
				<div>
			</div>
		</div>
	`
}

let minion1 = {
    "name": "Swordmaster",
    "race": "Human",
    "level": 1,
    "health": 12,
    "hitChance": 1,
    "amountOfAttacks": 1,
    "attackMin": 2,
    "attackMax": 3,
    "critChance": 0,
    "critModifier": 1,
    "armorProcChance": 1,
    "armorPower": 1,
    "armorDurability": 3,
    "canHit": 1
}

/*
    "name": "Swordmaster", //Name
    "race": "Human", //Race
    "level": 1, //Level
    "health": 12, //Starting health
    "hitChance": 1, // Hit chance [0%..100%]-[0..1]
    "amountOfAttacks": 1, // Amount of attacks [0..1..]-[0..1..]
    "attackMin": 2, // Minimal attack value
    "attackMax": 3, // Maximal attack value
    "critChance": 0, // Chance of having critical attack
    "critModifier": 1, // Critical strike modifier [100%..200%..]-[1..2..]
    "armorProcChance": 1, // Armor effect chance [0%..100%]-[0..1]
    "armorPower": 1, // Armor power
    "armorDurability": 3, // Armor durability
    "canHit": 1 // Can minion arrack this turn [0%..100%]-[0..1]
*/

let minion2 = {
    "name": "Imp",
    "race": "Demon",
    "level": 1,
    "health": 12,
    "hitChance": 1,
    "amountOfAttacks": 1,
    "attackMin": 2,
    "attackMax": 3,
    "critChance": 0,
    "critModifier": 1,
    "armorProcChance": 1,
    "armorPower": 1,
    "armorDurability": 3,
    "canHit": 1
}

//displayMinion();