import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoAplicacaoProdutoComponent } from './plano-aplicacao-produto.component';

describe('PlanoAplicacaoProdutoComponent', () => {
  let component: PlanoAplicacaoProdutoComponent;
  let fixture: ComponentFixture<PlanoAplicacaoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoAplicacaoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoAplicacaoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
