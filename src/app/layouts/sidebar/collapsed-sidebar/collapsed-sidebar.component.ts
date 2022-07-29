import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthContext } from '@contexts/AuthContext';
import { SideBarContext } from '@contexts/SideBarContext';

@Component({
  selector: 'app-collapsed-sidebar',
  templateUrl: './collapsed-sidebar.component.html',
  styleUrls: ['./collapsed-sidebar.component.scss']
})
export class CollapsedSidebarComponent {
  @Input() navItens: any[] = [];

  constructor(public useSideBar: SideBarContext, private useAuth: AuthContext, private router: Router) {}

  logout() {
    this.useAuth.logout();
    this.router.navigate(['/login']);
  }
}
