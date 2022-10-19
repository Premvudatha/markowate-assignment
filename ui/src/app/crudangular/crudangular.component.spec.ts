import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudangularComponent } from './crudangular.component';

describe('CrudangularComponent', () => {
  let component: CrudangularComponent;
  let fixture: ComponentFixture<CrudangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudangularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
