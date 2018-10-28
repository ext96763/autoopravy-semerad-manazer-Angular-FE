import { Component } from '@angular/core';
import { environment } from '../environments/environment.prod'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/bootstrap.css']
})
export class AppComponent {
  constructor() {
    console.log(environment.APIEndpoint);
  }
  title = 'url!';

}
