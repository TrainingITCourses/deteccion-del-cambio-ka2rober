import { Component } from '@angular/core';
import { ApiService } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'deteccion-del-cambio';
  launches = [];

  constructor(private readonly apiService: ApiService){
    this.apiService
      .getLaunches$()
      .subscribe(res => {
        this.launches = res;
        console.log(res,'<<<< launches');
      });
  }
}
