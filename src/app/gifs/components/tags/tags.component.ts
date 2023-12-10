import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  
  constructor(private _gifsService: GifsService){}

  get tags() {
    return this._gifsService.tagsHistory;
  }

  searchTag(tag:string) {
    this._gifsService.searchTag(tag)
  }
}

