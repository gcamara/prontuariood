import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PdfSectionComponent } from '../pdf-section/pdf-section.component';

@Component({
  selector: 'app-plano-aplicacao-produto',
  templateUrl: './plano-aplicacao-produto.component.html',
  styleUrls: ['./plano-aplicacao-produto.component.scss'],
})
export class PlanoAplicacaoProdutoComponent implements AfterViewInit {

  @ViewChildren(PdfSectionComponent, { read: ElementRef })
  container!: QueryList<ElementRef<HTMLElement>>;

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

  ngAfterViewInit(): void {
    console.log('elements', this.container);
  }

  async generate() {
    if (!this.form.valid) {
      // this.form.markAllAsTouched();
      // return;
    }

    window.print();
    
    // let doc = new jsPDF('p', 'mm', 'a4');
    // await Promise.all(
    //     this.container.toArray().map(async (element: ElementRef<HTMLElement>, index) => { 
    //       doc = await this.createPage(element.nativeElement.firstChild as HTMLElement, doc, index);
    //       return doc;
    //     })
    // );
    // doc.save('test.pdf');
  }

  // async createPage(element: HTMLElement, doc: jsPDF, index: number): Promise<any> {
  //    return html2canvas(element, { scrollY: -window.scrollY }).then(
  //     (canvas: HTMLCanvasElement) => {
  //       if (index > 0) {
  //         doc = doc.addPage('a4', 'p');
  //       }
  //       let width = doc.internal.pageSize.getWidth();
  //       let height = doc.internal.pageSize.getHeight();

  //       let widthRatio = width / canvas.width
  //       let heightRatio = height / canvas.height

  //       let ratio = (widthRatio > heightRatio ? heightRatio : widthRatio);

  //       doc = doc.addImage(
  //         canvas.toDataURL('image/jpeg'),
  //         'jpeg',
  //         0,
  //         0,
  //         canvas.width * ratio,
  //         canvas.height * ratio,
  //       );

  //       return doc;
  //     }
  //   )
  // }
  
  get data(): string {
    return new Date().toLocaleDateString('pt-Br');
  }

}
