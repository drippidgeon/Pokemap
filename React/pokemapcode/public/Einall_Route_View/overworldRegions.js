var overworldRegions = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "Route 18",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '10%',
                } ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "15-35",
                    "rate": '45%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-464.5, 668.625), getCordfromLoc(-509.34375, 668.625), getCordfromLoc(-509.34375, 724.1875), getCordfromLoc(-464.5, 724.1875), getCordfromLoc(-464.5, 668.625)]]
        }
    }, {
        "type": "Feature",
        "properties": { 
            "name": "Route 17",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Starly",
                    "area": "Grass",
                    "levels": "2-3",
                    "rate": ['50%', '50%', '40%'],
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "2-4",
                    "rate": ['40%', '50%', '50%'],
                }, {
                    "name": "Kricketot",
                    "area": "Grass",
                    "levels": "3",
                    "rate": ['10%', '0%', '10%'],
                }],
                "Gifts": [{
                    "name": "Turtwig",
                    "area": "Starter",
                    "levels": "5",
                    "rate": 'One',
                }, {
                    "name": "Chimchar",
                    "area": "Starter",
                    "levels": "5",
                    "rate": 'One',
                }, {
                    "name": "Piplup",
                    "area": "Starter",
                    "levels": "5",
                    "rate": 'One',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-464.28125, 724.03125), getCordfromLoc(-507.96875, 724.03125), getCordfromLoc(-507.96875, 777.96875), getCordfromLoc(-464.28125, 777.96875), getCordfromLoc(-464.28125, 724.03125)]]
        }
    }, {
        "type": "Feature",
        "properties": { 
            "name": "Route 1",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Starly",
                    "area": "Grass",
                    "levels": "2-3",
                    "rate": ['50%', '50%', '40%'],
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "2-4",
                    "rate": ['50%', '50%', '60%'],
                }],
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '10%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "15-20",
                    "rate": '40%',
                }, {
                    "name": "Seaking",
                    "area": "Good Rod",
                    "levels": "25-35",
                    "rate": '5%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, ],
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-463.65625, 777.9375), getCordfromLoc(-509.25, 777.9375), getCordfromLoc(-509.25, 803.6875), getCordfromLoc(-463.65625, 803.6875), getCordfromLoc(-463.65625, 777.9375),getCordfromLoc(-441.03125, 803.59375), getCordfromLoc(-486.0, 803.59375), getCordfromLoc(-486.0, 823.75), getCordfromLoc(-441.03125, 823.75), getCordfromLoc(-441.03125, 803.59375)]],
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Avenitia",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-484.53125, 803.5625), getCordfromLoc(-503.8125, 803.5625), getCordfromLoc(-503.8125, 819.375), getCordfromLoc(-484.53125, 819.375), getCordfromLoc(-484.53125, 803.5625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Gavina",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-419.78125, 800.78125), getCordfromLoc(-442.59375, 800.78125), getCordfromLoc(-442.59375, 826.375), getCordfromLoc(-419.78125, 826.375), getCordfromLoc(-419.78125, 800.78125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 2",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Wingull",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-10",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "15-20",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Good Rod",
                    "levels": "25-35",
                    "rate": '5%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Chinchou",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-402.25, 781.28125), getCordfromLoc(-441.34375, 781.28125), getCordfromLoc(-441.34375, 800.75), getCordfromLoc(-402.25, 800.75), getCordfromLoc(-402.25, 781.28125), getCordfromLoc(-402.3125, 800.84375), getCordfromLoc(-419.78125, 800.84375), getCordfromLoc(-419.78125, 820.375), getCordfromLoc(-402.3125, 820.375), getCordfromLoc(-402.3125, 800.84375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Orion City",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Sudowoodo",
                    "area": "Grass",
                    "levels": "29-31",
                    "rate": '25%',
                }, {
                    "name": "Girafarig",
                    "area": "Grass",
                    "levels": "28, 30",
                    "rate": '25%',
                }, {
                    "name": "Roselia",
                    "area": "Grass",
                    "levels": ["28-30", "28-30", "29-30"],
                    "rate": ['25%', '25%', '15%'],
                }, {
                    "name": "Floatzel",
                    "area": "Grass",
                    "levels": ["29, 31", "29, 31", "28-29, 31"],
                    "rate": ['25%', '25%', '35%'],
                }, ],
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Wingull",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Lumineon",
                    "area": "Good Rod",
                    "levels": "25-35",
                    "rate": '5%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-386.96875, 782.375), getCordfromLoc(-402.3125, 782.375), getCordfromLoc(-402.3125, 828.28125), getCordfromLoc(-386.96875, 828.28125), getCordfromLoc(-386.96875, 782.375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Traumbrache",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-373.3125, 828.25), getCordfromLoc(-407.0625, 828.25), getCordfromLoc(-407.0625, 864.8125), getCordfromLoc(-373.3125, 864.8125), getCordfromLoc(-373.3125, 828.25)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 3",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Starly",
                    "area": "Grass",
                    "levels": "2, 4",
                    "rate": ['20%', '20%', '10%'],
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "2-4",
                    "rate": ['40%', '50%', '50%'],
                }, {
                    "name": "Kricketot",
                    "area": "Grass",
                    "levels": ['3', '0', '4'],
                    "rate": ['10%', '0%', '10%'],
                }, {
                    "name": "Shinx",
                    "area": "Grass",
                    "levels": "3-4",
                    "rate": '30%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-413.0625, 205.5), getCordfromLoc(-440.375, 205.5), getCordfromLoc(-440.375, 243.625), getCordfromLoc(-413.0625, 243.625), getCordfromLoc(-413.0625, 205.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Jubilife City",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-372.09375, 744.71875), getCordfromLoc(-402.4375, 744.71875), getCordfromLoc(-402.4375, 782.40625), getCordfromLoc(-372.09375, 782.40625), getCordfromLoc(-372.09375, 744.71875), getCordfromLoc(-372.125, 782.28125),getCordfromLoc(-372.125, 782.34375), getCordfromLoc(-387.0, 782.34375), getCordfromLoc(-387.0, 801.28125), getCordfromLoc(-372.125, 801.28125), getCordfromLoc(-372.125, 782.34375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Septerna City",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Mr. Mime",
                    "area": "Grass",
                    "levels": "29-31",
                    "rate": '25%',
                }, {
                    "name": "Floatzel",
                    "area": "Grass",
                    "levels": "28-30",
                    "rate": ['30%', '30%', '40%'],
                }, {
                    "name": "Gastrodon",
                    "area": "Grass",
                    "levels": "28, 30",
                    "rate": ['25%', '25%', '35%'],
                }, {
                    "name": "Chatot",
                    "area": "Grass",
                    "levels": "28, 30",
                    "rate": ['20%', '20%', '0%'],
                }, ],
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-385.75, 706.65625), getCordfromLoc(-401.84375, 706.65625), getCordfromLoc(-401.84375, 744.75), getCordfromLoc(-385.75, 744.75), getCordfromLoc(-385.75, 706.65625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Ewigenwald Eingangsbereich",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-385.75, 688.125), getCordfromLoc(-400.03125, 688.125), getCordfromLoc(-400.03125, 706.65625), getCordfromLoc(-385.75, 706.65625), getCordfromLoc(-385.75, 688.125), getCordfromLoc(-399.9375, 688.09375), getCordfromLoc(-420.375, 688.09375), getCordfromLoc(-420.375, 725.3125), getCordfromLoc(-399.9375, 725.3125), getCordfromLoc(-399.9375, 688.09375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Ewigenwald Zentralbereich",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-364.03125, 612.75), getCordfromLoc(-402.5, 612.75), getCordfromLoc(-402.5, 688.15625), getCordfromLoc(-364.03125, 688.15625), getCordfromLoc(-364.03125, 612.75)]]
        }
    }, {
            "type": "Feature",
            "properties": {
                "name": "Himmelspfeilbrücke",
                "world": "Overworld",
                "Pokémon": {
                    "Surfing": [{
                        "name": "Tentacool",
                        "area": "Surfing",
                        "levels": "20-30",
                        "rate": '60%',
                    }, {
                        "name": "Tentacruel",
                        "area": "Surfing",
                        "levels": "20-40",
                        "rate": '9%',
                    }, {
                        "name": "Shellos",
                        "area": "Surfing",
                        "levels": "20-30",
                        "rate": '30%',
                    }, {
                        "name": "Gastrodon",
                        "area": "Surfing",
                        "levels": "20-40",
                        "rate": '1%',
                    }, ],
                    "Fishing": [{
                        "name": "Magikarp",
                        "area": "Old Rod",
                        "levels": "3-15",
                        "rate": '100%',
                    }, {
                        "name": "Magikarp",
                        "area": "Good Rod",
                        "levels": "10-25",
                        "rate": '55%',
                    }, {
                        "name": "Finneon",
                        "area": "Good Rod",
                        "levels": "10-25",
                        "rate": '45%',
                    }, {
                        "name": "Staryu",
                        "area": "Super Rod",
                        "levels": "20-50",
                        "rate": '15%',
                    }, {
                        "name": "Gyarados",
                        "area": "Super Rod",
                        "levels": "30-55",
                        "rate": '40%',
                    }, {
                        "name": "Lumineon",
                        "area": "Super Rod",
                        "levels": "30-55",
                        "rate": '45%',
                    }, ]
                }
            },
            "geometry": {
                "type": "Polygon",
                "coordinates":[[getCordfromLoc(-325.8125, 520.78125), getCordfromLoc(-364.1875, 520.78125), getCordfromLoc(-364.1875, 688.25), getCordfromLoc(-325.8125, 688.25), getCordfromLoc(-325.8125, 520.78125)]]
            }
        }, {
        "type": "Feature",
        "properties": {
            "name": "Stratos City",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-338.28125, 468.59375), getCordfromLoc(-389.65625, 468.59375), getCordfromLoc(-389.65625, 520.875), getCordfromLoc(-338.28125, 520.875), getCordfromLoc(-338.28125, 468.59375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 4",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-292.78125, 469.90625), getCordfromLoc(-338.25, 469.90625), getCordfromLoc(-338.25, 507.6875), getCordfromLoc(-292.78125, 507.6875), getCordfromLoc(-292.78125, 469.90625), getCordfromLoc(-278.8125, 489.125), getCordfromLoc(-292.8125, 489.125), getCordfromLoc(-292.8125, 507.71875), getCordfromLoc(-278.8125, 507.71875), getCordfromLoc(-278.8125, 489.125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Wüstenresort",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-277.34375, 457.375), getCordfromLoc(-292.84375, 457.375), getCordfromLoc(-292.84375, 489.15625), getCordfromLoc(-277.34375, 489.15625), getCordfromLoc(-277.34375, 457.375), getCordfromLoc(-244.375, 414.34375), getCordfromLoc(-277.375, 414.34375), getCordfromLoc(-277.375, 467.875), getCordfromLoc(-244.375, 467.875), getCordfromLoc(-244.375, 414.34375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Einklangspassage",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-253.125, 492.15625), getCordfromLoc(-278.90625, 492.15625), getCordfromLoc(-278.90625, 502.59375), getCordfromLoc(-253.125, 502.59375), getCordfromLoc(-253.125, 492.15625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Rayono City",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-223.625, 469.96875), getCordfromLoc(-253.0625, 469.96875), getCordfromLoc(-253.0625, 507.5625), getCordfromLoc(-223.625, 507.5625), getCordfromLoc(-223.625, 469.96875), getCordfromLoc(-238.21875, 507.53125), getCordfromLoc(-254.125, 507.53125), getCordfromLoc(-254.125, 554.25), getCordfromLoc(-238.21875, 554.25), getCordfromLoc(-238.21875, 507.53125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 5",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-223.53125, 435.28125), getCordfromLoc(-240.9375, 435.28125), getCordfromLoc(-240.9375, 470.03125), getCordfromLoc(-223.53125, 470.03125), getCordfromLoc(-223.53125, 435.28125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Marea-Zugbrücke",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-217.75, 353.09375), getCordfromLoc(-238.9375, 353.09375), getCordfromLoc(-238.9375, 435.3125), getCordfromLoc(-217.75, 435.3125), getCordfromLoc(-217.75, 353.09375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Marea City",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-209.65625, 297.90625), getCordfromLoc(-238.59375, 297.90625), getCordfromLoc(-238.59375, 353.15625), getCordfromLoc(-209.65625, 353.15625), getCordfromLoc(-209.65625, 297.90625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Pokémon World Tournament (PWT)",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-238.5625, 296.5), getCordfromLoc(-265.75, 296.5), getCordfromLoc(-265.75, 334.09375), getCordfromLoc(-238.5625, 334.09375), getCordfromLoc(-238.5625, 296.5)]]
        }
    }, {
            "type": "Feature",
            "properties": {
                "name": "Route 6",
                "world": "Overworld",
                "Pokémon": {
                    "Surfing": [{
                        "name": "Tentacool",
                        "area": "Surfing",
                        "levels": "20-30",
                        "rate": '60%',
                    }, {
                        "name": "Tentacruel",
                        "area": "Surfing",
                        "levels": "20-40",
                        "rate": '9%',
                    }, {
                        "name": "Shellos",
                        "area": "Surfing",
                        "levels": "20-30",
                        "rate": '30%',
                    }, {
                        "name": "Gastrodon",
                        "area": "Surfing",
                        "levels": "20-40",
                        "rate": '1%',
                    }, ],
                    "Fishing": [{
                        "name": "Magikarp",
                        "area": "Old Rod",
                        "levels": "3-15",
                        "rate": '100%',
                    }, {
                        "name": "Magikarp",
                        "area": "Good Rod",
                        "levels": "10-25",
                        "rate": '55%',
                    }, {
                        "name": "Finneon",
                        "area": "Good Rod",
                        "levels": "10-25",
                        "rate": '45%',
                    }, {
                        "name": "Staryu",
                        "area": "Super Rod",
                        "levels": "20-50",
                        "rate": '15%',
                    }, {
                        "name": "Gyarados",
                        "area": "Super Rod",
                        "levels": "30-55",
                        "rate": '40%',
                    }, {
                        "name": "Lumineon",
                        "area": "Super Rod",
                        "levels": "30-55",
                        "rate": '45%',
                    }, ]
                }
            },
            "geometry": {
                "type": "Polygon",
                "coordinates":[[getCordfromLoc(-193.6875, 260.96875), getCordfromLoc(-223.6875, 260.96875), getCordfromLoc(-223.6875, 297.9375), getCordfromLoc(-193.6875, 297.9375), getCordfromLoc(-193.6875, 260.96875)]]
            }
        }, {
        "type": "Feature",
        "properties": {
            "name": "Elektrolithhöhle Zugang",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-178.46875, 260.9375), getCordfromLoc(-193.8125, 260.9375), getCordfromLoc(-193.8125, 279.46875), getCordfromLoc(-178.46875, 279.46875), getCordfromLoc(-178.46875, 260.9375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Panaero City",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-149.0, 242.46875), getCordfromLoc(-193.8125, 242.46875), getCordfromLoc(-193.8125, 260.96875), getCordfromLoc(-149.0, 260.96875), getCordfromLoc(-149.0, 242.46875), getCordfromLoc(-163.46875, 260.9375), getCordfromLoc(-178.46875, 260.9375), getCordfromLoc(-178.46875, 279.53125), getCordfromLoc(-163.46875, 279.53125), getCordfromLoc(-163.46875, 260.9375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 7",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-132.84375, 260.9375), getCordfromLoc(-163.5, 260.9375), getCordfromLoc(-163.5, 298.0625), getCordfromLoc(-132.84375, 298.0625), getCordfromLoc(-132.84375, 260.9375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Wendelberg Eingang",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-119.09375, 279.5625), getCordfromLoc(-132.84375, 279.5625), getCordfromLoc(-132.84375, 298.0625), getCordfromLoc(-119.09375, 298.0625), getCordfromLoc(-119.09375, 279.5625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Wendelberg",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-96.65625, 298.03125), getCordfromLoc(-125.1875, 298.03125), getCordfromLoc(-125.1875, 334.6875), getCordfromLoc(-96.65625, 334.6875), getCordfromLoc(-96.65625, 298.03125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Nevaio City",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-93.40625, 334.6875), getCordfromLoc(-125.65625, 334.6875), getCordfromLoc(-125.65625, 350.90625), getCordfromLoc(-93.40625, 350.90625), getCordfromLoc(-93.40625, 334.6875), getCordfromLoc(-109.8125, 350.90625), getCordfromLoc(-125.59375, 350.90625), getCordfromLoc(-125.59375, 370.65625), getCordfromLoc(-109.8125, 370.65625), getCordfromLoc(-109.8125, 350.90625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 8",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-94.84375, 350.90625), getCordfromLoc(-109.8125, 350.90625), getCordfromLoc(-109.8125, 383.34375), getCordfromLoc(-94.84375, 383.34375), getCordfromLoc(-94.84375, 350.90625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Moor von Nevaio",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-65.03125, 358.34375), getCordfromLoc(-94.84375, 358.34375), getCordfromLoc(-94.84375, 395.25), getCordfromLoc(-65.03125, 395.25), getCordfromLoc(-65.03125, 358.34375)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Dragonspiral Tower Eingang",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-78.8125, 332.4375), getCordfromLoc(-93.5, 332.4375), getCordfromLoc(-93.5, 350.90625), getCordfromLoc(-78.8125, 350.90625), getCordfromLoc(-78.8125, 332.4375)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Dragonspiral Tower Außen",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-50.8125, 331.65625), getCordfromLoc(-78.8125, 331.65625), getCordfromLoc(-78.8125, 358.25), getCordfromLoc(-50.8125, 358.25), getCordfromLoc(-50.8125, 331.65625)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Zylinderbrücke",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-94.875, 383.3125), getCordfromLoc(-113.6875, 383.3125), getCordfromLoc(-113.6875, 435.875), getCordfromLoc(-94.875, 435.875), getCordfromLoc(-94.875, 383.3125)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Route 9",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-94.875, 435.8125), getCordfromLoc(-112.5, 435.8125), getCordfromLoc(-112.5, 465.28125), getCordfromLoc(-94.875, 465.28125), getCordfromLoc(-94.875, 435.8125)]]
        }
    },   {
        "type": "Feature",
        "properties": {
            "name": "Twindrake City",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-82.375, 465.25), getCordfromLoc(-112.1875, 465.25), getCordfromLoc(-112.1875, 502.28125), getCordfromLoc(-82.375, 502.28125), getCordfromLoc(-82.375, 465.25)]]
        }
    },   {
        "type": "Feature",
        "properties": {
            "name": "Route 11",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-97.25, 502.28125), getCordfromLoc(-111.8125, 502.28125), getCordfromLoc(-111.8125, 534.875), getCordfromLoc(-97.25, 534.875), getCordfromLoc(-97.25, 502.28125)]]
        }
    },   {
        "type": "Feature",
        "properties": {
            "name": "Dorfbrücke",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-87.84375, 534.875), getCordfromLoc(-119.09375, 534.875), getCordfromLoc(-119.09375, 593.875), getCordfromLoc(-87.84375, 593.875), getCordfromLoc(-87.84375, 534.875)]]
        }
    },   {
        "type": "Feature",
        "properties": {
            "name": "Route 12",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-95.3125, 593.875), getCordfromLoc(-112.125, 593.875), getCordfromLoc(-112.125, 625.1875), getCordfromLoc(-95.3125, 625.1875), getCordfromLoc(-95.3125, 593.875)]]
        }
    },   {
        "type": "Feature",
        "properties": {
            "name": "Tessera",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-94.59375, 625.1875), getCordfromLoc(-112.125, 625.1875), getCordfromLoc(-112.125, 643.71875), getCordfromLoc(-94.59375, 643.71875), getCordfromLoc(-94.59375, 625.1875)]]
        }
    },   {
        "type": "Feature",
        "properties": {
            "name": "Route 13 Nord",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-112.125, 622.0), getCordfromLoc(-127.96875, 622.0), getCordfromLoc(-127.96875, 643.71875), getCordfromLoc(-112.125, 643.71875), getCordfromLoc(-112.125, 622.0),getCordfromLoc(-97.5, 643.71875), getCordfromLoc(-127.96875, 643.71875), getCordfromLoc(-127.96875, 662.4375), getCordfromLoc(-97.5, 662.4375), getCordfromLoc(-97.5, 643.71875)]]
        }
    },   {
        "type": "Feature",
        "properties": {
            "name": "Route 13 Süd",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-127.96875, 643.71875), getCordfromLoc(-158.375, 643.71875), getCordfromLoc(-158.375, 696.03125), getCordfromLoc(-127.96875, 696.03125), getCordfromLoc(-127.96875, 643.71875)]]
        }
    },   {
        "type": "Feature",
        "properties": {
            "name": "Ondula",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-158.375, 662.21875), getCordfromLoc(-173.78125, 662.21875), getCordfromLoc(-173.78125, 699.21875), getCordfromLoc(-158.375, 699.21875), getCordfromLoc(-158.375, 662.21875)]]
        }
    },   {
        "type": "Feature",
        "properties": {
            "name": "Route 14",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-173.34375, 643.71875), getCordfromLoc(-200.375, 643.71875), getCordfromLoc(-200.375, 699.21875), getCordfromLoc(-173.34375, 699.21875), getCordfromLoc(-173.34375, 643.71875)]]
        }
    },   {
        "type": "Feature",
        "properties": {
            "name": "Weißer Wald",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-200.375, 623.4375), getCordfromLoc(-236.125, 623.4375), getCordfromLoc(-236.125, 666.375), getCordfromLoc(-200.375, 666.375), getCordfromLoc(-200.375, 623.4375)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Route 15",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-220.28125, 586.96875), getCordfromLoc(-239.9375, 586.96875), getCordfromLoc(-239.9375, 623.4375), getCordfromLoc(-220.28125, 623.4375), getCordfromLoc(-220.28125, 586.96875)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Wunderbrücke",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-223.8125, 541.5), getCordfromLoc(-234.09375, 541.5), getCordfromLoc(-234.09375, 586.96875), getCordfromLoc(-223.8125, 586.96875), getCordfromLoc(-223.8125, 541.5)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Route 16",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-221.15625, 507.65625), getCordfromLoc(-238.21875, 507.65625), getCordfromLoc(-238.21875, 541.5), getCordfromLoc(-221.15625, 541.5), getCordfromLoc(-221.15625, 507.65625)]]
        }
    },  {
            "type": "Feature",
            "properties": {
                "name": "Bucht von Ondula",
                "world": "Overworld",
                "Pokémon": {}
            },
            "geometry": {
                "type": "Polygon",
                "coordinates":[[getCordfromLoc(-143.59375, 700.625), getCordfromLoc(-173.78125, 700.625), getCordfromLoc(-173.78125, 736.53125), getCordfromLoc(-143.59375, 736.53125), getCordfromLoc(-143.59375, 700.625)]]
            }
        },  {
        "type": "Feature",
        "properties": {
            "name": "Route 21",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-113.46875, 696.71875), getCordfromLoc(-143.59375, 696.71875), getCordfromLoc(-143.59375, 734.875), getCordfromLoc(-113.46875, 734.875), getCordfromLoc(-113.46875, 696.71875)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Abidaya City",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-81.34375, 699.46875), getCordfromLoc(-113.46875, 699.46875), getCordfromLoc(-113.46875, 722.28125), getCordfromLoc(-81.34375, 722.28125), getCordfromLoc(-81.34375, 699.46875)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Route 22",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-79.84375, 661.9375), getCordfromLoc(-98.25, 661.9375), getCordfromLoc(-98.25, 699.46875), getCordfromLoc(-79.84375, 699.46875), getCordfromLoc(-79.84375, 661.9375)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Eingangsbereich Krater",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-88.4375, 643.5), getCordfromLoc(-97.53125, 643.5), getCordfromLoc(-97.53125, 659.9375), getCordfromLoc(-88.4375, 659.9375), getCordfromLoc(-88.4375, 643.5)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Krater",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-55.0625, 618.0), getCordfromLoc(-88.4375, 618.0), getCordfromLoc(-88.4375, 661.9375), getCordfromLoc(-55.0625, 661.9375), getCordfromLoc(-55.0625, 618.0)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Route 23",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-44.53125, 589.375), getCordfromLoc(-69.53125, 589.375), getCordfromLoc(-69.53125, 618.0), getCordfromLoc(-44.53125, 618.0), getCordfromLoc(-44.53125, 589.375),getCordfromLoc(-23.03125, 545.0625), getCordfromLoc(-44.53125, 545.0625), getCordfromLoc(-44.53125, 618.0), getCordfromLoc(-23.03125, 618.0), getCordfromLoc(-23.03125, 545.0625)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Siegesstraße",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-0.6875, 552.625), getCordfromLoc(-25.75, 552.625), getCordfromLoc(-25.75, 596.21875), getCordfromLoc(-0.6875, 596.21875), getCordfromLoc(-0.6875, 552.625)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Siegesstraße unterer Außenbereich",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-6.21875, 488.5625), getCordfromLoc(-23.03125, 488.5625), getCordfromLoc(-23.03125, 552.625), getCordfromLoc(-6.21875, 552.625), getCordfromLoc(-6.21875, 488.5625)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Siegesstraße Waldgebiet",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-23.03125, 488.5625), getCordfromLoc(-44.78125, 488.5625), getCordfromLoc(-44.78125, 513.15625), getCordfromLoc(-23.03125, 513.15625), getCordfromLoc(-23.03125, 488.5625)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Siegesstraße Klippenbereich",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-0.84375, 442.4375), getCordfromLoc(-47.8125, 442.4375), getCordfromLoc(-47.8125, 488.5625), getCordfromLoc(-0.84375, 488.5625), getCordfromLoc(-0.84375, 442.4375)]]
        }
    },  {
            "type": "Feature",
            "properties": {
                "name": "Vapydro City",
                "world": "Overworld",
                "Pokémon": {}
            },
            "geometry": {
                "type": "Polygon",
                "coordinates":[[getCordfromLoc(-315.09375, 254.5), getCordfromLoc(-333.59375, 254.5), getCordfromLoc(-333.59375, 295.53125), getCordfromLoc(-315.09375, 295.53125), getCordfromLoc(-315.09375, 254.5)]]
            }
        },  {
        "type": "Feature",
        "properties": {
            "name": "Vapydro-Werke",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-333.25, 254.59375), getCordfromLoc(-368.0625, 254.59375), getCordfromLoc(-368.0625, 276.21875), getCordfromLoc(-333.25, 276.21875), getCordfromLoc(-333.25, 254.59375)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Pokéwood",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-285.75, 251.0625), getCordfromLoc(-315.15625, 251.0625), getCordfromLoc(-315.15625, 287.71875), getCordfromLoc(-285.75, 287.71875), getCordfromLoc(-285.75, 251.0625)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Route 20",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-314.15625, 217.46875), getCordfromLoc(-347.9375, 217.46875), getCordfromLoc(-347.9375, 254.59375), getCordfromLoc(-314.15625, 254.59375), getCordfromLoc(-314.15625, 217.46875)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Dausing-Hof",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-284.875, 196.625), getCordfromLoc(-314.21875, 196.625), getCordfromLoc(-314.21875, 238.65625), getCordfromLoc(-284.875, 238.65625), getCordfromLoc(-284.875, 196.625)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Dausing",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-315.71875, 198.90625), getCordfromLoc(-346.875, 198.90625), getCordfromLoc(-346.875, 217.5625), getCordfromLoc(-315.71875, 217.5625), getCordfromLoc(-315.71875, 198.90625)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Route 19",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-328.53125, 168.59375), getCordfromLoc(-347.21875, 168.59375), getCordfromLoc(-347.21875, 198.9375), getCordfromLoc(-328.53125, 198.9375), getCordfromLoc(-328.53125, 168.59375)]]
        }
    },  {
        "type": "Feature",
        "properties": {
            "name": "Eventura City",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates":[[getCordfromLoc(-345.5, 157.25), getCordfromLoc(-380.78125, 157.25), getCordfromLoc(-380.78125, 185.125), getCordfromLoc(-345.5, 185.125), getCordfromLoc(-345.5, 157.25)]]
        }
    },
    ]
}
