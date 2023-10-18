import { Component, Input } from '@angular/core';
import { Ball } from './ball';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ballList: Ball[] = [
    {
      id: 1,
      name: "Football",
      price: 20
    },
    {
      id: 2,
      name: "Basketball",
      price: 16
    },
    {
      id: 3,
      name: "Bowling_Ball",
      price: 300
    }
  ]

  
}
