import { EventTypes } from './event-types';

export interface ToastEvent {
  type: EventTypes;
  title: string;
  message: string;
}
export interface ToastEvent1 {
  type: EventTypes;
  title: string;
  message: string;
  functionExp:any
}