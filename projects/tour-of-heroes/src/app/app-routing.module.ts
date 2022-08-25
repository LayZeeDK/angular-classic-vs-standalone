import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesModule } from './heroes.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailModule } from './hero-detail.module';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardModule,
    HeroDetailModule,
    HeroesModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
