import { Component, input } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";
import { Transacao } from '../model/transacao';

@Component({
  selector: 'app-extrato',
  imports: [TransacaoComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {
  transacoes = input.required<Transacao[]>();

}
