import { TestBed } from '@angular/core/testing';

import { MemberareaService } from './memberarea.service';

describe('MemberareaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberareaService = TestBed.get(MemberareaService);
    expect(service).toBeTruthy();
  });
});
