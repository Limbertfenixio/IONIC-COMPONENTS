import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', null) lista : IonList;

  users: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users =  this.dataService.getUsers();
  }

  favorite(user){
    console.log(user)
    this.lista.closeSlidingItems();
  }

  share(user){
    console.log(user)
    this.lista.closeSlidingItems();
  }

  delete(user){
    console.log(user)
    this.lista.closeSlidingItems();
  }

}
