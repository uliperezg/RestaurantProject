import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking';
import { ViewAllBookingsService } from 'src/app/services/view-all-bookings.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  bookingList: Booking[] = [];

  constructor(
    private viewAllBookingService: ViewAllBookingsService
  ) { }

  ngOnInit(): void {
    this.viewAllBookingService.getAllBookings().subscribe(response =>{
      this.bookingList = response;
      console.log("...LISTA DE RESERVAS... " + response);
    })
  }

}
