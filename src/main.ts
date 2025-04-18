import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './app/auth/auth.interceptor';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideCharts(withDefaultRegisterables()),
    provideRouter(routes),
    provideHttpClient(withInterceptors([AuthInterceptor])),
  ],
}).catch((err) => console.error(err));
