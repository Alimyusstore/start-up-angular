import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  imports: [],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class Cta {
  isPlaying: boolean = false;

  setPlaying(value: boolean) {
    this.isPlaying = value;
  }
}
