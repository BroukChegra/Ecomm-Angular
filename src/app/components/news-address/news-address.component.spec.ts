import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAddressComponent } from './news-address.component';

describe('NewsAddressComponent', () => {
  let component: NewsAddressComponent;
  let fixture: ComponentFixture<NewsAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
