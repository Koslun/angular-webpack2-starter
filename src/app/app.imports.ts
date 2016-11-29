import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';

import { routes } from './app.routing';

export const APP_IMPORTS = [
  ReactiveFormsModule,
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
];

