import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  heroes = HEROES;

  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
