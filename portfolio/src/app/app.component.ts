import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, AboutMeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
}
