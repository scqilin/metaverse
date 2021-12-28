import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { YearsService } from '../../services/years.service';
@Component({
  selector: 'app-m0',
  template: `
    <div>
      <p *ngIf="!restarttag" (click)="onClickstart()">
        {{message}}
      </p>
      <p style="color: #e15241;" *ngIf="restarttag" (click)="onClick()">
        启动失败 点击重试
      </p >
      <h1>
        <mat-progress-bar color="#00ff00" style="height: 12px;" mode="determinate" value={{num}}></mat-progress-bar>
      </h1>

    </div>
    <div class="list">
      <span *ngFor="let item of list">{{item}}</span>
    </div>
    <div>
        <h3>{{message2}}</h3>
        <div *ngIf="successtag">
          <mat-spinner style="margin: auto;"></mat-spinner>
          <h3>{{idCode}}</h3>
          <span [ngStyle] = "{opacity:popacity}" >当前排队人数{{peopleNum}}人</span>
        </div>

    </div>
    <audio #audio1 loop>
        <source src="assets/sound/start.mp3" type="audio/mp3" />
    </audio>


  `,
  styles: [
    `
    ::ng-deep .mat-progress-bar-fill::after {
      background-color: #5ac43a;
    }
    ::ng-deep .mat-progress-spinner circle, .mat-spinner circle{
      stroke: #5ac43a;
    }

    ::ng-deep .mat-progress-bar-buffer {
      background: #eee;
    }
    .list span{
      display: block;
      margin-left: 20px;
      text-align: left;
      min-height: 30px;
      animation: mymove 0.5s linear 0s forwards;
    }
    @keyframes mymove {
      0% {
        opacity: 0;
      }
      80% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `
  ]
})
export class Y0Component implements OnInit {
  num = 0;
  message = "点击启动系统";
  restarttag = false;
  successtag = false;
  popacity = 0;
  seti1: any;
  reinfo = "启动失败 点击重试!";
  idCode = "标识码生成中……";
  message2 = ""
  peopleNum = Math.floor(Math.random() * 1000)+100;
  list: any = [];
  listarr = [
    "系统启动",
    "奇点出现",
    "大爆炸开启",
    "超力出现",
    "宇宙不断膨胀",
    "引力和电磁力、弱核力、强核力分离",
    "宇宙继续膨胀",
    "夸克-反夸克粒子出现",
    "胶子、引力子、希格斯玻色子等粒子出现",
    "强核力与电弱力分离",
    "强子,质子和中子出现",
    "电子、中微子和反轻子出现",
    "质子和中微子继续膨胀",
    "光子时期出现",
    "氦核出现",
    "原子出现",
    "氮核出现",
    "第一个恒星出现",
    "第一个星系形成",
    "第一个行星出现",
    "海洋出现",
    "第一个海洋形成",
    "原核细胞形成",
    "多细胞生物出现",
    "海洋生物出现",
    "恐龙诞生",
    "第一个猿类出现",
    "……",
    "人类文明诞生",
    "……",
    "大清亡了",
    "……",
    "元宇宙元年",
    "……",
  ]
  code = '';
  @ViewChild('audio1') audio1: any;
  @Output() sendMessage = new EventEmitter<any>();
  constructor(private yearsService: YearsService) {
    this.code = this.yearsService.getCode();
  }

  ngOnInit(): void {

  }
  onClickstart() {
    if(this.message != "点击启动系统") return;
    this.message = "系统启动中......";
    this.start();
    this.audio1.nativeElement?.play();
  }
  onClick() {
    this.start();
    this.audio1.nativeElement?.play();
    // this.audio1.nativeElement.volume = 0.5;
  }
  start() {
    this.num = 0;
    this.list = [];
    this.message = "系统启动中......";
    this.message2 = "";
    this.restarttag = false;
    document.body.style.backgroundColor = "#000000";
    let step = 3
    setTimeout(() => {
      this.seti1 = setInterval(() => {
        this.num++;

        if (this.num % step == 0) {
          let info = this.listarr[this.num / step];
          info && (this.list[0] = info);
        }

        if (this.num == 100) {
          clearInterval(this.seti1);
          if (this.failOrSuccess()) {
            this.startSuccess();
          } else {
            this.startFail();
          }
        }
      }, 100);
    }, 1000);

  }
  // 是否启动成功
  failOrSuccess() {
    let now = new Date();
    let min = now.getMinutes();
    if (min % 10 == 0) {
      return true;
    } else {
      if (Math.random() > 0.8) {
        return true;
      } else {
        return false;
      }
    }
  }
  startFail() {
    this.restarttag = true;
    this.num = -1;
    document.body.style.backgroundColor = "#000c9f";
    this.message2 = "启动是个十有八九会失败的过程，请耐心尝试。";
    this.audio1.nativeElement?.pause();
  }
  startSuccess() {
    this.message = "系统启动成功!";
    this.audio1.nativeElement?.pause();
    this.restarttag = false;
    this.successtag = true;
    document.body.style.backgroundColor = "#000000";
    this.message2 = "恭喜您成功启动系统，请等待系统为您分配唯一标识码!";
    let seti2 = setInterval(() => {
        this.peopleNum -= Math.floor(Math.random() * 50);
        if (this.peopleNum <= 0) {
          this.peopleNum = 0;
          clearInterval(seti2);

          this.idCode = "您的标识码为: " + this.code;
          this.popacity = 0;
          this.begin()
        }
        if(this.popacity<1){
          this.popacity += 0.1;
        }
    }, 2000);
  }
  // 启动
  begin(){
    this.yearsService.runOver({code:this.code});
  }


}
