import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="com">
      <div style="text-align:center" class="content">
        <h1>
          Welcome to {{title}}!
        </h1>
      </div>
    </div>
    <app-one></app-one>
  `,
  styles: [`
   .com{
    position: absolute;
    color:#fff;
    width: 100%;
    height: 100%;
    pointer-events: none;
   }
  `]
})
export class AppComponent {
  title = 'metaverse';
}
