import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Results } from './models/results';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 
  constructor() { }
  private TopRated =[
    {
      "adult": false,
      "backdrop_path": "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 278,
      "original_language": "en",
      "original_title": "The Shawshank Redemption",
      "overview": "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      "popularity": 184.065,
      "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
      "release_date": "1994-09-23",
      "title": "The Shawshank Redemption",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 27202
    },
    {
      "adult": false,
      "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 238,
      "original_language": "en",
      "original_title": "The Godfather",
      "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "popularity": 158.466,
      "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "release_date": "1972-03-14",
      "title": "The Godfather",
      "video": false,
      "vote_average": 8.689,
      "vote_count": 20665
    },
    {
      "adult": false,
      "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 240,
      "original_language": "en",
      "original_title": "The Godfather Part II",
      "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      "popularity": 91.326,
      "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      "release_date": "1974-12-20",
      "title": "The Godfather Part II",
      "video": false,
      "vote_average": 8.572,
      "vote_count": 12465
    },
    {
      "adult": false,
      "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
      "genre_ids": [
        18,
        36,
        10752
      ],
      "id": 424,
      "original_language": "en",
      "original_title": "Schindler's List",
      "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      "popularity": 75.201,
      "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      "release_date": "1993-12-15",
      "title": "Schindler's List",
      "video": false,
      "vote_average": 8.566,
      "vote_count": 15875
    },
    {
      "adult": false,
      "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
      "genre_ids": [
        18
      ],
      "id": 389,
      "original_language": "en",
      "original_title": "12 Angry Men",
      "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
      "popularity": 51.438,
      "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
      "release_date": "1957-04-10",
      "title": "12 Angry Men",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 8676
    },
    {
      "adult": false,
      "backdrop_path": "/m4TUa2ciEWSlk37rOsjiSIvZDXE.jpg",
      "genre_ids": [
        16,
        10751,
        14
      ],
      "id": 129,
      "original_language": "ja",
      "original_title": "千と千尋の神隠し",
      "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
      "popularity": 107.09,
      "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      "release_date": "2001-07-20",
      "title": "Spirited Away",
      "video": false,
      "vote_average": 8.538,
      "vote_count": 16545
    },
    {
      "adult": false,
      "backdrop_path": "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 19404,
      "original_language": "hi",
      "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
      "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      "popularity": 43.205,
      "poster_path": "/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
      "release_date": "1995-10-20",
      "title": "Dilwale Dulhania Le Jayenge",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 4439
    },
    {
      "adult": false,
      "backdrop_path": "/oOv2oUXcAaNXakRqUPxYq5lJURz.jpg",
      "genre_ids": [
        18,
        28,
        80,
        53
      ],
      "id": 155,
      "original_language": "en",
      "original_title": "The Dark Knight",
      "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      "popularity": 142.909,
      "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "release_date": "2008-07-16",
      "title": "The Dark Knight",
      "video": false,
      "vote_average": 8.516,
      "vote_count": 32940
    },
    {
      "adult": false,
      "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
      "genre_ids": [
        35,
        53,
        18
      ],
      "id": 496243,
      "original_language": "ko",
      "original_title": "기생충",
      "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      "popularity": 107.192,
      "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "release_date": "2019-05-30",
      "title": "Parasite",
      "video": false,
      "vote_average": 8.505,
      "vote_count": 18321
    },
    {
      "adult": false,
      "backdrop_path": "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
      "genre_ids": [
        14,
        18,
        80
      ],
      "id": 497,
      "original_language": "en",
      "original_title": "The Green Mile",
      "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      "popularity": 80.478,
      "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
      "release_date": "1999-12-10",
      "title": "The Green Mile",
      "video": false,
      "vote_average": 8.506,
      "vote_count": 17458
    },
    {
      "adult": false,
      "backdrop_path": "/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg",
      "genre_ids": [
        16,
        18,
        10752
      ],
      "id": 12477,
      "original_language": "ja",
      "original_title": "火垂るの墓",
      "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
      "popularity": 0.051,
      "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
      "release_date": "1988-04-16",
      "title": "Grave of the Fireflies",
      "video": false,
      "vote_average": 8.457,
      "vote_count": 5573
    },
  
    {
      "adult": false,
      "backdrop_path": "/7lyq8hK0MhPHpUXdnqbFvZYSfkk.jpg",
      "genre_ids": [
        18,
        10749
      ],
      "id": 11216,
      "original_language": "it",
      "original_title": "Nuovo Cinema Paradiso",
      "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
      "popularity": 44.297,
      "poster_path": "/gCI2AeMV4IHSewhJkzsur5MEp6R.jpg",
      "release_date": "1988-11-17",
      "title": "Cinema Paradiso",
      "video": false,
      "vote_average": 8.45,
      "vote_count": 4369
    }
  ]
 private Results =[
  {
    "adult": false,
    "backdrop_path": "/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg",
    "genre_ids": [
      16,
      12,
      10751,
      35
    ],
    "id": 1241982,
    "original_language": "en",
    "original_title": "Moana 2",
    "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
    "popularity": 3633.267,
    "poster_path": "/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg",
    "release_date": "2024-11-27",
    "title": "Moana 2",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 118
  },
  {
    "adult": false,
    "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    "genre_ids": [
      878,
      28,
      12
    ],
    "id": 912649,
    "original_language": "en",
    "original_title": "Venom: The Last Dance",
    "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
    "popularity": 2710.484,
    "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    "release_date": "2024-10-22",
    "title": "Venom: The Last Dance",
    "video": false,
    "vote_average": 6.409,
    "vote_count": 948
  },
  {
    "adult": false,
    "backdrop_path": "/iR79ciqhtaZ9BE7YFA1HpCHQgX4.jpg",
    "genre_ids": [
      27,
      9648
    ],
    "id": 1100782,
    "original_language": "en",
    "original_title": "Smile 2",
    "overview": "About to embark on a new world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.",
    "popularity": 1599.314,
    "poster_path": "/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg",
    "release_date": "2024-10-16",
    "title": "Smile 2",
    "video": false,
    "vote_average": 6.6,
    "vote_count": 740
  },
  {
    "adult": false,
    "backdrop_path": "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
    "genre_ids": [
      16,
      878,
      10751
    ],
    "id": 1184918,
    "original_language": "en",
    "original_title": "The Wild Robot",
    "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
    "popularity": 1442.21,
    "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
    "release_date": "2024-09-12",
    "title": "The Wild Robot",
    "video": false,
    "vote_average": 8.399,
    "vote_count": 3199
  },
  {
    "adult": false,
    "backdrop_path": "/uKb22E0nlzr914bA9KyA5CVCOlV.jpg",
    "genre_ids": [
      18,
      14,
      10749
    ],
    "id": 402431,
    "original_language": "en",
    "original_title": "Wicked",
    "overview": "When ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda, the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
    "popularity": 1436.528,
    "poster_path": "/c5Tqxeo1UpBvnAc3csUm7j3hlQl.jpg",
    "release_date": "2024-11-20",
    "title": "Wicked",
    "video": false,
    "vote_average": 7.64,
    "vote_count": 268
  },
  {
    "adult": false,
    "backdrop_path": "/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
    "genre_ids": [
      28,
      12
    ],
    "id": 558449,
    "original_language": "en",
    "original_title": "Gladiator II",
    "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
    "popularity": 1293.172,
    "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    "release_date": "2024-11-13",
    "title": "Gladiator II",
    "video": false,
    "vote_average": 6.705,
    "vote_count": 820
  },
  {
    "adult": false,
    "backdrop_path": "/n4ycOGj2tRLfINTJQ3wl0vNYqpR.jpg",
    "genre_ids": [
      16,
      14,
      10751,
      12,
      35
    ],
    "id": 592983,
    "original_language": "en",
    "original_title": "Spellbound",
    "overview": "When a powerful spell turns her parents into giant monsters, a teenage princess must journey into the wild to reverse the curse before it's too late.",
    "popularity": 1176.261,
    "poster_path": "/xFSIygDiX70Esp9dheCgGX0Nj77.jpg",
    "release_date": "2024-11-22",
    "title": "Spellbound",
    "video": false,
    "vote_average": 6.563,
    "vote_count": 88
  },
  {
    "adult": false,
    "backdrop_path": "/2fxnTXr8NwyTFkunkimJkGkhqfy.jpg",
    "genre_ids": [
      18,
      28,
      27
    ],
    "id": 1118031,
    "original_language": "es",
    "original_title": "Apocalipsis Z: el principio del fin",
    "overview": "When a kind of rabies that transforms people into aggressive creatures spreads across the planet, Manel isolates himself at home with his cat, relying on his wits to survive; but soon they must go out in search of food, by land and by sea, dodging many dangers.",
    "popularity": 1134.156,
    "poster_path": "/wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg",
    "release_date": "2024-10-04",
    "title": "Apocalypse Z: The Beginning of the End",
    "video": false,
    "vote_average": 6.779,
    "vote_count": 611
  },
  {
    "adult": false,
    "backdrop_path": "/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 1034541,
    "original_language": "en",
    "original_title": "Terrifier 3",
    "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
    "popularity": 1072.453,
    "poster_path": "/l1175hgL5DoXnqeZQCcU3eZIdhX.jpg",
    "release_date": "2024-10-09",
    "title": "Terrifier 3",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 1143
  },
  {
    "adult": false,
    "backdrop_path": "/kwXycPsLA6SV3KUOagn343TtMOf.jpg",
    "genre_ids": [
      28,
      878,
      53
    ],
    "id": 791042,
    "original_language": "en",
    "original_title": "Levels",
    "overview": "After witnessing his girlfriend's murder, a man risks everything - including reality itself - to discover the truth.",
    "popularity": 973.541,
    "poster_path": "/y1xm0jMIlx9Oo2a3jWNyLGm43sJ.jpg",
    "release_date": "2024-11-01",
    "title": "Levels",
    "video": false,
    "vote_average": 5.7,
    "vote_count": 28
  },
  {
    "adult": false,
    "backdrop_path": "/dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
    "genre_ids": [
      28,
      35,
      878
    ],
    "id": 533535,
    "original_language": "en",
    "original_title": "Deadpool & Wolverine",
    "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
    "popularity": 931.245,
    "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    "release_date": "2024-07-24",
    "title": "Deadpool & Wolverine",
    "video": false,
    "vote_average": 7.683,
    "vote_count": 5672
  },
  {
    "adult": false,
    "backdrop_path": "/5O0mkQGfOQM4OktFOCep9YmXK79.jpg",
    "genre_ids": [
      28,
      878,
      53,
      35,
      27
    ],
    "id": 995803,
    "original_language": "en",
    "original_title": "Arena Wars",
    "overview": "In 2045 convicted criminals are given the opportunity to compete on the world's #1 televised sporting event, Arena Wars. They must survive 7 rooms and 7 of the most vicious killers in the country. If they win, they regain their freedom.",
    "popularity": 893.844,
    "poster_path": "/4dRtXjk1rcsZlaMJpBn6Nh9cTfO.jpg",
    "release_date": "2024-06-25",
    "title": "Arena Wars",
    "video": false,
    "vote_average": 5.2,
    "vote_count": 15
  },
  {
    "adult": false,
    "backdrop_path": "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    "genre_ids": [
      27,
      878
    ],
    "id": 945961,
    "original_language": "en",
    "original_title": "Alien: Romulus",
    "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
    "popularity": 879.685,
    "poster_path": "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
    "release_date": "2024-08-13",
    "title": "Alien: Romulus",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 2468
  },
  {
    "adult": false,
    "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
    "genre_ids": [
      18,
      27,
      878
    ],
    "id": 933260,
    "original_language": "en",
    "original_title": "The Substance",
    "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
    "popularity": 846.195,
    "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
    "release_date": "2024-09-07",
    "title": "The Substance",
    "video": false,
    "vote_average": 7.275,
    "vote_count": 2264
  },
  {
    "adult": false,
    "backdrop_path": "/uMXVeVL2v57lMv6pqBmegDHHPqz.jpg",
    "genre_ids": [
      16,
      878,
      12,
      10751
    ],
    "id": 698687,
    "original_language": "en",
    "original_title": "Transformers One",
    "overview": "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.",
    "popularity": 785.538,
    "poster_path": "/qbkAqmmEIZfrCO8ZQAuIuVMlWoV.jpg",
    "release_date": "2024-09-11",
    "title": "Transformers One",
    "video": false,
    "vote_average": 8.094,
    "vote_count": 786
  },
  {
    "adult": false,
    "backdrop_path": "/kyVcNF6GRthdiT4oZn5XgJtl0F7.jpg",
    "genre_ids": [
      28,
      80
    ],
    "id": 1233327,
    "original_language": "te",
    "original_title": "మట్కా",
    "overview": "Set between the years 1958 and 1982, Matka tells the story of Vasu, who rises from poverty to create a powerful gambling empire in India, ultimately leading the nation into a battle with the government. Based on real events, the tale explores themes of love, moral choices, and the consequences of ambition.",
    "popularity": 784.456,
    "poster_path": "/jrHIKDq9xvKJhYBDvYwmAfs8qvr.jpg",
    "release_date": "2024-11-14",
    "title": "Matka",
    "video": false,
    "vote_average": 5.714,
    "vote_count": 7
  },
  {
    "adult": false,
    "backdrop_path": "/rOmUuQEZfPXglwFs5ELLLUDKodL.jpg",
    "genre_ids": [
      28,
      35,
      14
    ],
    "id": 845781,
    "original_language": "en",
    "original_title": "Red One",
    "overview": "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous bounty hunter in a globe-trotting, action-packed mission to save Christmas.",
    "popularity": 781.81,
    "poster_path": "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
    "release_date": "2024-10-31",
    "title": "Red One",
    "video": false,
    "vote_average": 6.628,
    "vote_count": 183
  },
  {
    "adult": false,
    "backdrop_path": "/6lE2e6j8qbtQR8aHxQNJlwxdmKV.jpg",
    "genre_ids": [
      28,
      18,
      80,
      53
    ],
    "id": 974453,
    "original_language": "en",
    "original_title": "Absolution",
    "overview": "An aging ex-boxer gangster working as muscle for a Boston crime boss receives an upsetting diagnosis.  Despite a faltering memory, he attempts to rectify the sins of his past and reconnect with his estranged children. He is determined to leave a positive legacy for his grandson, but the criminal underworld isn’t done with him and won’t loosen their grip willingly.",
    "popularity": 730.78,
    "poster_path": "/cNtAslrDhk1i3IOZ16vF7df6lMy.jpg",
    "release_date": "2024-10-31",
    "title": "Absolution",
    "video": false,
    "vote_average": 6.1,
    "vote_count": 68
  },
  {
    "adult": false,
    "backdrop_path": "/1FBHAQnq7Bs3djBmaNkfdVbnCUE.jpg",
    "genre_ids": [
      28,
      53
    ],
    "id": 1124641,
    "original_language": "en",
    "original_title": "Classified",
    "overview": "Operating alone in the field for more than 20 years, a CIA hitman uses the \"Help Wanted\" section of the newspapers to get his orders from the Agency. His long-lost daughter, now a UK MI6 analyst, tracks him down to deliver shocking news: his CIA boss has been dead for years and the division long since shut down. Together, they set out to discover whose orders he's been executing.",
    "popularity": 690.096,
    "poster_path": "/3k8jv1kSAAc0rCfFGtWDDQL4dfK.jpg",
    "release_date": "2024-09-19",
    "title": "Classified",
    "video": false,
    "vote_average": 5.8,
    "vote_count": 80
  },
  {
    "adult": false,
    "backdrop_path": "/au3o84ub27qTZiMiEc9UYzN74V3.jpg",
    "genre_ids": [
      28,
      878,
      53
    ],
    "id": 1035048,
    "original_language": "en",
    "original_title": "Elevation",
    "overview": "A single father and two women venture from the safety of their homes to face monstrous creatures to save the life of a young boy.",
    "popularity": 803.478,
    "poster_path": "/uQhYBxOVFU6s9agD49FnGHwJqG5.jpg",
    "release_date": "2024-11-07",
    "title": "Elevation",
    "video": false,
    "vote_average": 6.281,
    "vote_count": 73
  },
  {
    "adult": false,
    "backdrop_path": "/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg",
    "genre_ids": [
      16,
      12,
      35,
      18,
      10751
    ],
    "id": 1022789,
    "original_language": "en",
    "original_title": "Inside Out 2",
    "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    "popularity": 763.807,
    "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    "release_date": "2024-06-11",
    "title": "Inside Out 2",
    "video": false,
    "vote_average": 7.6,
    "vote_count": 4876
  },
  {
    "adult": false,
    "backdrop_path": "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 278,
    "original_language": "en",
    "original_title": "The Shawshank Redemption",
    "overview": "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "popularity": 184.065,
    "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    "release_date": "1994-09-23",
    "title": "The Shawshank Redemption",
    "video": false,
    "vote_average": 8.7,
    "vote_count": 27202
  },
  {
    "adult": false,
    "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 238,
    "original_language": "en",
    "original_title": "The Godfather",
    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "popularity": 158.466,
    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "release_date": "1972-03-14",
    "title": "The Godfather",
    "video": false,
    "vote_average": 8.689,
    "vote_count": 20665
  },
  {
    "adult": false,
    "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 240,
    "original_language": "en",
    "original_title": "The Godfather Part II",
    "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    "popularity": 91.326,
    "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    "release_date": "1974-12-20",
    "title": "The Godfather Part II",
    "video": false,
    "vote_average": 8.572,
    "vote_count": 12465
  },
  {
    "adult": false,
    "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
    "genre_ids": [
      18,
      36,
      10752
    ],
    "id": 424,
    "original_language": "en",
    "original_title": "Schindler's List",
    "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    "popularity": 75.201,
    "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    "release_date": "1993-12-15",
    "title": "Schindler's List",
    "video": false,
    "vote_average": 8.566,
    "vote_count": 15875
  },
  {
    "adult": false,
    "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
    "genre_ids": [
      18
    ],
    "id": 389,
    "original_language": "en",
    "original_title": "12 Angry Men",
    "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    "popularity": 51.438,
    "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    "release_date": "1957-04-10",
    "title": "12 Angry Men",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 8676
  },
  {
    "adult": false,
    "backdrop_path": "/m4TUa2ciEWSlk37rOsjiSIvZDXE.jpg",
    "genre_ids": [
      16,
      10751,
      14
    ],
    "id": 129,
    "original_language": "ja",
    "original_title": "千と千尋の神隠し",
    "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    "popularity": 107.09,
    "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "release_date": "2001-07-20",
    "title": "Spirited Away",
    "video": false,
    "vote_average": 8.538,
    "vote_count": 16545
  },
  {
    "adult": false,
    "backdrop_path": "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "id": 19404,
    "original_language": "hi",
    "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
    "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
    "popularity": 43.205,
    "poster_path": "/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
    "release_date": "1995-10-20",
    "title": "Dilwale Dulhania Le Jayenge",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 4439
  },
  {
    "adult": false,
    "backdrop_path": "/oOv2oUXcAaNXakRqUPxYq5lJURz.jpg",
    "genre_ids": [
      18,
      28,
      80,
      53
    ],
    "id": 155,
    "original_language": "en",
    "original_title": "The Dark Knight",
    "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    "popularity": 142.909,
    "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "release_date": "2008-07-16",
    "title": "The Dark Knight",
    "video": false,
    "vote_average": 8.516,
    "vote_count": 32940
  },
  {
    "adult": false,
    "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
    "genre_ids": [
      35,
      53,
      18
    ],
    "id": 496243,
    "original_language": "ko",
    "original_title": "기생충",
    "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    "popularity": 107.192,
    "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "release_date": "2019-05-30",
    "title": "Parasite",
    "video": false,
    "vote_average": 8.505,
    "vote_count": 18321
  },
  {
    "adult": false,
    "backdrop_path": "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
    "genre_ids": [
      14,
      18,
      80
    ],
    "id": 497,
    "original_language": "en",
    "original_title": "The Green Mile",
    "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    "popularity": 80.478,
    "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    "release_date": "1999-12-10",
    "title": "The Green Mile",
    "video": false,
    "vote_average": 8.506,
    "vote_count": 17458
  },
  {
    "adult": false,
    "backdrop_path": "/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg",
    "genre_ids": [
      16,
      18,
      10752
    ],
    "id": 12477,
    "original_language": "ja",
    "original_title": "火垂るの墓",
    "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
    "popularity": 0.051,
    "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
    "release_date": "1988-04-16",
    "title": "Grave of the Fireflies",
    "video": false,
    "vote_average": 8.457,
    "vote_count": 5573
  },

  {
    "adult": false,
    "backdrop_path": "/7lyq8hK0MhPHpUXdnqbFvZYSfkk.jpg",
    "genre_ids": [
      18,
      10749
    ],
    "id": 11216,
    "original_language": "it",
    "original_title": "Nuovo Cinema Paradiso",
    "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    "popularity": 44.297,
    "poster_path": "/gCI2AeMV4IHSewhJkzsur5MEp6R.jpg",
    "release_date": "1988-11-17",
    "title": "Cinema Paradiso",
    "video": false,
    "vote_average": 8.45,
    "vote_count": 4369
  }
]
  
  public getMovies(){
return this.Results;
  }
  public getTopRated(){
    return this.TopRated;
  }
}