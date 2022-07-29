import { Component } from '@angular/core';
import { SideBarContext } from '@contexts/SideBarContext';
import { INavItem } from './nav-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navItens: INavItem[] = [
    {
      icon: 'fas fa-user',
      name: 'Alunos',
      url: '/students'
    },
    {
      icon: 'fas fa-university',
      name: 'Matérias',
      url: '/classes'
    }
  ];

  constructor(private useSideBar: SideBarContext) {}
}
