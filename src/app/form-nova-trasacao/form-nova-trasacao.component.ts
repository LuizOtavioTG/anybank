import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-trasacao',
  imports: [FormsModule],
  templateUrl: './form-nova-trasacao.component.html',
  styleUrl: './form-nova-trasacao.component.css'
})
export class FormNovaTrasacaoComponent {
  tipoTransacao = "";
  valorTransacao = "";
  aoSubmeter(){
      console.log(this.valorTransacao);
      console.log(this.tipoTransacao);
      this.tipoTransacao = "";
      this.valorTransacao = "";
  };
}
