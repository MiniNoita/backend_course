import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

/* 
Funktionaalinen guard, joka tarkistaa onko käyttäjällä 
voimassaoleva token sessionStoragessa. 
Jos on, päästetään eteenpäin, muuten ohjataan login-sivulle.
*/
export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (sessionStorage.getItem('accesstoken')) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
