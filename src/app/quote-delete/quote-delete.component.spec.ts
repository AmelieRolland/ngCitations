import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDeleteComponent } from './quote-delete.component';

describe('QuoteDeleteComponent', () => {
  let component: QuoteDeleteComponent;
  let fixture: ComponentFixture<QuoteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
