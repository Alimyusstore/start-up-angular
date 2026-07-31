import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from "./components/hero/hero";
import { Content } from "./components/content/content";
import {  Features } from "./components/features/features";
import { Forms } from "./components/forms/forms";
import { Testimonial } from "./components/testimonial/testimonial";


@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Hero, Content, Features, Forms, Testimonial],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
