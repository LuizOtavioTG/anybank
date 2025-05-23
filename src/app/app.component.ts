import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTrasacaoComponent } from "./form-nova-trasacao/form-nova-trasacao.component";
import { TipoTransacao, Transacao } from './model/transacao';
import { ExtratoComponent } from './extrato/extrato.component';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTrasacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
    
      switch (transacaoAtual.type) {
        case TipoTransacao.DEPOSITO:
          return acc + transacaoAtual.value;
          
        case TipoTransacao.SAQUE:
          return acc - transacaoAtual.value;

        default:
          throw new Error('Tipo de Transação não identificada.');
      }
      
    }, 0);
  });
 
  processarTransacao(transacao: Transacao) {
    if (transacao.type === TipoTransacao.SAQUE && transacao.value > this.saldo()) {
      return alert('Saldo insuficiente!');
    }
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
  }
}
