let Wolfraider = {
    "name": "Wolfraider",
    "race": "Orc",
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

    "auraName": "Angry wolf",
    "auraShortDescription": "Couterattack for 1 damage.(100%)",
    "auraLongDescription": "Wolf protects you. He has 100% chance to couterattack for 1 damage.",
    "auraEffects": [
        {
            "name": "Angry wolf",
            "whenToModify": 2,
            "chance": 1,
            "affectedRace": "all",
            "affectedLevel": "all",
            "maxProcs": "inf",
            "effect": [
                {
                    "target": "enemy",
                    "statToModify": "health",
                    "valueMin": 1,
                    "valueMax": 1,
                    "typeOfModifier": "hit",
                    "duration": "inf"
                }
            ]
        }
    ],

    "description": "Woof, woof, mother*@!^ers",
    "img": "http://homm3sod.ru/images/content/347.jpg"
}
