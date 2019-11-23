import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
  name: string = 'Tegas';

  constructor () {
    this.changeName('Mike')
  }

  changeName(name:string): void {
    this.name = name;
  }
}
