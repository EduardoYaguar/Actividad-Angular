import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { CardsComponent } from './shared/cards/cards.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ActividadAngular';
}
