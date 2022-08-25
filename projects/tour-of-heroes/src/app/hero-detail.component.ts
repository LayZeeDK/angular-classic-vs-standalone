import { Location, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  imports: [FormsModule, NgIf, UpperCasePipe],
  selector: 'toh-hero-detail',
  standalone: true,
  styles: [
    `
      label {
        color: #435960;
        font-weight: bold;
      }
      input {
        font-size: 1em;
        padding: 0.5rem;
      }
      button {
        margin-top: 20px;
        margin-right: 0.5rem;
        background-color: #eee;
        padding: 1rem;
        border-radius: 4px;
        font-size: 1rem;
      }
      button:hover {
        background-color: #cfd8dc;
      }
      button:disabled {
        background-color: #eee;
        color: #ccc;
        cursor: auto;
      }
    `,
  ],
  template: `
    <div *ngIf="hero">
      <h2>{{ hero.name | uppercase }} Details</h2>
      <div><span>id: </span>{{ hero.id }}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero.name" placeholder="Hero name" />
      </div>
      <button type="button" (click)="goBack()">go back</button>
      <button type="button" (click)="save()">save</button>
    </div>
  `,
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
