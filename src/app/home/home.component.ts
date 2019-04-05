import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
// To use services in a component, we add it in its constructor
export class HomeComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit() {}
  // On définit ici une fonction qui est utlisée dans home.component.html au click car c'est
  // ici qu'on écrit la logique du composant home
  firstClick() {
    this.data.firstClick();
  }
}
