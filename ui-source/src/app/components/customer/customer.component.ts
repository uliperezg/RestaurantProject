import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { RequestBookingService } from '../../services/request-booking.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})

export class CustomerComponent implements OnInit {
  requestBookingForm: FormGroup;
  minDate: Date;
  myDatepipe!: any;

  constructor(
    formBuilder: FormBuilder,
    datepipe: DatePipe,
    private requestBookingService: RequestBookingService
  ) {
    this.minDate = new Date();
    this.myDatepipe = datepipe;
    this.requestBookingForm = formBuilder.group({
      name: ["", Validators.required],
      size: ["", [Validators.min(1), Validators.pattern('^[0-9]*')]],
      date: ["", Validators.required],
      time: ["", Validators.required],
    })
  }


  ngOnInit(): void {
  }

  async createBooking() {
    const convertedDate = this.myDatepipe.transform(this.requestBookingForm.get('date')?.value, 'dd-MM-YYYY');
    this.requestBookingForm.controls['date'].setValue(convertedDate);
    let bookingRequest = JSON.stringify(this.requestBookingForm.value)
    console.log("request sended " + bookingRequest);
    await this.requestBookingService.requestBooking(bookingRequest).subscribe(response => {
      if(response.status == "200"){
        alert(response.body);
        this.requestBookingForm.reset();
      } else {
        alert("There was an error with your reservation. Please try again.")
      }
    });
    
  }

}
