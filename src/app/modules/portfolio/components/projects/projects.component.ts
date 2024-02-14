import { Component, signal } from '@angular/core';
import { projects } from '../../interface/projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
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
    }
  ]);
}
