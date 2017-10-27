import {Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    private title: string =  "First Photo";
    private photo: string = "http://placehold.it/800x500?text=Sample Image";
    private description:string = "This is the image description";
}