import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
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
  `
  ]
})
export class DaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'metaverse';
  @ViewChild('audio') audio: any;
  ngAfterViewInit() {
  }
  onClick() {
    this.audio.nativeElement?.play();
  }

}
