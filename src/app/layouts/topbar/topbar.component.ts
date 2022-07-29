import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { SideBarContext } from '@contexts/SideBarContext';
import { TitleTopBarService } from '@services/title-top-bar.service';
import { AuthContext } from '@contexts/AuthContext';
import { User } from '@models/user';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {
  user: User = new User();
  title: string = '';
  disposables: Subscription[] = [];

  constructor(
    public useSideBar: SideBarContext,
    private _router: Router,
    private _useAuth: AuthContext,
    private _route: ActivatedRoute,
    private _titleTopBar: TitleTopBarService
  ) {}

  ngOnInit() {
    this.user = this._useAuth.getLoggedUser();

    this.subscribeNavigationEnd();
    this.changeTitle();
  }

  ngOnDestroy() {
    for (const subscription of this.disposables) {
      subscription.unsubscribe();
    }
  }

  changeTitle() {
    let child = this._route.firstChild;
    while (child?.firstChild) {
      child = child.firstChild;
    }

    if (child?.snapshot.data.topbarTitle) {
      this._titleTopBar.update(child.snapshot.data.topbarTitle);
    } else {
      this._titleTopBar.update('');
    }
  }

  subscribeNavigationEnd() {
    this.disposables.push(
      this._titleTopBar.change.subscribe(title => {
        this.title = title;
      })
    );

    this.disposables.push(
      this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
        this.changeTitle();
      })
    );
  }

  async logout() {
    await this._useAuth.logout();

    this._router.navigate(['/login']);
  }
}
