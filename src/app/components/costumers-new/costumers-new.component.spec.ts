import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumersNewComponent } from './costumers-new.component';

describe('CostumersNewComponent', () => {
  let component: CostumersNewComponent;
  let fixture: ComponentFixture<CostumersNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumersNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
