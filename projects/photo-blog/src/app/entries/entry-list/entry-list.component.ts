import { Component } from '@angular/core';
import { EntryService } from '../common/entry.service';

@Component({
    selector: 'app-entry-list',
    templateUrl: 'entry-list.component.html',
    styleUrls: ['entry-list.component.css']
})

export class EntryListComponent {
    constructor(private _entryService:EntryService ) {
       this._entryService.getEntries()
    }
}