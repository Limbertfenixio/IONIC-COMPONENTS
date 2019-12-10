import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.page.html',
  styleUrls: ['./stepper.page.scss'],
})
export class StepperPage implements OnInit {

  isLinear = false;
  f1 = false;
  f2 = false;
  f3 = false;
  f4 = false; 
  cont = 0;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
      setTimeout( () => {
        this.f1 = true;
        this.cont = 1;
        this.flag2();
      },30000)
  }

  flag2(){
    setTimeout( () => {
      this.f2 = true;
      this.cont = 2;
      this.flag3();
    },30000)
  }

  flag3(){
    setTimeout( () => {
      this.f3 = true;
      this.cont = 3;
      this.flag4();
    },30000)
  }

  flag4(){
    setTimeout( () => {
      this.f4 = true;
      this.cont = 4;
    },30000)
  }
  
}
