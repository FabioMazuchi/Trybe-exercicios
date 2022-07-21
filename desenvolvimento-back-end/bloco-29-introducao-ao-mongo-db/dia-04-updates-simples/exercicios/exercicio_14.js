use('class');

// QUERY //
db.xmen.updateMany(
  { class: 'unknown' },
  {
    $unset: { class: '' },
    $currentDate: { lastUpdate: { $type: 'timestamp' } }
  }
)

// RESULTS //
[
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09741e"
    },
    "name": "Tempestade",
    "true_name": "Ororo Munroe",
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
    "class": "omega"
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09741f"
    },
    "name": "Fera",
    "true_name": "Henry Phillip McCoy",
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
        "t": 1658425838,
        "i": 1
      }
    }
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097420"
    },
    "name": "Vampira",
    "true_name": "Anna Marie LeBeau",
    "origin": "Mississippi",
    "occupation": "Senior Staff",
    "powers": [
      "sugar energia vital , memórias e poderes de outros mutantes através da pele"
    ],
    "class": "omega"
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097421"
    },
    "name": "Homem de Gelo ",
    "true_name": "Robert Louis Drake",
    "origin": "Nova York",
    "occupation": "Senior Staff",
    "powers": [
      "Manipular a umidade do ar para transformar o vapor em gelo",
      "Transformar seu corpo em gelo"
    ],
    "class": "alfa"
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097422"
    },
    "name": "Garota Marvel",
    "true_name": "Rachel Summers",
    "origin": "Estados Unidos do Leste",
    "occupation": "Senior Staff",
    "powers": [
      "Telepatia",
      "Telecinese",
      "Rajadas energéticas",
      "Resíduos da Força Fênix"
    ],
    "class": "omega"
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097423"
    },
    "name": "Estrela Polar",
    "true_name": "Jean-Paul",
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
        "t": 1658425838,
        "i": 2
      }
    }
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097424"
    },
    "name": "Firestar",
    "true_name": "Angelica Jones",
    "origin": "Norte Americana",
    "occupation": "Senior Staff",
    "powers": [
      "Capacidade de explorar o campo eletromagnético da Terra"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658425838,
        "i": 3
      }
    }
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097425"
    },
    "name": "Câmara",
    "true_name": "Jonothon 'Jono' Evan Starsmore",
    "origin": "Britânica",
    "occupation": "Junior Staff",
    "powers": [
      "Poderosa energia psicocinética expelida por seu tórax",
      "Comunicação telepática"
    ],
    "class": "gama"
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097426"
    },
    "name": "Frenesi",
    "true_name": "Joanna Cargill",
    "origin": "Norte Americana",
    "occupation": "Junior Staff",
    "powers": [
      "Pele Rígida Como Aço",
      "Super-Força"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658425838,
        "i": 4
      }
    }
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097427"
    },
    "name": "Karma",
    "true_name": "Xi'an Coy Manh",
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
        "t": 1658425838,
        "i": 5
      }
    }
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097428"
    },
    "name": "Escalpo",
    "true_name": "Paige Elisabeth Guthrie",
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
    "class": "gama"
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097429"
    },
    "name": "Rapina",
    "true_name": "Ava'Dara Naganandin",
    "origin": "Império Shi'ar",
    "occupation": "Junior Staff",
    "powers": [
      "Força Sobre-Humana",
      "Vigor Sobre-Humano"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658425838,
        "i": 6
      }
    }
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742a"
    },
    "name": "Deathlok",
    "true_name": "Luther Manning",
    "origin": "Michigan",
    "occupation": "Adjunct Staff/Campus Guard",
    "powers": [
      "Aprimoramentos cibernéticos que garantem velocidade, força, durabilidade e reflexos sobre-humanos "
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658425838,
        "i": 7
      }
    }
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742b"
    },
    "name": "Doop",
    "true_name": "Doop",
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
        "t": 1658425838,
        "i": 8
      }
    }
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742c"
    },
    "name": "Colossus",
    "true_name": "Piotr 'Peter' Nikolaievitch",
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
    "class": "omega"
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742d"
    },
    "name": "Noturno",
    "true_name": "Kurt Wagner",
    "origin": "Bavaria, Alemanha",
    "occupation": "Member",
    "powers": [
      "Teletransporte",
      "Super Agilidade",
      "Aderência física",
      "Habilidade de fundir-se com as sombras"
    ],
    "class": "gama"
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742e"
    },
    "name": "Kid Omega",
    "true_name": "Quentin Quire",
    "origin": "Norte Americano",
    "occupation": "Member",
    "powers": [
      "Telepatia nível-ômega",
      "Telecinese",
      "Intelecto Genial"
    ],
    "class": "omega"
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c09742f"
    },
    "name": "Fada",
    "true_name": "Megan Gwynn",
    "origin": "País de Gales",
    "occupation": "Member",
    "powers": [
      "Asas",
      "Poeira Alucinógena",
      "Teletransporte",
      "Magia"
    ],
    "class": "gama"
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097430"
    },
    "name": "Armadura",
    "true_name": "Hisako Ichiki",
    "origin": "Tókio",
    "occupation": "Member",
    "powers": [
      "Armadura Psionica"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658425838,
        "i": 9
      }
    }
  },
  {
    "_id": {
      "$oid": "62d990bc907e7c420c097431"
    },
    "name": "Jubileu",
    "true_name": "Jubilation Lee",
    "origin": "Califórnia",
    "occupation": "Member",
    "powers": [
      "Energia Plasmatica",
      "Imunidade Telepática"
    ],
    "lastUpdate": {
      "$timestamp": {
        "t": 1658425838,
        "i": 10
      }
    }
  }
]