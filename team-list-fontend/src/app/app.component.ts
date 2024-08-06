import { Component, OnInit } from '@angular/core';
import { ApiService } from './service';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = "";
  message = "";
  p: Player = {id:1, surname:"Julien", name:"Mengeot", position:[9, 11, 14]}

  constructor(private _apiservice: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._apiservice.getdata().subscribe((res:any) => {
      this.title = res.title
      this.message = res.message
    })
  }
}
