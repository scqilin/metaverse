import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styles: [`
  .com{
    position: absolute;
    color:#999999;
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
  m0tag = false;
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
  m0Message(code:any){
    // console.log('code :>> ', code);
    this.m0tag = true;
  }

}
