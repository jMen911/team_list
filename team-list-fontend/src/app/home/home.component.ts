import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = "";
  message = "";

  constructor(private _apiservice: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._apiservice.getdata().subscribe((res: any) => {
      this.title = res.title
      this.message = res.message
    })
  }

}
