/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {TesterComponent} from './index';
import {Assert} from '../../../assert';
/* beautify ignore:end */

describe('Component: HomeTitleComponent', () => {

    let providers = [];
    let assert = new Assert < TesterComponent > (TesterComponent, providers);

    assert.it('should be defined', (component, element, fixture) => {
        fixture.detectChanges();

        expect(component).toBeDefined();
        expect(element).toBeDefined();
    });
});
