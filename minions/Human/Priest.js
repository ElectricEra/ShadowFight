let Priest = {
    "name": "Priest",
    "race": "Human",
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
