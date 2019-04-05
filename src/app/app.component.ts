// Here, because this is a component, we're importing Component from the @angular/core library,
// and then it defines what's called a @Component decorator,
// which provides configuration options for that particular component.

import { Component } from "@angular/core";

@Component({
  // When you reference the selector of a given component in the form of a custom HTML element,
  // it will nest that component inside of the component it's that's referencing it.
  selector: "app-root",
  // It's referencing the location of the HTML template file and the CSS file with
  // the templateUrl property and the styleUrls property
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

// The logic of the component resides in the class at the bottom.
// The CLI starter template simply defines a single property called title.
export class AppComponent {
  title = "newAngular";
}
