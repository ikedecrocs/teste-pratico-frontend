import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  
  articulos: any[] = [];

  public constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/articulos.json').subscribe(data => {
      this.articulos = data;
      console.log(this.articulos)
    });
  }

}
