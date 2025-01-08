import { Component, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-registrar',
  imports: [MatCardModule, MatInputModule, MatIconModule, FormsModule, MatButtonModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {
  hide = signal(true);
  hideconfirmation = signal(true)

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  clickEventConfirmation(event: MouseEvent){
    this.hideconfirmation.set(!this.hideconfirmation());
    event.stopPropagation();
  }
}
