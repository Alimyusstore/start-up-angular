import { Component } from '@angular/core';


@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  slides: any[] = [{
    title: 'Startup 1',
    description: 'Forget About Code',
    body: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding."
  },
  {
    title: 'Startup 2',
    description: 'Forget About Code',
    body: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding."
  },
  {
    title: 'Startup 3',
    description: 'Forget About Code',
    body: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding."
  },
  {
    title: 'Startup 4',
    description: 'Forget About Code',
    body: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding."
  },
  {
    title: 'Startup 5',
    description: 'Forget About Code',
    body: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding."
  },
]

activeSlide= 0;

nextSlide() {
  this.activeSlide = (this.activeSlide + 1) % this.slides.length;
}
previousSlide() {
  this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
}
goToSlide(index: number) {
  this.activeSlide = index;
}
};
