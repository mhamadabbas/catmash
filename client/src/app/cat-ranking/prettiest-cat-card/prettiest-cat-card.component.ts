import { Component, OnInit, Input } from '@angular/core';
import { Cat } from 'src/app/models/cat.model';

@Component({
  selector: 'app-prettiest-cat-card',
  templateUrl: './prettiest-cat-card.component.html',
  styleUrls: ['./prettiest-cat-card.component.scss']
})
export class PrettiestCatCardComponent implements OnInit {
  @Input() cat: Cat = new Cat();

  constructor() { }

  ngOnInit(): void {
  }

}
