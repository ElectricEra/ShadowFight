/*
    "name": "Swordmaster", //Name
    "race": "Human", //Race
    "level": 1, //Level
    "basicHealth": 12, //Starting health
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

let Swordmaster = {
    "name": "Swordmaster",
    "race": "Human",
    "level": 1,
    "basicHealth": 12,
    "hitChance": 1,
    "amountOfAttacks": 1,
    "attackMin": 2,
    "attackMax": 3,
    "critChance": 0,
    "critModifier": 1,
    "armorProcChance": 1,
    "armorPower": 1,
    "armorDurability": 3,
    "canHit": 1,

    "auraName": "Battle drums",
    "auraShortDescription": "Increase mininal damage by 1.",
    "auraLongDescription": "Encourages minion with nice drum solo. This rhytm increases minimal damage by 1.",
    "auraEffects": [
        {
            "name": "Battle drums",
            "whenToModify": 0,
            "chance": 1,
            "affectedRace": "all",
            "affectedLevel": "all",
            "maxProcs": "inf",
            "effect": [
                {
                    "target": "self",
                    "statToModify": "attackMin",
                    "valueMin": 1,
                    "valueMax": 1,
                    "typeOfModifier": "clean",
                    "duration": "inf"
                }
            ]
        }
    ],

    "description": "Who has a sword - can be called a swordsman. Who is the best among them - can be called a swordmaster. ©Swordmaster",
    "img": "http://homm3sod.ru/images/content/253.jpg"
}

let Gog = {
    "name": "Gog",
    "race": "Demon",
    "level": 1,
    "basicHealth": 10,
    "hitChance": 1,
    "amountOfAttacks": 1,
    "attackMin": 2,
    "attackMax": 3,
    "critChance": 0.33,
    "critModifier": 2,
    "armorProcChance": 1,
    "armorPower": 2,
    "armorDurability": 2,
    "canHit": 1,

    "auraName": "Flamy hands",
    "auraShortDescription": "33% to crit(2x)",
    "auraLongDescription": "Flamy hands inflict more damage than normal. 33% to crit(2x)",
    "auraEffects": [],

    "description": "Bloody hell.",
    "img": "http://homm3sod.ru/images/content/318.jpg"
}

let Priest = {
    "name": "Imp",
    "race": "Demon",
    "level": 1,
    "basicHealth": 13,
    "hitChance": 1,
    "amountOfAttacks": 1,
    "attackMin": 1,
    "attackMax": 2,
    "critChance": 0,
    "critModifier": 1,
    "armorProcChance": 1,
    "armorPower": 2,
    "armorDurability": 3,
    "canHit": 1,

    "auraName": "Holy light",
    "auraShortDescription": "Restore 1 health at the end of turn.",
    "auraLongDescription": "Holy light blessed this priest. He restores 1 helath at the end of each turn.",
    "auraEffects": [
        {
            "name": "Holy light",
            "whenToModify": 2,
            "chance": 1,
            "affectedRace": "all",
            "affectedLevel": "all",
            "maxProcs": "inf",
            "effect": [
                {
                    "target": "self",
                    "statToModify": "health",
                    "valueMin": 1,
                    "valueMax": 1,
                    "typeOfModifier": "clean",
                    "duration": 1
                }
            ]
        }
    ],

    "description": "Light shows da wae.",
    "img": "http://homm3sod.ru/images/content/254.jpg"
}
