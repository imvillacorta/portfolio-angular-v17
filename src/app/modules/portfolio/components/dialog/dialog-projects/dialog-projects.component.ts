import { Component, Inject, OnInit, signal } from '@angular/core';
import { projects } from '../../../interface/projects.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {

  constructor(
    private _dialogref: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: projects
  ) { }

  public getData = signal<projects | null>(null)

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogref.close();
  }
}
