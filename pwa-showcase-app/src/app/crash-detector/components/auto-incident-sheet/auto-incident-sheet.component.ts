import { Component } from '@angular/core';
import { MatBottomSheetRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-auto-incident-sheet',
  templateUrl: 'auto-incident-sheet.component.html',
  styleUrls: ['./auto-incident-sheet.component.scss']
})
export class AutoIncidentSheetComponent {
  private audio = new Audio();
  constructor(
    private bottomSheetRef: MatBottomSheetRef<AutoIncidentSheetComponent>,
    private snackBar: MatSnackBar
  ) {
    this.playAudio();
  }

  playAudio() {
    this.audio.src = './assets/audio/alarm.mp3';
    this.audio.load();
    this.audio.play();
  }

  non() {
    this.audio.pause();
    this.bottomSheetRef.dismiss();
  }

  sendIncident() {
    this.snackBar.open('Incident signalé !', 'Fermer', {
      duration: 10000
    });
    this.bottomSheetRef.dismiss();
  }
}
