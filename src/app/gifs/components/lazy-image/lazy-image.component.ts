import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent {

  @Input()
  public url!: string
  
  @Input()
  public alt?: string

  public hasLoaded: boolean = false

  ngOnInit(): void {
    if( !this.url ) throw new Error('Url property is required')
  }

  onLoad() {
    console.log('image loaded')
    this.hasLoaded = true
  }
}
