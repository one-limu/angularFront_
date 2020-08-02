
import { AuthenticationGuard } from '@app/core';
import { MemberareaComponent } from './memberarea.component';
import { Routes, Route } from '@angular/router';


export class MemberareaService {

  constructor() { }

  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: 'memberarea',
      component: MemberareaComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}
