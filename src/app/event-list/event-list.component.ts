import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  upcomingEvents: Event[] = [];
  pastEvents: Event[] = [];


  constructor(private eventService: EventService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("on init");

        this.loadEvents();


  }
  loadEvents() {
    console.log("load Events");
    this.eventService.getUpcomingEvents().subscribe((data) => {
      this.upcomingEvents = data;
      console.log("upcoming data",data);
    });

    this.eventService.getPastEvents().subscribe((data) => {
      this.pastEvents = data;
      console.log(data);
    });
  }
}
