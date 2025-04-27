import { Component } from '@angular/core';
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
processarTransacao(transacao: Transacao) {
 console.log(transacao);
}
  title = 'anybank';
}
