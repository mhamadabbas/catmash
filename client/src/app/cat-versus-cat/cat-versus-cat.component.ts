import { Component, OnInit } from '@angular/core';

import { CatService } from '../cat.service';
import { Cat } from '../models/cat.model';

@Component({
  selector: 'app-cat-versus-cat',
  templateUrl: './cat-versus-cat.component.html',
  styleUrls: ['./cat-versus-cat.component.scss'],
})
export class CatVersusCatComponent implements OnInit {
  public leftCat: Cat = new Cat();
  public rightCat: Cat = new Cat();

  constructor(private readonly catService: CatService) {}

  /**
   * Init both side cats
   */
  ngOnInit(): void {
    this.setLeftCat();
    this.setRightCat();
  }

  /**
   * Set new cat for the left side
   * If new cat is same as old cat retry
   */
  setLeftCat(): void {
    this.catService.getRandomCat().subscribe((cat: Cat) => {
      if (cat._id !== this.leftCat._id) {
        this.leftCat = cat;
      } else {
        this.setLeftCat();
      }
    });
  }

  /**
   * Set new cat for the right side
   * If new cat is same as old cat retry
   */
  setRightCat(): void {
    this.catService.getRandomCat().subscribe((cat: Cat) => {
      if (cat && cat._id !== this.rightCat._id) {
        this.rightCat = cat;
      } else {
        this.setRightCat();
      }
    });
  }
}
