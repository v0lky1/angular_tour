import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MainCharacter } from './main-character';

@Injectable({
  providedIn: 'root',
})
/*
    
*/
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const main_characters = [
      { id: 10, firstName: 'Magni', lastName: 'Bronzebeard' },
      { id: 11, firstName: 'Ysera' },
      { id: 12, firstName: 'Varian', lastName: 'Wrynn' },
      { id: 13, firstName: 'Jaina', lastName: 'Proudmoore' },
      { id: 14, firstName: 'Khadgar' },
      { id: 15, firstName: 'Lord Magus', lastName: 'Medivh' },
      { id: 16, firstName: 'Prophet', lastName: 'Velen' },
      { id: 17, firstName: 'Elune' },
      { id: 18, firstName: 'Lorewalker', lastName: 'Cho' },
      { id: 19, firstName: 'Muradin', lastName: 'Bronzebeard' },
      { id: 20, firstName: 'Alleria', lastName: 'Windrunner' },
    ];
    return { main_characters };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(mainCharacters: MainCharacter[]): number {
    return mainCharacters.length > 0
      ? Math.max(...mainCharacters.map((mainCharacter) => mainCharacter.id)) + 1
      : 11;
  }
}
