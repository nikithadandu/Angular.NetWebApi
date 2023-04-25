import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flights.UI';
  constructor(private formBuilder:FormBuilder){}

  flightForm = this.formBuilder.group({
    modelName:[''],
    registrationNumber:[''],    
    registrationDate:[''],
    registrationStatus:['']
  })
}
