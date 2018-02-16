function fight(minion1, minion2) {
	setTimeout( () => { card1.click(); }, 0);
	setTimeout( () => { card2.click(); }, 1200);
	setTimeout( () => { minion1.isAlive && minion2.isAlive ? fight(minion1, minion2) : null }, 2400);
}

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");

let minions = [Swordmaster, Gog, Priest, Wolfraider]

let minion1 = Object.create(minions[Math.floor(Math.random()*minions.length)]);
let minion2 = Object.create(minions[Math.floor(Math.random()*minions.length)]);

let minion1Debouncer = true;
let minion2Debouncer = true;

prepareMinionToFight(minion1);
prepareMinionToFight(minion2);

displayMinionStaticData(card1, minion1);
displayMinionStaticData(card2, minion2);
displayMinion(card1, minion1);
displayMinion(card2, minion2);

applyEffect(0, minion1, minion2);
applyEffect(0, minion2, minion1);

card1.addEventListener('click', () => {
	if (minion2.isAlive && minion1.isAlive && minion1Debouncer) {
		minion1Debouncer = false;
		setTimeout(()=>{minion1Debouncer = true}, 1100);
		hit(minion1, minion2);
		cardHitAnimation(document.querySelector('#card1 > .card'), 'move-right', animationOffset);
		displayMinion(card1, minion1);
		displayMinion(card2, minion2, true);
		if (!minion2.isAlive) {
			displayWinner(card1);
			applyEffect(4, minion1, minion2)
		}

		applyEffect(2, minion1, minion2);
		displayMinion(card2, minion2);
		displayMinion(card1, minion1);
	}
})

card2.addEventListener('click', () => {
	if (minion1.isAlive && minion2.isAlive && minion2Debouncer) {
		
		applyEffect(1, minion2, minion1);
		
		minion2Debouncer = false;
		setTimeout(()=>{minion2Debouncer = true}, 1100);
		hit(minion2, minion1);
		cardHitAnimation(document.querySelector('#card2 > .card'), 'move-left', animationOffset)
		displayMinion(card2, minion2);
		displayMinion(card1, minion1, true);
		if (!minion1.isAlive) {
			displayWinner(card2);
			applyEffect(4, minion2, minion1)
		}

		applyEffect(2, minion2, minion1);
		displayMinion(card2, minion2);
		displayMinion(card1, minion1);
	}
})

document.getElementById('auto-fight').addEventListener('click', () => {
	fight(minion1, minion2);
})
