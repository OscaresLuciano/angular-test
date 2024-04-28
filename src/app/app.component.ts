import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test';

  arrayStringParam = ['5', '9', '8', '2', '7', '3', '4', '1', '8', '4'];
  numberParam = 5;
}
