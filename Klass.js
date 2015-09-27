var Bard = {
  names: [
    {
      name: "Elf",
      options: ["Astrafel", "Daelwyn", "Feliana", "Damarra", "Sistranalle", "Pendrell", "Melliandre", "Dagoliir"]
    },
    {
      name: "Human",
      options: ["Baldric", "Leena", "Dunwick", "Willem", "Edwyn", "Florian", "Seraphine", "Quorra", "Charlotte", "Lily", "Ramonde", "Cassandra"]
    }
  ],
  look: [
    {
      name: "eyes",
      options:[
        "Knowing Eyes", "Fiery Eyes", "Joyous Eyes"
      ]
    },
    {
      name: "hair",
      options: [
        "Fancy Hair", "Wild Hair", "Stylish Cap"
      ]
    },
    {
      name: "clothing",
      options:[
        "Finery", "Traveling Clothes", "Poor Clothes"
      ]
    },
    {
      name: "etc",
      options:[
        "Fit Body", "Well-fed Body", "Thin Body"
      ]
    }
  ],
  baseHP:6,
  baseDMG:6,
  baseLoad:9,
  races: [
    // should be in starting moves?
    {
      name: "Elf",
      text:"When you enter an important location (your call) you can ask the GM for one fact from the history of that location."
    },
    {
      name: "Human",
      text:"When you first enter a civilized settlement someone who respects the custom of hospitality to minstrels will take you in as their guest."
    }
  ],
  alignment: [
    {
      name:"Good",
      text:"Perform your art to aid someone else."
    },
    {
      name:"Neutral",
      text:"Avoid a conflict or defuse a tense situation."
    },
    {
      name:"Chaotic",
      text:"Spur others to significant and unplanned decisive action."
    }
  ],
  bonds: [
    "This is not my first adventure with _______________.",
    "I sang stories of _______________ long before I ever met them in person.",
    "_______________ is often the butt of my jokes.",
    "I am writing a ballad about the adventures of _______________.",
    "_______________ trusted me with a secret.",
    "_______________ does not trust me, and for good reason."
  ],
  startingGear: {
    automatic:[
      {
        name: "dungeon rations",
        description: "dungeon rations",
        uses: 5,
        weight: 1
      }
    ],
    options:[
      {
        name: "instrument",
        numberGranted: 1,
        options: [
          {
            name: "Your father's mandolin, repaired",
            objects: [
              {
                name: "Mandolin",
                description: "Your father's mandolin, repaired",
                weight: 0
              }
            ]
          },
          {
            name: "A fine lute, a gift from a noble",
            objects: [
              {
                name: "Lute",
                description: "A fine lute, a gift from a noble",
                weight: 0
              }
            ]
          },
          {
            name: "The pipes with which you courted your first love",
            objects: [
              {
                name: "Pipes",
                description: "The pipes with which you courted your first love",
                weight: 0
              }
            ]
          },
          {
            name: "A stolen horn",
            objects: [
              {
                name: "Horn",
                description: "A stolen horn",
                weight: 0
              }
            ]
          },
          {
            name: "A fiddle, never before played",
            objects: [
              {
                name: "Fiddle",
                description: "A fiddle, never before played",
                weight: 0
              }
            ]
          },
          {
            name: "A songbook in a forgotten tongue",
            objects: [
              {
                name: "Songbook",
                description: "A songbook in a forgotten tongue",
                weight: 0
              }
            ]
          }
        ]
      },
      {
        name: "clothing",
        numberGranted: 1,
        options: [
          {
            name: "Leather armor",
            objects: [
              {
                name: "Leather armor",
                description: "Leather armor",
                weight: 1,
                armor: 1
              }
            ]
          },
          {
            name: "Ostentatious clothes",
            objects: [
              {
                name: "Clothes",
                description: "Ostentatious clothes",
                weight: 0
              }
            ]
          }
        ]
      },
      {
        name: "armament",
        numberGranted: 1,
        options: [
          {
            name: "Dueling rapier (close, precise, 2 weight)",
            objects: [
              {
                name: "Rapier",
                description: "Dueling rapier",
                weight: 2,
                tags: [
                  "close",
                  "precise"
                ]
              }
            ]
          },
          {
            name: "Worn bow (near, 2 weight), bundle of arrows (3 ammo, 1 weight), and short sword (close, 1 weight)",
            objects: [
              {
                name: "Bow",
                description: "Worn bow",
                weight: 2,
                tags: [
                  "near"
                ]
              },
              {
                name: "Arrows",
                description: "Bundle of arrows",
                weight: 1,
                ammo: 3
              },
              {
                name: "Sword",
                description: "Short sword",
                weight: 1,
                tags: [
                  "close"
                ]
              }
            ]
          }
        ]
      },
      {
        name: "etc",
        numberGranted: 1,
        options: [
          {
            name: "Adventuring gear (1 weight)",
            objects: [
              {
                name: "Adventuring gear",
                description: "Adventuring gear",
                weight: 1
              }
            ]
          },
          {
            name: "Bandages (0 weight)",
            objects: [
              {
                name: "Bandages",
                description: "Bandages",
                weight: 0
              }
            ]
          },
          {
            name: "Halfling pipeleaf (0 weight)",
            objects: [
              {
                name: "Pipeleaf",
                description: "Halfling pipeleaf",
                weight: 0
              }
            ]
          },
          {
            name: "3 coins",
            objects: [
              {
                name: "Coins",
                description: "3 coins",
                weight: 0
              }
            ]
          }
        ]
      }
    ]
  },
  moves: {
    starting:[],
    mid:[],
    advanced:[]
  }
}
