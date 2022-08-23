import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPdfViewerComponent } from './document-pdf-viewer.component';

describe('DocumentPdfViewerComponent', () => {
  let component: DocumentPdfViewerComponent;
  let fixture: ComponentFixture<DocumentPdfViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentPdfViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
