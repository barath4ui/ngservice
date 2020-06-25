import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InlinedataService {

  constructor() { }

  getHerosData(){
    return [
      {
          "name":"Batman", 
          "publisher":"DC Comics", 
          "comic_name":"Bruce Wayne",
          "first_appearance":"Detective Comics #27",
          "characters":"Bruce Wayne"
      },
      {
          "name":"Superman", 
          "publisher":"DC Comics", 
          "comic_name":"Kal-El",
          "first_appearance":"Action Comics #1",
          "characters":"Kal-El"
      },
      {
          "name":"Flash", 
          "publisher":"DC Comics", 
          "comic_name":"Jay Garrick",
          "first_appearance":"Flash Comics #1",
          "characters":"Jay Garrick, Barry Allen, Wally West, Bart Allen"
      },
      {
          "name":"Green Lantern", 
          "publisher":"DC Comics", 
          "comic_name":"Alan Scott",
          "first_appearance":"All-American Comics #16",
          "characters":"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
      },
      {
          "name":"Green Arrow", 
          "publisher":"DC Comics", 
          "comic_name":"Oliver Queen",
          "first_appearance":"More Fun Comics #73",
          "characters":"Oliver Queen"
      },
      {
          "name":"Wonder Woman", 
          "publisher":"DC Comics", 
          "comic_name":"Princess Diana",
          "first_appearance":"All Star Comics #8",
          "characters":"Princess Diana"
      },
      {
          "name":"Martian Manhunter", 
          "publisher":"DC Comics", 
          "comic_name":"J'onn J'onzz",
          "first_appearance":"Detective Comics #225",
          "characters":"Martian Manhunter"
      },
      {
          "name":"Robin/Nightwing", 
          "publisher":"DC Comics", 
          "comic_name":"Dick Grayson",
          "first_appearance":"Detective Comics #38",
          "characters":"Dick Grayson"
      },
      {
          "name":"Blue Beetle", 
          "publisher":"DC Comics", 
          "comic_name":"Dan Garret",
          "first_appearance":"Mystery Men Comics #1",
          "characters":"Dan Garret, Ted Kord, Jaime Reyes"
      },
      {
          "name":"Black Canary", 
          "publisher":"DC Comics", 
          "comic_name":"Dinah Drake",
          "first_appearance":"Flash Comics #86",
          "characters":"Dinah Drake, Dinah Lance"
      },
      {
          "name":"Spider Man", 
          "publisher":"Marvel Comics", 
          "comic_name":"Peter Parker",
          "first_appearance":"Amazing Fantasy #15",
          "characters":"Peter Parker"
      },
      {
          "name":"Captain America", 
          "publisher":"Marvel Comics", 
          "comic_name":"Steve Rogers",
          "first_appearance":"Captain America Comics #1",
          "characters":"Steve Rogers"
      },
      {
          "name":"Iron Man", 
          "publisher":"Marvel Comics", 
          "comic_name":"Tony Stark",
          "first_appearance":"Tales of Suspense #39",
          "characters":"Tony Stark"
      },
      {
          "name":"Thor", 
          "publisher":"Marvel Comics", 
          "comic_name":"Thor Odinson",
          "first_appearance":"Journey into Myster #83",
          "characters":"Thor Odinson"
      },
      {
          "name":"Hulk", 
          "publisher":"Marvel Comics", 
          "comic_name":"Bruce Banner",
          "first_appearance":"The Incredible Hulk #1",
          "characters":"Bruce Banner"
      },
      {
          "name":"Wolverine", 
          "publisher":"Marvel Comics", 
          "comic_name":"James Howlett",
          "first_appearance":"The Incredible Hulk #180",
          "characters":"James Howlett"
      },
      {
          "name":"Daredevil", 
          "publisher":"Marvel Comics", 
          "comic_name":"Matthew Michael Murdock",
          "first_appearance":"Daredevil #1",
          "characters":"Matthew Michael Murdock"
      },
      {
          "name":"Hawkeye", 
          "publisher":"Marvel Comics", 
          "comic_name":"Clinton Francis Barton",
          "first_appearance":"Tales of Suspense #57",
          "characters":"Clinton Francis Barton"
      },
      {
          "name":"Cyclops", 
          "publisher":"Marvel Comics", 
          "comic_name":"Scott Summers",
          "first_appearance":"X-Men #1",
          "characters":"Scott Summers"
      },
      {
          "name":"Silver Surfer", 
          "publisher":"Marvel Comics", 
          "comic_name":"Norrin Radd",
          "first_appearance":"The Fantastic Four #48",
          "characters":"Norrin Radd"
      }
  ]
  }


}
