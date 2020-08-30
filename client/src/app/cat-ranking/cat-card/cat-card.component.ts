import { Component, OnInit, Input } from '@angular/core';
import { Cat } from 'src/app/models/cat.model';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss'],
})
export class CatCardComponent implements OnInit {
  @Input() ranking: number;
  @Input() cat: Cat = new Cat();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Create the css property to display image from url
   */
  get backgroundStyle(): any {
    return { 'background-image': 'url(' + this.cat.imgUrl + ')' };
  }
}
