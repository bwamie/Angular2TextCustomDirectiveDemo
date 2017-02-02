import { Component } from '@angular/core';

@Component({
  selector: 'app-list-comp',
  template: `
  <h2>My Courses:</h2>
    <ul>
      <li upper *ngFor="let course of courses;">{{course}}</li>
    </ul>
  `,
  styles: []
})
export class ListComponent{
public courses: string[];
  constructor() { 
    this.courses = ["WAP", "Algorithm", "MWA", "WAA"];
  }

}
