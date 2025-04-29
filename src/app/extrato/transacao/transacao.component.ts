import { Component, input } from '@angular/core';
import { Transacao } from '../../model/transacao';

@Component({
  selector: 'app-transacao',
  imports: [],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent {
  transacao =input.required<Transacao>();
}
