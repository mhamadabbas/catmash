import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CatRankingComponent } from './cat-ranking/cat-ranking.component';
import { CatVersusCatComponent } from './cat-versus-cat/cat-versus-cat.component';
import { CatService } from './cat.service';
import { SideCatComponent } from './cat-versus-cat/side-cat/side-cat.component';
import { AppRoutingModule } from './app-routing.module';
import { PrettiestCatCardComponent } from './cat-ranking/prettiest-cat-card/prettiest-cat-card.component';
import { CatCardComponent } from './cat-ranking/cat-card/cat-card.component';

@NgModule({
  declarations: [AppComponent, CatVersusCatComponent, CatRankingComponent, SideCatComponent, PrettiestCatCardComponent, CatCardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
  providers: [CatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
