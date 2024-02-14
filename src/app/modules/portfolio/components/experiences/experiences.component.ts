import { Component, signal } from '@angular/core';
import { experience } from '../../interface/experience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<experience[]>([
    {
      sumary: {
        strong: 'Front-end Sênior',
        p: 'Serasa Experian | Jan 2022 - Dez 2023'
      },
      text: '<p> Atuei no desenvolvimento de novas funcionalidades e manutenção de diversos produtos do Serasa Empreendedor. </p>'
    },
    {
      sumary: {
        strong: 'Front-end Sênior',
        p: 'Dotz | Jul 2021 - Dez 2021'
      },
      text: '<p> Atuei no desenvolvimento da aplicação que solicita a aquisição de cartão de crédito Dotz. </p>'
    },
    {
      sumary: {
        strong: 'Front-end Sênior',
        p: 'CESTech | Mar 2019 - Jun 2021'
      },
      text: '<p> Atuei no desenvolvimento voltado na construção de soluções e no desenvolvimento dos mais diversos tipos de sistemas. </p>'
    },
    {
      sumary: {
        strong: 'Front-end Pleno',
        p: 'Eicon | Mai 2014 - Fev 2019'
      },
      text: '<p> Atuei no desenvolvimento voltado para soluções de gestão na área da saúde, educação e gestão pública. </p>'
    },
    {
      sumary: {
        strong: 'Front-end',
        p: 'Prefeitura Municipal de Barueri | Jan 2014 - Abr 2014'
      },
      text: '<p> Desenvolvimento voltado para agendamento online no portal de saúde. </p>'
    },
    {
      sumary: {
        strong: 'Web Designer',
        p: 'Benner | Ago 2011 - Dez 2013'
      },
      text: '<p> Desenvolvimento voltado para agendamento online no portal de saúde. </p>'
    }
  ]);
}
