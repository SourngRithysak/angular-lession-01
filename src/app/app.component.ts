import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lession01';
  name : string = "Sourng Rithysak";
  message : string = "First times to study Angular language.";
  image: string = "https://img.icons8.com/fluent/512/angularjs.png";
  letterLogo: string = "- Angular";
  intro: string = "Welcome to Angular";
}
