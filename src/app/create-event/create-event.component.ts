import { Component } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  eventName: string = '';
  eventDescription: string = '';
  eventDate: Date = new Date();
  eventCategory: string = '';
  createdBy: string = '';

  createEvent() {
    // Create an event object with the form data
    const event = {
      name: this.eventName,
      description: this.eventDescription,
      date: this.eventDate,
      category: this.eventCategory,
      createdBy: this.createdBy
    };

    // You can now send this event data to a backend API for further processing/storage
    // Example: send to a service or HTTP request
  }
}
