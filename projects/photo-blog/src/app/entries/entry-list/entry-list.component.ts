import { Component, OnInit } from '@angular/core';
import { EntryService } from '../common/entry.service';
import { Entry } from '../common/entry.model';

@Component({
    selector: 'app-entry-list',
    templateUrl: 'entry-list.component.html',
    styleUrls: ['entry-list.component.css']
})

export class EntryListComponent implements OnInit {
    private entries:Entry[];
    constructor(private _entryService:EntryService ) {}

    ngOnInit() {
        this._entryService.getEntries()
            .then(entries => this.entries = entries);
    }
}