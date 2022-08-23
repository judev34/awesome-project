import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentService } from './services/document.service';
import { DocumentRoutingModule } from './document-routing.module';


@NgModule({
  declarations: [
    DocumentListComponent,
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
  ],
  exports: [
    DocumentListComponent
  ],
  providers: [
    DocumentService
  ]
})
export class DocumentModule { }
