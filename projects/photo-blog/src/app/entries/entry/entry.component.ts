import {Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    private title: string =  'First Photo';
    private photo: string = 'http://placehold.it/800x500?text=Sample Image';
    private description:string = 'This is the image description';
    private comments:[{name:string, comment:string}] = [
        {name: 'Jay', comment: 'First comment'},
        {name: 'Mark', comment: 'Second comment'},
        {name: 'Steven', comment: 'Third comment'}
    ]
}