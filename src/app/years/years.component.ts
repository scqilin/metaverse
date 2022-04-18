import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YearsService } from '../services/years.service';
import { SceneBackground } from './background.class';
@Component({
  selector: 'app-years',
  template: `
    <div style="position: absolute;" id="container"></div>
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
  scene: any;
  constructor(private yearsService: YearsService, private router: Router,) {
    this.yearsService.runOver$.subscribe(res => {
      console.log(res);
      //修改路由
      const routerLink = '/years/y1';
      this.router.navigateByUrl(routerLink);
      setTimeout(() => {
        const routerLink2 = '/days/m3';
        this.router.navigateByUrl(routerLink2);
      }, 3000);
    });
    this.yearsService.clickStart$.subscribe(res => {
      this.scene?.start(true);
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const container = document.getElementById('container');
    this.scene =  new SceneBackground(container);
  }
}
