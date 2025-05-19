import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  githubUrl: string;
  skills: {
    name: string;
  }[];
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projects: Project[] = [
    {
      title: 'Affichage des vols dans un un aéroport',
      description: 'Un portfolio moderne développé avec Angular, présentant mes compétences et expériences professionnelles.',
      fullDescription: 'Un portfolio moderne développé avec Angular, présentant mes compétences, expériences professionnelles, et des détails techniques sur l\'architecture, les choix de design, et les technologies utilisées.',
      imageUrl: 'assets/images/portfolio.jpg',
      githubUrl: 'https://github.com/votre-username/portfolio',
      skills: [
        { name: 'Angular' },
        { name: 'TypeScript' },
        { name: 'CSS3' }
      ]
    },
    {
      title: 'Application de Gestion de Tâches',
      description: 'Une application web full-stack pour la gestion de tâches avec authentification et base de données.',
      fullDescription: 'Application web full-stack avec authentification, gestion des utilisateurs, base de données MongoDB, et interface utilisateur réactive. Déploiement sur le cloud et CI/CD.',
      imageUrl: 'assets/images/todo-app.jpg',
      githubUrl: 'https://github.com/votre-username/todo-app',
      skills: [
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'MongoDB' }
      ]
    },
    {
      title: 'API RESTful',
      description: 'Une API RESTful sécurisée avec authentification JWT et documentation Swagger.',
      fullDescription: 'API RESTful sécurisée avec authentification JWT, documentation Swagger, gestion des utilisateurs, et bonnes pratiques de sécurité.',
      imageUrl: 'assets/images/api.jpg',
      githubUrl: 'https://github.com/votre-username/api',
      skills: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'JWT' }
      ]
    }
  ];

  expandedIndex: number | null = null;
  expandedAnimState: 'collapsed' | 'expanded' = 'collapsed';

  expandProject(index: number) {
    this.expandedIndex = index;
    this.expandedAnimState = 'collapsed';
    setTimeout(() => {
      this.expandedAnimState = 'expanded';
    }, 10);
  }

  closeExpandedProject() {
    this.expandedIndex = null;
  }
} 