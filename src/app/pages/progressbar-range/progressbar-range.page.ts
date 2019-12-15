import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar-range',
  templateUrl: './progressbar-range.page.html',
  styleUrls: ['./progressbar-range.page.scss'],
})
export class ProgressbarRangePage implements OnInit {

  porcentaje = 0.5;
  val = 0;

  constructor() { }

  ngOnInit() {
    this.progressTime();
  }

  progressTime(){
    if(this.val != 1){
      setTimeout( () => {
        this.val+=0.1;
        this.progressTime();
      },1000)
    }
  }

  rangeChange( event ){
    console.log(event.detail.value);
  }

}
