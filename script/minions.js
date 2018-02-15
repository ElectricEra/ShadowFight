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

    "description": "Who has a sword - can be called a swordsman. Who is the best among them - can be called a swordmaster. ©Swordmaster"
}

let Imp = {
    "name": "Imp",
    "race": "Demon",
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

    "auraName": "Demon blood",
    "auraShortDescription": "Restore 1 health at the end of turn.",
    "auraLongDescription": "Demon blood helps to regenerate. Imp restores 1 helath at the end of each turn.",
    "auraEffects": [
        {
            "name": "Demon blood",
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

    "description": "Bloody imp. "
}
