import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentPdfViewerComponent } from './components/document-pdf-viewer/document-pdf-viewer.component';

const routes: Routes = [
    { path:':id', component: DocumentPdfViewerComponent},
    { path: '', component: DocumentListComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes),],
    exports: [RouterModule]
})
export class DocumentRoutingModule { }