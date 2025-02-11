import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WelcomeComponent } from '../shared/welcome/welcome.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { ContactoComponent } from '../shared/contacto/contacto.component';
import { CardsComponent } from '../shared/cards/cards.component';

@Component({
  selector: 'app-home',
  imports: [WelcomeComponent, FooterComponent, MenuComponent, ContactoComponent, CardsComponent],
  templateUrl: './Home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent { }
