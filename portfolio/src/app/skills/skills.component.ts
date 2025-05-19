import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';

interface Skill {
  name: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeIn', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial => final', animate('0.5s ease-out'))
    ]),
    trigger('scaleIn', [
      state('initial', style({
        opacity: 0,
        transform: 'scale(0.8)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('initial => final', animate('0.5s ease-out'))
    ])
  ]
})
export class SkillsComponent {
  skills: Skill[] = [
    // Frontend
    { name: 'Angular', category: 'Frontend' },
    { name: 'Expo', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'C', category: 'Backend' },
    { name: 'Go', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'SQL', category: 'Backend' },
    
    // DevOps
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'DevOps' },
    { name: 'Git', category: 'DevOps' },
    { name: 'GitLab', category: 'DevOps' },
    { name: 'Linux', category: 'DevOps' },
  ];

  skillStates: string[] = [];

  ngOnInit() {
    this.skillStates = this.skills.map((_, index) => 'initial');
    this.animateSkills();
  }

  animateSkills() {
    this.skillStates.forEach((_, index) => {
      setTimeout(() => {
        this.skillStates[index] = 'final';
      }, index * 100);
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  get categories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }
} 