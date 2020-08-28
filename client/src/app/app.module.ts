import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatVersusCatComponent } from './cat-versus-cat/cat-versus-cat.component';
import { SideCatComponent } from './cat-versus-cat/side-cat/side-cat.component';
import { CatService } from './cat.service';

@NgModule({
  declarations: [AppComponent, CatVersusCatComponent, SideCatComponent, ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
  providers: [CatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
