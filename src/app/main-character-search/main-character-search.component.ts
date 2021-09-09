import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { MainCharacter } from '../main-character';
import { MainCharacterService } from '../main-character.service';

@Component({
  selector: 'app-main-character-search',
  templateUrl: './main-character-search.component.html',
  styleUrls: ['./main-character-search.component.scss'],
})
export class MainCharacterSearchComponent implements OnInit {
  mainCharacters$!: Observable<MainCharacter[]>;
  private searchTerms = new Subject<string>();

  constructor(private mainCharacterService: MainCharacterService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.mainCharacters$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) =>
        this.mainCharacterService.searchMainCharacters(term)
      )
    );
  }
}
