import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthContext } from '@contexts/AuthContext';
import { SideBarContext } from '@contexts/SideBarContext';
import { INavItem } from '../nav-item';
import { User } from '@models/user';

@Component({
  selector: 'app-expanded-sidebar',
  templateUrl: './expanded-sidebar.component.html',
  styleUrls: ['./expanded-sidebar.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          position: '{{position}}',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }),
        {
          params: {
            position: window.matchMedia('(max-width: 992px)').matches ? 'fixed' : 'relative'
          }
        }
      ),
      state(
        'closed',
        style({
          backgroundColor: 'rgba(0, 0, 0, 0.0)'
        })
      ),
      transition('* => closed', [animate('.5s')])
    ])
  ]
})
export class ExpandedSidebarComponent implements OnInit {
  user: User = new User();
  @Input() navItens: INavItem[] = [];


  constructor(public useSideBar: SideBarContext, private useAuth: AuthContext, private router: Router) {}

  ngOnInit() {
    this.user = this.useAuth.getLoggedUser();
  }

  positionClass() {
    return window.matchMedia('(max-width: 768px)').matches ? 'fixed' : 'relative';
  }

  logout() {
    this.useAuth.logout();
    this.router.navigate(['/login']);
  }
}
