import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTrasacaoComponent } from "./form-nova-trasacao/form-nova-trasacao.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTrasacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anybank';
}
