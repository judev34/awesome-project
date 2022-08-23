import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-document-list-item',
  templateUrl: './document-list-item.component.html',
  styleUrls: ['./document-list-item.component.scss']
})
export class DocumentListItemComponent implements OnInit {

  @Input() document!: Document

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openPdfViewer(): void {
    this.router.navigateByUrl(`/documents/${this.document.id}`);
  }

}
