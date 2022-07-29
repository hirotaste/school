import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthContext } from '@contexts/AuthContext';
import { NotificationRepository } from '@repositories/notification.repository';
import { Subscription } from 'rxjs';
import { Notification } from '@models/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  disposable: Subscription;

  constructor(private _useAuth: AuthContext, private _notification: NotificationRepository) {}

  ngOnInit() {
    const user = this._useAuth.getLoggedUser();

    this.disposable = this._notification.getByUserId(user.id).subscribe(notifications => {
      for (const { type, data } of notifications) {
        switch (type) {
          case 'added':
            this.notifications.push(data);
            break;
          case 'modified':
            this.notifications = this.notifications.map(n => (n.id === data.id ? data : n));
            break;
          case 'removed':
            this.notifications = this.notifications.filter(n => n.id !== data.id);
            break;
        }
      }
    });
  }

  ngOnDestroy() {
    this.disposable?.unsubscribe();
  }

  async handleRead(notify: Notification) {
    await this._notification.update({
      id: notify.id,
      read: true
    });
  }
}
