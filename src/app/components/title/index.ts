/* beautify ignore:start */
import {Component} from '@angular/core';
/* beautify ignore:end */

@Component({
    selector: 'tester',
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})

export class TesterComponent {
  constructor() {
    this.Heroes = [
      new Hero(1, "Ryan"),
      new Hero(2, "Tom"),
      {
        id: 3,
        name: "Samantha"
      }
    ]
  }

  Heroes: Hero[];
}

class Hero {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  id: number;
  name: string;
}
