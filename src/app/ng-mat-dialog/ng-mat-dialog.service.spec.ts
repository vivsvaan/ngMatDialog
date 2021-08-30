import { TestBed } from '@angular/core/testing';

import { NgMatDialogService } from './ng-mat-dialog.service';

describe('NgMatDialogService', () => {
  let service: NgMatDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMatDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
