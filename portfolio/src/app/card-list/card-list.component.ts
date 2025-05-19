import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  imageUrl: string;
  skills: {
    name: string;
  }[];
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  animations: [
    trigger('slideIn', [
      state('initial', style({
        opacity: 0,
        transform: 'translateX(-20px)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('initial => final', animate('0.5s ease-out'))
    ])
  ]
})
export class CardListComponent {
  experiences: Experience[] = [
    {
      title: 'Développeur Full Stack',
      company: 'Entreprise A',
      period: '2022 - Présent',
      description: "Développement d'applications web modernes avec Angular et Node.js. Mise en place d'architectures cloud et optimisation des performances. Détails techniques sur l'architecture, les choix de design, et les technologies utilisées.",
      imageUrl: 'assets/images/experience1.jpg',
      skills: [
        { name: 'Angular' },
        { name: 'Node.js' },
        { name: 'TypeScript' },
        { name: 'AWS' },
        { name: 'Docker' }
      ]
    },
    {
      title: 'Développeur Frontend',
      company: 'Entreprise B',
      period: '2020 - 2022',
      description: "Création d'interfaces utilisateur réactives et accessibles. Collaboration avec les designers pour implémenter des maquettes. Détails sur l'accessibilité, la performance et la collaboration avec l'équipe.",
      imageUrl: 'assets/images/experience2.jpg',
      skills: [
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'Redux' }
      ]
    }
  ];

  cardStates: string[] = [];
  expandedIndex: number | null = null;
  expandedAnimState: 'collapsed' | 'expanded' = 'collapsed';

  ngOnInit() {
    this.cardStates = this.experiences.map((_, index) => 'initial');
    this.animateCards();
  }

  animateCards() {
    this.cardStates.forEach((_, index) => {
      setTimeout(() => {
        this.cardStates[index] = 'final';
      }, index * 200);
    });
  }

  expandExperience(index: number) {
    this.expandedIndex = index;
    this.expandedAnimState = 'collapsed';
    setTimeout(() => {
      this.expandedAnimState = 'expanded';
    }, 10);
  }

  closeExpandedExperience() {
    this.expandedIndex = null;
  }
}
