import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-boas-vidas',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './boas-vidas.component.html',
  styleUrl: './boas-vidas.component.css'
})
export class BoasVidasComponent {
   dataAtual = new Date();
}
