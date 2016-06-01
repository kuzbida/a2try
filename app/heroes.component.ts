import { Component, provide, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

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
        <div *ngIf="selectedHero">
          <h2>
            {{selectedHero.name | uppercase}} is my hero
          </h2>
          <button (click)="gotoDetail()">View Details</button>
        </div>
      `
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    onSelect(hero: Hero) { this.selectedHero = hero; }

    constructor(
        private heroService: HeroService,
        private router: Router) { }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

    ngOnInit() {
        this.getHeroes();
    }


}
