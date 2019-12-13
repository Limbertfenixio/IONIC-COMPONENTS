import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.page.html',
  styleUrls: ['./datatables.page.scss'],
})
export class DatatablesPage implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'twitter', 'Acciones'];
  dataSource = new MatTableDataSource<any>([]);
  data : any = [];

//Seleccionamos el comoponente IonInfiniteScroll para poder manejar sus propiedades
  @ViewChild(IonInfiniteScroll, null) infiniteScroll : IonInfiniteScroll;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  cont = 0;
  limite = 10;
  dataLazy : any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadData();
  }


  loadData(){
    this.data = [];
    this.cont = 0;
    this.dataService.getMenuOpt().subscribe( (data: Component[]) => {
      data.forEach(element => {
        this.cont++;
        if(this.cont < this.limite){
          this.data.push(element);
        }
      });
      this.dataSource.connect().next(this.data);
    })
  }

  /**
   * Evento de infinite scroll que se encarga de cargar los datos 
   * @param event 
   */
  loadLazyData(event){
    //Si los datos son mas de 50 
    if(this.data.length > this.limite){
      //Completamos en infinite Scroll
      event.target.complete();
      //Desabilitamos el infinite scroll
      this.infiniteScroll.disabled = true;
      //Terminamos la funcion
      return;
    }

    setTimeout( () => {
      this.limite = this.limite + 5;
      this.loadData();
      //Completamos el infinite scroll
      event.target.complete();
    }, 1000) 
  }

}
