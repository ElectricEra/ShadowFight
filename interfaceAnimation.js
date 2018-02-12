const animationOffset = 1000;

function displayMinion(card, minion2, attacked = false) {
	var health = card.getElementsByClassName('health')[0];
	var attack = card.getElementsByClassName('attack')[0];
	var armor = card.getElementsByClassName('armor')[0];
	var attackThisTurn = card.getElementsByClassName('attackThisTurn')[0];
	var imageAnimation = card.getElementsByClassName('image-animation')[0];
	
	var newHealth = minion2.isAlive ? minion2.health : "RIP";
	var newAttack = `${minion2.attackMin}-${minion2.attackMax}`;
	var newArmor = `${minion2.armorPower}-${minion2.armorDurability}`;
	var newAttackThisTurn = minion2.attackThisTurn;

	var healthDiff = health.innerHTML ? +health.innerHTML - +newHealth : 0;
	console.log(+health.innerHTML - +newHealth)
	
	if (attacked) {
		addAnimation(imageAnimation, 'active', animationOffset)
	}
	
	if (health.innerHTML != newHealth) {
		addAnimation(health, 'highlight', animationOffset)
	}
	
	if (attack.innerHTML != newAttack) {
		addAnimation(attack, 'highlight', animationOffset)
	}
	
	if (armor.innerHTML != newArmor) {
		addAnimation(armor, 'highlight', animationOffset)
	}
	
	if (attackThisTurn.innerHTML != newAttackThisTurn) {
		addAnimation(attackThisTurn, 'highlight', animationOffset)
	}

	health.innerHTML = newHealth;
	attack.innerHTML = newAttack;
	armor.innerHTML = newArmor;
	attackThisTurn.innerHTML = newAttackThisTurn;
	imageAnimation.innerHTML = !isNaN(healthDiff) ? healthDiff : 'K.O.';
}

function addAnimation(element, className, timeout) {
	element.classList.toggle(className, true)
	setTimeout(()=>{element.classList.toggle(className, false)}, timeout);
}
