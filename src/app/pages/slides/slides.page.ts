import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  dataSlide : { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/img/slides/slide-1.png',
      titulo: 'Bienvienido',
      desc: 'En esta app de ionic te mostraremos un demo acerca de como usar los slides'
    },
    {
      img: '/assets/img/slides/slide-2.png',
      titulo: 'Que es Ionic?',
      desc: 'Ionic es un framework de codigo abierto que ofrece a los developers construir app moviles hibridas'
    },
    {
      img: '/assets/img/slides/slide-3.png',
      titulo: 'Ques es Ionic Pro?',
      desc: 'Ionic Pro ofrece servicios de construccion de apps moviles mucho mas rapido'
    },
    {
      img: '/assets/img/slides/slide-4.png',
      titulo: 'Estas listo para empezar?',
      desc: ''
    },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  finalize(){
    this.router.navigateByUrl('/inicio');
  }

}
