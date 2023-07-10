import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'mc-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss'],
})
export class LearningComponent implements OnInit {
  /* dialog */
  showDialog: boolean;
  animal: string;
  name: string;
  age: number;
  isDialogOpen: boolean;
  /* spiner */
  showSpiner: boolean;
  color: ThemePalette; //'primary' | 'accent' | 'warn' | undefined;
  mode: ProgressSpinnerMode; //'determinate' | 'indeterminate';
  value: number;
  sizeOfSpiner: number;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.initValue();
  }

  initValue() {
    this.isDialogOpen = false;
    this.value = 50;
    this.showDialog = false;
    this.showSpiner = false;
    this.mode = 'indeterminate';
    this.color = 'primary';
    this.sizeOfSpiner = 50;
  }

  openDialog(): void {
    if (this.isDialogOpen) {
      return;
    }
    this.isDialogOpen = true;

    const dialogRef = this.dialog.open(DialogComponent, {
      /* transfer some data to DialogComponent */
      data: { name: this.name, animal: this.animal },
      /* add parameters for dialog-window */
      // height: 'auto',
      // width: 'auto',
    });

    dialogRef.afterClosed().subscribe((result) => {
      /* reciev data from DialogComponent */
      console.log(`The dialog was closed ${result}`);
      this.animal = result;
      this.isDialogOpen = false;
    });
  }

  reset() {
    this.name = '';
    this.animal = '';
    this.age = null;
  }
}
