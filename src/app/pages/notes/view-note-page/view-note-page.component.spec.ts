import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotePageComponent } from './view-note-page.component';

describe('ViewNotePageComponent', () => {
  let component: ViewNotePageComponent;
  let fixture: ComponentFixture<ViewNotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNotePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
