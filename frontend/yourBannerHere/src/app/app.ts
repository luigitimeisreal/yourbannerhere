import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { MainPage } from './pages/main-page/main-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPage, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'yourBannerHere';
}
