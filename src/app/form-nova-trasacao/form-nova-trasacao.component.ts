import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../model/transacao';

@Component({
  selector: 'app-form-nova-trasacao',
  imports: [FormsModule],
  templateUrl: './form-nova-trasacao.component.html',
  styleUrl: './form-nova-trasacao.component.css'
})
export class FormNovaTrasacaoComponent {
  tipoTransacao = "";
  valorTransacao = "";

  transacaoCriada = output<Transacao>();

  aoSubmeter(){
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
  );
      this.transacaoCriada.emit(transacao);
      this.tipoTransacao = "";
      this.valorTransacao = "";
  };
}
