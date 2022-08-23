import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-document-list-item',
  templateUrl: './document-list-item.component.html',
  styleUrls: ['./document-list-item.component.scss']
})
export class DocumentListItemComponent implements OnInit {

  @Input() document!: Document

  constructor() { }

  ngOnInit(): void {
  }

}
