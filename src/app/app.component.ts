import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unihaven';
  showBlocsOptions = false;

    toggleBlocs(): void {
        this.showBlocsOptions = !this.showBlocsOptions;
    }
}
