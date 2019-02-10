import { TestBed, inject } from '@angular/core/testing';

import { XmlMarshallerService } from './xml-marshaller.service';

describe('XmlMarshallerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmlMarshallerService]
    });
  });

  it('should be created', inject([XmlMarshallerService], (service: XmlMarshallerService) => {
    expect(service).toBeTruthy();
  }));
});
