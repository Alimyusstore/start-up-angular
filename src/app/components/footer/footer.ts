import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { faBrandFacebook, faBrandGoogle, faBrandTwitter } from '@ng-icons/font-awesome/brands';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [NgIcon, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  viewProviders: [provideIcons({faBrandTwitter, faBrandFacebook, faBrandGoogle})]
})
export class Footer {
  year: number = new Date().getFullYear();
  footerLinks: string[] = ['Tour', 'Features', 'Pricing Plan', 'Our Works', 'Brands',  'Contacts'];
}
