import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatVersusCatComponent } from './cat-versus-cat/cat-versus-cat.component';
import { CatRankingComponent } from './cat-ranking/cat-ranking.component';

const routes: Routes = [
  { path: '', redirectTo: 'versus', pathMatch: 'full' },
  { path: 'versus', component: CatVersusCatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
