import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() changedata: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.changedata.emit('MMJ');
  }
}
