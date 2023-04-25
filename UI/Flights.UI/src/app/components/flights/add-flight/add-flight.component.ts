import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Flight } from 'src/app/models/flight.model';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit{
  

  addFlightRequest: Flight= {
    id : '',
    modelName : '',
    serialNumber: '',
    registrationNumber: '',
    registrationStatus: '',
    registrationDate: new Date(),
  };
  constructor(private flightService: FlightsService, private router: Router, private formBuilder:FormBuilder) {}
  
  flightForm = this.formBuilder.group({
    modelName:['',Validators.required],
    serialNumber: ['',Validators.required],
    registrationNumber:['',Validators.required],    
    registrationStatus: ['',Validators.required],
    registrationDate: ['',Validators.required],
  })

  ngOnInit(): void {
  }

  addFlight() {
    console.log('Form data is', this.flightForm.value)
    this.flightService.addFlight(this.addFlightRequest)
    .subscribe({
      next: (flight) => {
        this.router.navigate(['flights']);
      }
    });
  }
 
}



