// Services allow you to define code that's accessible and reusable throughout
// multiple components. A common use case for services is when you need to
// communicate with a backend of some sort to send and receive data.

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  firstClick() {
    return console.log("clicked");
  }
}
