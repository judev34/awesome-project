import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentService } from './services/document.service';
import { DocumentRoutingModule } from './document-routing.module';
import { DocumentListItemComponent } from './components/document-list-item/document-list-item.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DocumentPdfViewerComponent } from './components/document-pdf-viewer/document-pdf-viewer.component';


@NgModule({
  declarations: [
    DocumentListComponent,
    DocumentListItemComponent,
    DocumentPdfViewerComponent,
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    PdfViewerModule
  ],
  exports: [
    DocumentListComponent
  ],
  providers: [
    DocumentService
  ]
})
export class DocumentModule { }
