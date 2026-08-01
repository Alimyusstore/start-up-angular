import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  imports: [],
  templateUrl: './showcase.html',
  styleUrl: './showcase.css',
})
export class Showcase {
  items: any[] = [
    {
      image: '/asset/images/mazart.png',
     category:'UI KIT',
      title:'Mozart Project',
    },
    {
      image: '/asset/images/framework.png',
      category:'FRAMEWORK',
      title:'Startup Framework 2.0',
    },
    {
      image: '/asset/images/sky.png',
      category:'PHOTO',
      title:'From the Sky',
    },
    {
      image: '/asset/images/forces.png',
      category:'PICTURES',
      title:'Air Forces',
    },
  ]
}
