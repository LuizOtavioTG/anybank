import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anybank';
}
