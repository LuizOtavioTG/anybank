import { Component, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTrasacaoComponent } from "./form-nova-trasacao/form-nova-trasacao.component";
import { Transacao } from './model/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTrasacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      return acc + transacaoAtual.valor;
    }, 0);
  });
 
  processarTransacao(transacao: Transacao) {
    this.transacoes.update((listaAtual) => {transacao, ...listaAtual});

    console.log(this.transacoes());
  };
}
