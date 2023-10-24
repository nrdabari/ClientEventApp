import { Component,OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createEvent:any;
  constructor(
    private fb:FormBuilder,
    routes:Router,
    private eventService: EventService) {
      this.createEvent=fb.group({
        eventName: ['',Validators.required],
        eventDescription: ['',Validators.required],
        eventDate: ['',Validators.required],
        eventCategory: ['',Validators.required],
        createdBy: ['',Validators.required],

      });
    }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.createEvent.value);
    this.eventService.createEvent(this.createEvent.value).subscribe((data)=>{
      console.log(data);
    })

  }


  // createEvent() {
  //   // Create an event object with the form data
  //   const event = {
  //     name: this.eventName,
  //     description: this.eventDescription,
  //     date: this.eventDate,
  //     category: this.eventCategory,
  //     createdBy: this.createdBy
  //   };
  //   console.log(event);
  //   // You can now send this event data to a backend API for further processing/storage
  //   // Example: send to a service or HTTP request
  //   this.eventService.createEvent(event).subscribe(
  //     (response) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
