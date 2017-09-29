import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
  trigger('myState', [
    state('inactive', style({
      backgroundColor: 'red'
      
    })),
    state('active', style({
      backgroundColor: '#cfd8dc'
      
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ])
]
})

export class AnimationComponent implements OnInit {
  animationState: string = 'active';
  constructor() { }

  ngOnInit() {
  }
click(){
  if(this.animationState==='active')
    {
      this.animationState='inactive'
    }
    else{
      this.animationState='active'
    }
}
}
