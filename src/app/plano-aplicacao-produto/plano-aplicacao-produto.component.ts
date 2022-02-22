import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PdfSectionComponent } from '../pdf-section/pdf-section.component';
import { TblProdutoComponent } from '../tbl-produto/tbl-produto.component';

@Component({
  selector: 'app-plano-aplicacao-produto',
  templateUrl: './plano-aplicacao-produto.component.html',
  styleUrls: ['./plano-aplicacao-produto.component.scss'],
})
export class PlanoAplicacaoProdutoComponent {

  @ViewChildren(TblProdutoComponent)
  produtos!: QueryList<TblProdutoComponent>;

  form: FormGroup = this.fb.group({});
  checks = [{
    title: 'Dor de cabeça?',
    showUnderline: false
  },
  {
    title: 'Inchaço?',
    showUnderline: false
  },
  {
    title: 'Sensibilidade?',
    showUnderline: true
  },
  {
    title: 'Reação Alérgica?',
    showUnderline: true
  },
  {
    title: 'Outros Sintomas?',
    showUnderline: true
  },
  {
    title: 'Usa algum medicamento?',
    showUnderline: true
  },
];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      alergias: [''],
      temAlergias: [false],
      medicamentoCronico: [''],
      temMedicamento: [false],
      informacoesAdicionais: [''],
      temInformacoes: [false],
    });
  }

  async generate() {
    window.print();
  }

  get data(): string {
    return new Date().toLocaleDateString('pt-Br');
  }

  addNewLine(): void {
    this.produtos.forEach(item => item.addNewLine());
  }

}
