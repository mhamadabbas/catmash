import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CatService } from 'src/app/cat.service';
import { Cat } from 'src/app/models/cat.model';

@Component({
  selector: 'app-side-cat',
  templateUrl: './side-cat.component.html',
  styleUrls: ['./side-cat.component.scss'],
})
export class SideCatComponent {
  @Input() cat: Cat;
  @Output() onVote: EventEmitter<void> = new EventEmitter();

  constructor(private readonly catService: CatService) {}

  /**
   * Create the css property to display image from url
   */
  get backgroundStyle(): any {
    return { 'background-image': 'url(' + this.cat.imgUrl + ')' };
  }

  /**
   * On component click
   * add a vote on current cat
   * Send event to parent
   */
  @HostListener('click')
  voteIt(): void {
    this.catService.voteById(this.cat._id).subscribe((cat) => {
      this.cat = cat;
      this.onVote.emit();
    });
  }
}
