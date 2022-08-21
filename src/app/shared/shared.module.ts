import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module'
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommentsComponent,
    MaterialModule,
  ]
})
export class SharedModule { }
