
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-player-creation',
    templateUrl: './player-creation.component.html',
    styleUrl: './player-creation.component.css',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class PlayerCreationComponent {
  positions = new Map<number, string>([
    [1, "Pilier gauche"],
    [2, "Talon"],
    [3, "Pilier droit"],
    [4, "2e ligne"],
    [5, "2e ligne"],
    [6, "3e ligne aile gauche"],
    [7, "3e ligne aile droite"],
    [8, "3e ligne centre"],
    [9, "Demi de mêlée"],
    [10, "Demi d'ouverture"],
    [11, "Ailié gauche"],
    [12, "1er centre"],
    [13, "2e centre"],
    [14, "Ailié droit"],
    [15, "Arrière"]
  ]);
  values = []
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  submitApplication() {
    console.log(
      `Player send to DB: firstName: ${this.applyForm.value.firstName}, lastName: ${this.applyForm.value.lastName}.`
    );
  }
}
