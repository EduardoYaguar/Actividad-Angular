import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { CardsComponent } from './shared/cards/cards.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent, CardsComponent, HttpClientModule],
  providers:[RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ActividadAngular';
  constructor(private recursosService: RecursosService){

  }
}
