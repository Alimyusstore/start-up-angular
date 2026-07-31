import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from "./components/hero/hero";
import { Content } from "./components/content/content";

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Hero, Content],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
