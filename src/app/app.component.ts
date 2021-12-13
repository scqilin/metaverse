import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
   .com{
    position: absolute;
    color:#fff;
    width: 100%;
   }
   .lia li{
     list-style-type: none;
      padding: 5px;
   }
  `]
})
export class AppComponent {
  title = 'metaverse';
  @ViewChild ('audio') audio: any;
  ngAfterViewInit() {
  }
  onClick() {
    this.audio.nativeElement?.play();
  }
}
