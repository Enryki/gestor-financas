import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from '../app/auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideCharts(withDefaultRegisterables()), provideHttpClient(withInterceptors([AuthInterceptor]))]
};
