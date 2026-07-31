import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidClone, faSolidGem } from '@ng-icons/font-awesome/solid';


interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeatureSlide {
  name: string;
  items: FeatureItem[];
}

@Component({
  selector: 'app-features',
  imports: [NgIcon],
  templateUrl: './features.html',
  styleUrl: './features.css',
  viewProviders: [provideIcons({ faSolidClone, faSolidGem })]
})
export class Features {
  activeSlide = 0;
  features: FeatureSlide[] = [
    {
      name: 'first',
      items: [{
    
         icon: 'faSolidClone',
         title: '30 New feature pages 1',
         description: 'Startup Framework contains components and complex blocks which can easily.',
       },
       {
         icon: 'faSolidGem',
         title: 'Useful Symbol Components 1',
         description: 'Samples will show you the feeling on how to play around using the components.',
       }],
    },
    {

      name: 'second',
      items: [{
     
         icon: 'faSolidClone',
         title: '30 New feature pages 2',
         description: 'Startup Framework contains components and complex blocks which can easily.',
       }, 
      {
       
         icon: 'faSolidGem',
         title: 'Useful Symbol Components 2',
         description: 'Samples will show you the feeling on how to play around using the components.',
       }],
    },
    {

      name: 'third',
      items: [{
     
          icon: 'faSolidClone',
          title: '30 New feature pages 3',
          description: 'Startup Framework contains components and complex blocks which can easily.',
        },
        {
        
          icon: 'faSolidGem',
          title: 'Useful Symbol Components 3',
          description: 'Samples will show you the feeling on how to play around using the components.',
        }],
    },
    {   
      name: 'fourth',
      items: [{
     
        icon: 'faSolidClone',
        title: '30 New feature pages 4',
        description: 'Startup Framework contains components and complex blocks which can easily.',
    },
    {
      icon: 'faSolidGem',
      title: 'Useful Symbol Components 4',
      description: 'Samples will show you the feeling on how to play around using the components.',
    }],
    },
    {

      name: 'fifth',
      items: [{
        icon: 'faSolidClone',
        title: '30 New feature pages 5',
        description: 'Startup Framework contains components and complex blocks which can easily.',
      },
      {
        icon: 'faSolidGem',
        title: 'Useful Symbol Components 5',
        description: 'Samples will show you the feeling on how to play around using the components.',
      }],
    }
  ];  

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.features.length;
  }

  previousSlide() {
    this.activeSlide = (this.activeSlide - 1 + this.features.length) % this.features.length;
  }

  goToSlide(index: number) {
    this.activeSlide = index;
  } 
  get activeFeature(): FeatureSlide {
    return this.features[this.activeSlide];
  }
}
