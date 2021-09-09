import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCharacterDetailComponent } from './main-character-detail.component';

describe('MainCharacterDetailComponent', () => {
  let component: MainCharacterDetailComponent;
  let fixture: ComponentFixture<MainCharacterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCharacterDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
