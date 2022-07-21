use('class');

// QUERY //
db.xmen.updateMany(
  {},
  {
    $rename: {
      'name': 'hero_name',
      'true_name': 'full_name' 
    },
    $set: { power: 100 },
    $currentDate: { lastUpdate: { $type: 'timestamp' } }
  }
)

// RESULTS //
[
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09741e"
    },
    "origin": "Nova York",
    "occupation": "Headmistress",
    "powers": [
      "Atmocinese",
      "Hidrocinese",
      "Pirocinese",
      "Aerocinese",
      "Voo",
      "Criocinese",
      "Eletrocinese",
      "Resistência Mental",
      "Eletrólise",
      "Electromagnetismo",
      "Manipulação de Energia Eólica",
      "Potencial Mágico",
      "Combate e roubo",
      "Capacidades físicas e traços",
      "Manipulação nervosa"
    ],
    "class": "omega",
    "full_name": "Ororo Munroe",
    "hero_name": "Tempestade",
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 1
      }
    },
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09741f"
    },
    "origin": "Illinois",
    "occupation": "Vice-Principal",
    "powers": [
      "Intelecto nível gênio",
      "Garras afiadas",
      "Dentes afiados",
      "Força, agilidade,Resistência e velocidade sobre-humanas"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 2
      }
    },
    "full_name": "Henry Phillip McCoy",
    "hero_name": "Fera",
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097420"
    },
    "origin": "Mississippi",
    "occupation": "Senior Staff",
    "powers": [
      "sugar energia vital , memórias e poderes de outros mutantes através da pele"
    ],
    "class": "omega",
    "full_name": "Anna Marie LeBeau",
    "hero_name": "Vampira",
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 3
      }
    },
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097421"
    },
    "origin": "Nova York",
    "occupation": "Senior Staff",
    "powers": [
      "Manipular a umidade do ar para transformar o vapor em gelo",
      "Transformar seu corpo em gelo"
    ],
    "class": "alfa",
    "full_name": "Robert Louis Drake",
    "hero_name": "Homem de Gelo ",
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 4
      }
    },
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097422"
    },
    "origin": "Estados Unidos do Leste",
    "occupation": "Senior Staff",
    "powers": [
      "Telepatia",
      "Telecinese",
      "Rajadas energéticas",
      "Resíduos da Força Fênix"
    ],
    "class": "omega",
    "full_name": "Rachel Summers",
    "hero_name": "Garota Marvel",
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 5
      }
    },
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097423"
    },
    "origin": "Montreal",
    "occupation": "Senior Staff",
    "powers": [
      "Vôo",
      "Durabilidade",
      "Super Velocidade",
      "Geração de luz",
      "Equilíbrio",
      "agilidade",
      "reflexos acima do normal",
      "Força"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 6
      }
    },
    "full_name": "Jean-Paul",
    "hero_name": "Estrela Polar",
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097424"
    },
    "origin": "Norte Americana",
    "occupation": "Senior Staff",
    "powers": [
      "Capacidade de explorar o campo eletromagnético da Terra"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 7
      }
    },
    "full_name": "Angelica Jones",
    "hero_name": "Firestar",
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097425"
    },
    "origin": "Britânica",
    "occupation": "Junior Staff",
    "powers": [
      "Poderosa energia psicocinética expelida por seu tórax",
      "Comunicação telepática"
    ],
    "class": "gama",
    "full_name": "Jonothon 'Jono' Evan Starsmore",
    "hero_name": "Câmara",
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 8
      }
    },
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097426"
    },
    "origin": "Norte Americana",
    "occupation": "Junior Staff",
    "powers": [
      "Pele Rígida Como Aço",
      "Super-Força"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 9
      }
    },
    "full_name": "Joanna Cargill",
    "hero_name": "Frenesi",
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097427"
    },
    "origin": "Vietnã",
    "occupation": "Junior Staff",
    "powers": [
      "Posse mental",
      "Posse remota",
      "Elenco de ilusão",
      "Escudo psíquico",
      "Análise sensorial",
      "Controle mental"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 10
      }
    },
    "full_name": "Xi'an Coy Manh",
    "hero_name": "Karma",
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097428"
    },
    "origin": "Norte Americana",
    "occupation": "Junior Staff",
    "powers": [
      "Força Sobre-Humana",
      "Velocidade Sobre-Humana",
      "Durabilidade sobre-humana",
      "Projeção de chama (forma magma)",
      "Elasticidade de absorção de impacto",
      "Talentos anfíbios"
    ],
    "class": "gama",
    "full_name": "Paige Elisabeth Guthrie",
    "hero_name": "Escalpo",
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 11
      }
    },
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097429"
    },
    "origin": "Império Shi'ar",
    "occupation": "Junior Staff",
    "powers": [
      "Força Sobre-Humana",
      "Vigor Sobre-Humano"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 12
      }
    },
    "full_name": "Ava'Dara Naganandin",
    "hero_name": "Rapina",
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742a"
    },
    "origin": "Michigan",
    "occupation": "Adjunct Staff/Campus Guard",
    "powers": [
      "Aprimoramentos cibernéticos que garantem velocidade, força, durabilidade e reflexos sobre-humanos "
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 13
      }
    },
    "full_name": "Luther Manning",
    "hero_name": "Deathlok",
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742b"
    },
    "origin": "Desconhecida",
    "occupation": "Adjunct Staff",
    "powers": [
      "Vôo",
      "Fator de cicatrização acelerado Força",
      "durabilidade sobre-humana",
      "Maleabilidade física",
      "Capacidade de replicar objetos físicos",
      "Vazio extra-dimensional dentro do corpo que pode armazenar objetos e pessoas"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 14
      }
    },
    "full_name": "Doop",
    "hero_name": "Doop",
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742c"
    },
    "origin": "Sibéria",
    "occupation": "Member",
    "powers": [
      "Transmutação em Aço Orgânico",
      "Super-Força",
      "Resistência Sobre-Humana",
      "Super-Vigor",
      "Agilidade e Velocidade Aumentadas",
      "Incapacidade de Sangrar"
    ],
    "class": "omega",
    "full_name": "Piotr 'Peter' Nikolaievitch",
    "hero_name": "Colossus",
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 15
      }
    },
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742d"
    },
    "origin": "Bavaria, Alemanha",
    "occupation": "Member",
    "powers": [
      "Teletransporte",
      "Super Agilidade",
      "Aderência física",
      "Habilidade de fundir-se com as sombras"
    ],
    "class": "gama",
    "full_name": "Kurt Wagner",
    "hero_name": "Noturno",
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 16
      }
    },
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742e"
    },
    "origin": "Norte Americano",
    "occupation": "Member",
    "powers": [
      "Telepatia nível-ômega",
      "Telecinese",
      "Intelecto Genial"
    ],
    "class": "omega",
    "full_name": "Quentin Quire",
    "hero_name": "Kid Omega",
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 17
      }
    },
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742f"
    },
    "origin": "País de Gales",
    "occupation": "Member",
    "powers": [
      "Asas",
      "Poeira Alucinógena",
      "Teletransporte",
      "Magia"
    ],
    "class": "gama",
    "full_name": "Megan Gwynn",
    "hero_name": "Fada",
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 18
      }
    },
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097430"
    },
    "origin": "Tókio",
    "occupation": "Member",
    "powers": [
      "Armadura Psionica"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 19
      }
    },
    "full_name": "Hisako Ichiki",
    "hero_name": "Armadura",
    "power": 100
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097431"
    },
    "origin": "Califórnia",
    "occupation": "Member",
    "powers": [
      "Energia Plasmatica",
      "Imunidade Telepática"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658426579,
        "i": 20
      }
    },
    "full_name": "Jubilation Lee",
    "hero_name": "Jubileu",
    "power": 100
  }
]