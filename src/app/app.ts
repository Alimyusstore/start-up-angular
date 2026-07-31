import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from "./components/hero/hero";
import { Content } from "./components/content/content";
import {  Features } from "./components/features/features";


@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Hero, Content, Features],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
