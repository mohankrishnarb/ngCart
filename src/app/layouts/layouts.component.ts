import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  @Output() toggleMenuForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  menuOpen = true;

  menuToggle(){
    this.menuOpen = !this.menuOpen;
  }

}
