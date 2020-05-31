import { Component, OnInit } from "@angular/core";
import { Commands } from "./Commands";
import { Space } from "./Space";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  input = "";
  displayText = "";
  currentSpace: Space;

  ngOnInit() {
    let space: Space = new Space();
    space.spaceId = "1";
    space.description = "space 1 description";

    this.currentSpace = space;
  }

  test() {
    this.displayText = this.currentSpace.description;
  }
}
