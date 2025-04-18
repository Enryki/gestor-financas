import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard'; // Verifique o nome do arquivo!
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

// Mocks para AuthService e Router
class MockAuthService {
  isLoggedIn() {
    return true; // ou false, dependendo do teste
  }
}

class MockRouter {
  navigate(path: string[]) {}
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: MockAuthService }, // Mock do AuthService
        { provide: Router, useClass: MockRouter }, // Mock do Router
      ],
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if user is logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    expect(guard.canActivate()).toBe(true);
  });

  it('should redirect to login if user is not logged in', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    const navigateSpy = spyOn(router, 'navigate');

    expect(guard.canActivate()).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
