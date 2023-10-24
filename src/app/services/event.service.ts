// src/app/services/event.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/events'; // Replace with your backend API URL



  createEvent(eventData: any) {
    return this.http.post(this.apiUrl, eventData);
  }
  // private events: Event[] = [
  //   {
  //     name: 'Event 1',
  //     description: 'Description of Event 1',
  //     date: new Date(),
  //     category: 'Category 1',
  //     createdBy: 'User 1'
  //   },
  //   {
  //     name: 'Event 2',
  //     description: 'Description of Event 2',
  //     date: new Date(),
  //     category: 'Category 2',
  //     createdBy: 'User 2'
  //   },
  //   // Add more events as needed
  // ];
  //  getEvents(): Event[] {
  //   return this.events;
  // }



}
