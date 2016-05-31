import { Component, provide } from 'angular2/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import {OnInit} from "angular2/core";



@Component({
    selector: 'my-app',
    directives: [HeroDetailComponent],
    providers: [HeroService],
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

export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
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
