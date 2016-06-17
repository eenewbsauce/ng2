/* beautify ignore:start */
import {Component} from '@angular/core';
/* beautify ignore:end */

@Component({
    selector: 'tester',
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
export class TesterComponent {

}
