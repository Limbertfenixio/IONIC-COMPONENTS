import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.page.html',
  styleUrls: ['./skeleton.page.scss'],
})
export class SkeletonPage implements OnInit {

  tareas : any = [];
  items : any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getHeroes();
    this.tareas = this.dataService.getHeroesDelay();
  }

}
