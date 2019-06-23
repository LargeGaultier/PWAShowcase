import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { AutoIncidentSheetComponent } from '../auto-incident-sheet/auto-incident-sheet.component';

@Component({
  selector: 'app-crash-dectector',
  templateUrl: './crash-dectector.component.html',
  styleUrls: ['./crash-dectector.component.scss']
})
export class CrashDectectorComponent implements OnInit {
  currentx;
  currenty;
  currentz;
  lastX;
  lastY;
  lastZ;
  moveCounter = 0;
  motion;
  isAutoSheetOpened = false;

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {
    this.detectMotion();
  }

  openAutoIncidentSheet() {
    if (!this.isAutoSheetOpened) {
      this.bottomSheet
        .open(AutoIncidentSheetComponent)
        .afterDismissed()
        .subscribe(() => {
          this.isAutoSheetOpened = false;
        });
      this.isAutoSheetOpened = true;
    }
  }

  private detectMotion() {
    window.addEventListener(
      'devicemotion',
      motiondata => {
        this.handleMotion(motiondata);
        this.motion = motiondata;
      },
      true
    );
  }

  private handleMotion(e) {
    let acc = e.acceleration;
    if (!acc.hasOwnProperty('x')) {
      acc = e.accelerationIncludingGravity;
    }

    if (!acc.x) {
      return;
    }

    this.currentx = acc.x;
    this.currenty = acc.y;
    this.currentz = acc.z;

    if (Math.abs(acc.x) >= 1 && Math.abs(acc.y) >= 1 && Math.abs(acc.z) >= 1) {
      if (!this.lastX) {
        this.lastX = acc.x;
        this.lastY = acc.y;
        this.lastZ = acc.z;
        return;
      }

      const deltaX = Math.abs(acc.x - this.lastX);
      const deltaY = Math.abs(acc.y - this.lastY);
      const deltaZ = Math.abs(acc.z - this.lastZ);

      if (deltaX + deltaY + deltaZ > 50) {
        this.moveCounter++;
      } else {
        this.moveCounter = Math.max(0, --this.moveCounter);
      }

      if (this.moveCounter > 1) {
        this.crashDetected();

        this.moveCounter = 0;
      }

      this.lastX = acc.x;
      this.lastY = acc.y;
      this.lastZ = acc.z;
    }
  }

  private crashDetected() {
    this.openAutoIncidentSheet();
  }
}
