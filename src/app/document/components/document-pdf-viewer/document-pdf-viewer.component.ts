import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-pdf-viewer',
  templateUrl: './document-pdf-viewer.component.html',
  styleUrls: ['./document-pdf-viewer.component.scss']
})
export class DocumentPdfViewerComponent implements OnInit {

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  page: number = 1;
  totalPages: number = 0;
  isLoaded: boolean = false;

  afterLoadComplete(pdfData:any) { 
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
