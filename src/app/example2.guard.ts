import { CanDeactivateFn } from '@angular/router';

export const example2Guard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  return component.canDeactivateEx ? component.canDeactivateEx()  : true

};
