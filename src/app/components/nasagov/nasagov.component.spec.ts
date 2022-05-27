import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasagovComponent } from './nasagov.component';

describe('NasagovComponent', () => {
  let component: NasagovComponent;
  let fixture: ComponentFixture<NasagovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasagovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasagovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
