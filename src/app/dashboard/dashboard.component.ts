import { Component, OnInit } from '@angular/core';
import { MainCharacter } from '../main-character';
import { MainCharacterService } from '../main-character.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  mainCharacters: MainCharacter[] = [];

  constructor(private mainCharacterService: MainCharacterService) {}

  ngOnInit() {
    this.getMainCharacters();
  }

  getMainCharacters(): void {
    this.mainCharacterService
      .getMainCharacters()
      .subscribe(
        (mainCharacters) => (this.mainCharacters = mainCharacters.slice(0, 5))
      );
  }
}
