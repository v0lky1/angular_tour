import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCharacterSearchComponent } from './main-character-search.component';

describe('MainCharacterSearchComponent', () => {
  let component: MainCharacterSearchComponent;
  let fixture: ComponentFixture<MainCharacterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCharacterSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCharacterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
