import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  longText = `This application displays the list of all the registered aircrafts and allows user to add new aircrafts.`;
}
