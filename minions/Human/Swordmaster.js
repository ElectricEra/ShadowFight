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
