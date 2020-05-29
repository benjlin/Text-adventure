import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  input = "";

  onkey(event: any) {
    this.input = event.target.value;
  }

  test() {
    //document.getElementById("blah").value;
    alert(this.input);
  }
}
