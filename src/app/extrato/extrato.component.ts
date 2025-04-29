import { Component } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";

@Component({
  selector: 'app-extrato',
  imports: [TransacaoComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {

}
