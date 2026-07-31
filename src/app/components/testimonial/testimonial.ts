import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css',
})
export class Testimonial {
  testimonials: any[] = [
    {
      avatar: "/asset/images/curran.png",
      quote: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
      name: "RAYHAN CURRAN"
    },
    {
      avatar: "/asset/images/kayley.png",
      quote: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
      name: "KAYLEY FRAME"
    },
    {
      avatar: "/asset/images/gene.png",
      quote: "The most important part of the Startup Framework is the samples",
      name: "GENE WHITFIELD"
    },
    {
      avatar: "/asset/images/allan.png",
      quote: "I’ve built my website with Startup just in one day, and it was ready-to-go.",
      name: "ALLAN KIM"
    },
  ]
}
