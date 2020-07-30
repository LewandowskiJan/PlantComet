import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [AuthService, RouterTestingModule, HttpClientTestingModule]
  }));

  it('should be created', () => {
    // const service: AuthService = TestBed.get(AuthService);
    // // todo: fix tests
    // expect(true).toBeTrue();
  });
});
