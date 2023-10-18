import { Component, Input } from '@angular/core';
import { Ball } from '../ball';

@Component({
  selector: 'app-balls',
  templateUrl: './balls.component.html',
  styleUrls: ['./balls.component.css']
})
export class BallsComponent {
    @Input() ball?: Ball;    
}
