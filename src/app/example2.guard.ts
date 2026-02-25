import { CanDeactivateFn } from '@angular/router';

export const example2Guard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  const confirmLogout = confirm(
    'This action will log you out. Do you want to continue?'
  );

  if (confirmLogout) {
    localStorage.removeItem('token'); // delete token
    return true; // allow navigation
  }

  return false; // prevent navigation
};
