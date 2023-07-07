import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventTypes } from '../toast-model/event-types';
import { ToastEvent } from '../toast-model/toast-event';
import { ToastEvent1 } from '../toast-model/toast-event';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastEvents: Observable<ToastEvent>;
  toastEvents1: Observable<ToastEvent1>;
  private _toastEvents = new Subject<ToastEvent>();
  private _toastEvents1 = new Subject<ToastEvent1>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
    this.toastEvents1 = this._toastEvents1.asObservable();
  }

  /**
   * Show success toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showViewRequestToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.ViewRequest
    });
  }
  showAccessRequestToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.AccessRequest
    });
  }
  showAccessFunction(title: string, message: string,functionExp:any) {
    this._toastEvents1.next({
      message,
      title,
      functionExp,
      type: EventTypes.AccessFunction
    });
  }
  showSuccessToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Success
    });
  }

  /**
   * Show info toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showInfoToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Info,
    });
  }

  /**
   * Show warning toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showWarningToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Warning,
    });
  }

  /**
   * Show error toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showErrorToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Error,
    });
  }
}