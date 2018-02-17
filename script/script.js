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
		let queue = animationQueue();
	
		minion1Debouncer = false;
		setTimeout(()=>{minion1Debouncer = true}, 1100);

		auraFlow(queue, 0, 1, card1, card2, minion1, minion2)
		hitFlow(queue, 0, card1, card2, minion1, minion2, 'move-right');
		if (!minion2.isAlive) {
			queue.addEvent(1000, () => {
				displayWinner(card1);
				applyEffect(4, minion1, minion2)
			})
		} else {
			auraFlow(queue, 1000, 2, card1, card2, minion1, minion2)
		}
		queue.start();
	}
})

card2.addEventListener('click', () => {
	if (minion1.isAlive && minion2.isAlive && minion2Debouncer) {
		let queue = animationQueue();

		minion2Debouncer = false;
		setTimeout(()=>{minion2Debouncer = true}, 1100);

		auraFlow(queue, 0, 1, card2, card1, minion2, minion1)
		hitFlow(queue, 0, card2, card1, minion2, minion1, 'move-left');
		if (!minion1.isAlive) {
			queue.addEvent(1000, () => {
				displayWinner(card2);
				applyEffect(4, minion2, minion1)
			})
		} else {
			auraFlow(queue, 1000, 2, card2, card1, minion2, minion1)
		}
		queue.start();
	}
})

document.getElementById('auto-fight').addEventListener('click', () => {
	fight(minion1, minion2);
})
