import { Component, Input, OnInit } from '@angular/core';
import { YearsService } from '../../services/years.service';
@Component({
  selector: 'app-y1',
  template: `
    <p>
    {{title}}
    </p>
    <p>请牢记您的标识码: <span style="letter-spacing: 4px;font-size:26px">{{code}}</span></p>
  `,
  styles: [
  ]
})
export class Y1Component implements OnInit {
  title = '系统维护中……'
  code = ''
  constructor(private yearsService: YearsService) {
    this.code = this.yearsService.getCode()
    this.yearsService.runOver$.subscribe(res => {
        let obj: any = res;
        console.log(this.code);

    });
  }

  ngOnInit(): void {

  }

}
