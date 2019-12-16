import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  //Obtenemos una referencia del componente ionsegment
  @ViewChild(IonSegment, null) segment : IonSegment;

  heroes : any = [];
  segmentValue = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //Asignamos el valor inicial del segment
    this.segment.value = '';
    //Obtenemos los datos del servicio
    this.heroes = this.dataService.getHeroes();
  }

  segmentChanged(event){
    //Obtenemos el valor del segmento actual
    this.segmentValue = event.detail.value;
  }

}
