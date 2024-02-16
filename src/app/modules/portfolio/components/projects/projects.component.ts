import { Component, inject, signal } from '@angular/core';
import { projects } from '../../interface/projects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogPanelClass } from '../../enum/dialog-panel-class.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<projects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida Fullstack',
      with: '100px',
      height: '51px',
      description: '<p> Explore o fascinante mundo do desenvolvimento web blog </p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida Fullstack',
      with: '100px',
      height: '51px',
      description: '<p> Explore o fascinante mundo do desenvolvimento web blog </p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida Fullstack',
      with: '100px',
      height: '51px',
      description: '<p> Explore o fascinante mundo do desenvolvimento web blog </p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida Fullstack',
      with: '100px',
      height: '51px',
      description: '<p> Explore o fascinante mundo do desenvolvimento web blog </p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida Fullstack',
      with: '100px',
      height: '51px',
      description: '<p> Explore o fascinante mundo do desenvolvimento web blog </p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida Fullstack',
      with: '100px',
      height: '51px',
      description: '<p> Explore o fascinante mundo do desenvolvimento web blog </p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
  ]);

  public openDialog( data: projects) {
    this.#dialog.open(DialogProjectsComponent, {
      data: data,
      panelClass: DialogPanelClass.PROJECTS
    });
  }
}
