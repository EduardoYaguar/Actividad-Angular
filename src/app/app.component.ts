import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { CardsComponent } from './shared/cards/cards.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from "./shared/footer/footer.component";
import { WelcomeComponent } from "./shared/welcome/welcome.component";
import { MenuComponent } from "./shared/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent, CardsComponent, HttpClientModule, FooterComponent, WelcomeComponent, MenuComponent],
  providers:[RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ActividadAngular';
  constructor(private recursosService: RecursosService){

  }
}
