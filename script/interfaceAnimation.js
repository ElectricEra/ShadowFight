const animationOffset = 1000;
const animationStep = 0.2
const animationFrames = 1 / animationStep;
const animationFrameOffset = animationStep * animationOffset;

function animationQueue() {
	let arrayOfEvents = [];
	return {
		addEvent: (timeOffset, events) => arrayOfEvents.push({timeOffset, action: events}),
		start: (clearEvents = true) => {
			console.log(arrayOfEvents)
			arrayOfEvents.forEach(event => {console.log(event.action, event.timeOffset);setTimeout(event.action, event.timeOffset)}); 
			if (clearEvents) { arrayOfEvents = []; }
		}
	}
}

function setIntoClassContainer(parent, className, value, index = 0) {
	parent.getElementsByClassName(className)[index].innerHTML = value;
}

function displayMinionStaticData(card, minion) {
	card.querySelector(".image > img").src = minion.img;
	setIntoClassContainer(card, 'name', minion.name);
	setIntoClassContainer(card, 'level', minion.level);
	setIntoClassContainer(card, 'race', minion.race);
	setIntoClassContainer(card, 'detailed', `<b>${minion.auraName}</b> - ${minion.auraShortDescription}`);
}

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

function cardHitAnimation(element, className, timeout) {
	element.classList.toggle('lift', true);
	setTimeout(()=>{element.classList.toggle(className, true)}, timeout * 0.2);
	setTimeout(()=>{element.classList.toggle(className, false)}, timeout * 0.8);
	setTimeout(()=>{element.classList.toggle('lift', false)}, timeout * 1.0);
}

function displayWinner(element) {
	setTimeout(()=>element.classList.add('winner'),1500);
}
