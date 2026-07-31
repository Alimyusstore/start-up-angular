import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandDribbble, faBrandBehance } from '@ng-icons/font-awesome/brands';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, NgIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  viewProviders: [provideIcons({ faBrandDribbble, faBrandBehance })]
})
export class Navbar {
active: string = 'Home';
  setActive(link: string) {
    this.active = link;
  }

  navLinks: string[] = ['Home', 'Features', 'Pricing', 'Blog' ];
  navIcons: string[] =  ['faBrandDribbble', 'faBrandBehance'];
}
