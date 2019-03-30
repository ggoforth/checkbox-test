import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicTableComponent } from './epic-table.component';

describe('EpicTableComponent', () => {
  let component: EpicTableComponent;
  let fixture: ComponentFixture<EpicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
