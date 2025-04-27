
import { Component } from '@angular/core';
import { BoasVidasComponent } from "./boas-vidas/boas-vidas.component";
import { ContaComponent } from "./conta/conta.component";

@Component({
  selector: 'app-banner',
  imports: [BoasVidasComponent, ContaComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
 
}
