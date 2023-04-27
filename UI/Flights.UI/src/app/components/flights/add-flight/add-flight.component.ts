import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit{
 
  Flight = this.fb.group({
    modelName: ['', Validators.required],
    serialNumber: ['', Validators.required],
    registrationNumber: ['', Validators.required],   
    registrationStatus: ['', Validators.required],
    registrationDate: ['', Validators.required],
  });

  constructor(private flight: FlightsService, private fb: FormBuilder, private router:Router) {}
  
  ngOnInit(): void {
  }

  addFlight() {
    this.flight.addFlight(this.Flight.value)
    .subscribe({
      next: (flight) => {
        this.router.navigate(['flights']);
      }
    });
  }
 
}