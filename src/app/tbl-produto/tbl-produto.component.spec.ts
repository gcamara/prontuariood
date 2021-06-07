import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblProdutoComponent } from './tbl-produto.component';

describe('TblProdutoComponent', () => {
  let component: TblProdutoComponent;
  let fixture: ComponentFixture<TblProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
