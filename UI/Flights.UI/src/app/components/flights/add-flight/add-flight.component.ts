import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit{
 
  constructor(private flight: FlightsService) {}
  
  Flight = new FormGroup({
    modelName: new FormControl(),
    serialNumber: new FormControl(),
    registrationNumber: new FormControl(),   
    registrationStatus: new FormControl(),
    registrationDate: new FormControl(),
  });

  ngOnInit(): void {
  }

  saveData() {
    this.flight.addFlight(this.Flight.value).subscribe((result)=>{
      console.log(result);
    });
  }
 
}