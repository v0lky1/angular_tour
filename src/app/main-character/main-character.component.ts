import { Component, OnInit } from '@angular/core';
import { MainCharacter } from '../main-character';
import { MainCharacterService } from '../main-character.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-main-character',
  templateUrl: './main-character.component.html',
  styleUrls: ['./main-character.component.scss'],
})
export class MainCharacterComponent implements OnInit {
  mainCharacters: MainCharacter[] = [];
  constructor(private mainCharacterService: MainCharacterService) {}

  getMainCharacters(): void {
    this.mainCharacterService
      .getMainCharacters()
      .subscribe((mainCharacters) => (this.mainCharacters = mainCharacters));
  }
  add(firstName: string, lastName: string): void {
    firstName = firstName.trim();
    if (!firstName) {
      return;
    }

    this.mainCharacterService
      .addMainCharacter({
        firstName: firstName,
        lastName: lastName,
      } as MainCharacter)
      .subscribe((mainCharacter) => {
        this.mainCharacters.push(mainCharacter);
      });
  }
  delete(mainCharacter: MainCharacter): void {
    this.mainCharacters = this.mainCharacters.filter(
      (h) => h !== mainCharacter
    );
    this.mainCharacterService.deleteMainCharacter(mainCharacter.id).subscribe();
  }

  ngOnInit(): void {
    this.getMainCharacters();
  }
}
