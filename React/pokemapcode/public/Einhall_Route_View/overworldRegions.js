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
    },
    ]
}
