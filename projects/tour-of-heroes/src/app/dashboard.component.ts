import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroSearchComponent } from './hero-search.component';

import { RouterLinkWithHref } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  imports: [NgForOf, RouterLinkWithHref, HeroSearchComponent],
  selector: 'toh-dashboard',
  standalone: true,
  styles: [
    `
      h2 {
        text-align: center;
      }

      .heroes-menu {
        padding: 0;
        margin: auto;
        max-width: 1000px;

        /* flexbox */
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: flex-start;
        align-items: flex-start;
      }

      a {
        background-color: #3f525c;
        border-radius: 2px;
        padding: 1rem;
        font-size: 1.2rem;
        text-decoration: none;
        display: inline-block;
        color: #fff;
        text-align: center;
        width: 100%;
        min-width: 70px;
        margin: 0.5rem auto;
        box-sizing: border-box;

        /* flexbox */
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
      }

      @media (min-width: 600px) {
        a {
          width: 18%;
          box-sizing: content-box;
        }
      }

      a:hover {
        background-color: black;
      }
    `,
  ],
  template: `
    <h2>Top Heroes</h2>
    <div class="heroes-menu">
      <a *ngFor="let hero of heroes" routerLink="/detail/{{ hero.id }}">
        {{ hero.name }}
      </a>
    </div>

    <toh-hero-search></toh-hero-search>
  `,
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
