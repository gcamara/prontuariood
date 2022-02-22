import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

interface Produto { 
  localDeAplicacao?: string;
  quantidade?: string;
  dataDeAplicacao?: Date;
}

@Component({
  selector: 'app-tbl-produto',
  templateUrl: './tbl-produto.component.html',
  styleUrls: ['./tbl-produto.component.scss']
})
export class TblProdutoComponent implements OnInit {

  @Input() title!: string;

  @Input() img!: string;

  headers = ['local', 'quantidade', 'data', 'etiqueta'];
  elements: Produto[] = Array.from({ length: 10 });

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  addNewLine(): void {
    this.elements = [
      ...this.elements,
      {}
    ]
    this.cdr.detectChanges();
  }

}
