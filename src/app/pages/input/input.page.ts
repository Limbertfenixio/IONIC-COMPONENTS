import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  usuario = {
    nombre : '',
    email : '',
    password : '',
    telefono : '',
    descripcion : ''
  }

  passwordType : string = "password";
  passwordShow : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usuario);
  }

  toggle(){
    if(this.passwordShow){
      this.passwordShow = false;
      this.passwordType = "password";
    }else{
      this.passwordShow = true;
      this.passwordType = "text";
    }
  }

}
