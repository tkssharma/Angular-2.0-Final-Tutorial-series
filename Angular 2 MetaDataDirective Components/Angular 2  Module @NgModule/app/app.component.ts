// app.component.ts
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="app">
    <h1>Hello World</h1>
    </div>
  `,
})
 class AppComponent {
  public myValue:number = 2;
}

export default AppComponent;


