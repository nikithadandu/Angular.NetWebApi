import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from 'src/app/models/flight.model';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  flights: Flight[] = [];
  dataSource: any;
  displayedColumns: string[] = ['id','modelName','registrationDate','registrationNumber','registrationStatus','serialNumber'];
  
  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    this.flightsService.getAllFlights()
    .subscribe(data => {
      this.flights = data;
      this.dataSource = new MatTableDataSource(this.flights);
     })
  }
}
