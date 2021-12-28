import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YearsService } from '../services/years.service';
@Component({
  selector: 'app-years',
  template: `
  <div class="com">
  <div style="text-align:center;width: 100%;position:absolute">
    <h1>
      Welcome to {{title}}!
    </h1>
    <div>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`
   .com {
     color: #5ac43a
    }
  `
  ]
})
export class YearsComponent implements OnInit {
  title = 'Metaverse';
  constructor( private yearsService: YearsService,private router: Router,) {
    this.yearsService.runOver$.subscribe(res => {
      console.log(res);
      //修改路由
      const routerLink = '/years/y1';
      this.router.navigateByUrl(routerLink);
    });
  }

  ngOnInit(): void {
  }


}
