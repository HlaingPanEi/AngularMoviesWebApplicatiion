import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrl: './popular-movies.component.css'
})
export class PopularMoviesComponent implements OnInit{
  groupedMovieList: any;
  searchTerm: string = '';
 buttonColor: string = 'light-mode-toggle';
 btnIcon: string = 'far fa-moon'
 searching: boolean = false; 
  movieListResults =[
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
   
  ]
  isCollapsed = true;
  isDarkMode = false;
  Searching() {
    this.searching = !this.searching;
  }
  notSearching(){
    this.searching = false;
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }


  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }


  constructor(public authService: AuthService){}
  ngOnInit() {
    this.groupedMovieList = this.chunkArray(this.movieListResults, 2); // Groups of 2 movies per slide
  }
  chunkArray(array: any[], chunkSize: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }


}
