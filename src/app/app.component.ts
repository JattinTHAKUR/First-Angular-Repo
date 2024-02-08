import { Component, OnInit } from '@angular/core';

// Replace with your actual event data structure
interface Event {
  date: string;
  from: string;
  to: string;
  voyageStage: string;
  voyageLeg: string;
  event: string;
  position: string;
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = []; // Replace with your event data

  constructor() { }

  ngOnInit() {
    // Initialize your event data here
    // This is just an example, replace with your actual data fetching logic
    this.events = [
      {
        date: '2024-01-01',
        from: 'Koh Sichang - THKSI',
        to: 'Koh Sichang-THKSI',
        voyageStage: 'LADEN',
        voyageLeg: 'OCEAN',
        event: 'Noon-Port',
        position: 'AT PORT'
      },
      // ... other event data
    ];
  }
}
