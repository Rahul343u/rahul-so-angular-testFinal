import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-macro-polo',
  templateUrl: './macro-polo.component.html',
  styleUrls: ['./macro-polo.component.css']
})
export class MacroPoloComponent implements OnInit {
  macroPloloArray = [];
  constructor() {}

  ngOnInit() {
    for (var i = 1; i <= 100; i++) {
      if (i % 4 == 0 && i % 7 == 0) {
        this.macroPloloArray.push('macropolo');
      } else if (i % 4 == 0) {
        this.macroPloloArray.push('macro');
      } else if (i % 7 == 0) {
        this.macroPloloArray.push('polo');
      } else {
        this.macroPloloArray.push(i);
      }
    }
  }
}
