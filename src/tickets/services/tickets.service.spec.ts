import { TestBed } from '@angular/core/testing';

import { TicketsService } from './tickets.service';
import { HttpClientModule } from '@angular/common/http';

describe('TicketsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: TicketsService = TestBed.get(TicketsService);
    expect(service).toBeTruthy();
  });
});
