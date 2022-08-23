import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from '../../models/document.model';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  documents$!: Observable<Document[]>;

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documents$ = this.documentService.getAllDocuments();
  }

}
