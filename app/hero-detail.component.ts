import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    template: `
      <button (click)="goBack()">Back</button>
      <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
      </div>
    `
})

export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) {
    }
    hero: Hero;
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
    goBack() {
        window.history.back();
    }
}
