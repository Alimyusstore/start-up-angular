import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandDribbble, faBrandFacebook, faBrandGit, faBrandInstagram, faBrandMicrosoft, faBrandSkype, faBrandTwitter } from '@ng-icons/font-awesome/brands';

@Component({
  selector: 'app-team',
  imports: [NgIcon],
  templateUrl: './team.html',
  styleUrl: './team.css',
  viewProviders: [provideIcons({faBrandTwitter, faBrandFacebook, faBrandInstagram, faBrandGit, faBrandDribbble, faBrandMicrosoft, faBrandSkype})]
})
export class Team {
  members: any[] =[
    {
      avatar: "/asset/images/leah.png",
      name: 'Leah Salomons',
      role: "UI Designer",
      social: ["faBrandTwitter","faBrandFacebook","faBrandDribbble", "faBrandInstagram"],
    },
    {
      avatar: "/asset/images/colin.png",
      name: 'Colin Timmons',
      role: "UX Designer",
      social: ["faBrandTwitter","faBrandDribbble"],

    },
    {
      avatar: "/asset/images/miquel.png",
      name: 'Miguel Osborne',
      role: "Front-end Developer",
      social: ["faBrandSkype", "faBrandMicrosoft", "faBrandGit"],

    },
    {
      avatar: "/asset/images/simon.png",
      name: 'Taylor Simon',
      role: "Product Manager",
      social: ["faBrandTwitter", "faBrandInstagram"],

    },
    {
      avatar: "/asset/images/steven.png",
      name: 'Steven MacAlister',
      role: "Copyrighter",
      social: ["faBrandTwitter"],

    },
  ]
}
