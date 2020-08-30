import { Component, OnInit } from '@angular/core';

import { CatService } from '../cat.service';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-cat-ranking',
  templateUrl: './cat-ranking.component.html',
  styleUrls: ['./cat-ranking.component.scss'],
})
export class CatRankingComponent implements OnInit {
  public cats: Cat[] = [];
  public prettiestCat: Cat = new Cat();

  constructor(private readonly catService: CatService) {}

  /**
   * Call catService to get all cats sort by rank
   * then split the first cat from it
   */
  ngOnInit(): void {
    this.catService.getAllCats().subscribe((cats: Cat[]) => {
      this.cats = cats;
      this.prettiestCat = this.cats.shift();
    });
  }
}
