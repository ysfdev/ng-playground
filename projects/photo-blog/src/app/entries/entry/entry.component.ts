import {Component, Input } from '@angular/core';
import {Entry} from '../common/entry.model';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    @Input()
    private entry:Entry;
}