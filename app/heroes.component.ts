import { Component, provide, OnInit } from 'angular2/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';



@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    template:`
      <h1>{{title}}</h1>
      <h2>My Heroes</h2>
        <ul class="heroes">
          <li *ngFor="#hero of heroes"
            (click)="onSelect(hero)"
            [class.selected]="hero === selectedHero">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
      `
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    onSelect(hero: Hero) { this.selectedHero = hero; }

    constructor(private heroService: HeroService) { }
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }


    ngOnInit() {
        this.getHeroes();
    }


}
