import { Injectable } from '@angular/core';
import { MainCharacter } from './main-character';
import { MAINCHARACTERS } from './main-characters-mock';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MainCharacterService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private mainCharactersUrl = 'api/main_characters';

  getMainCharacter(id: number): Observable<MainCharacter> {
    const url = `${this.mainCharactersUrl}/${id}`;
    return this.http.get<MainCharacter>(url).pipe(
      tap((_) => this.log(`fetched mainCharacter id=${id}`)),
      catchError(this.handleError<MainCharacter>(`getMainCharacter id=${id}`))
    );
  }
  updateMainCharacter(mainCharacter: MainCharacter): Observable<any> {
    return this.http
      .put(this.mainCharactersUrl, mainCharacter, this.httpOptions)
      .pipe(
        tap((_) => this.log(`updated mainCharacter id=${mainCharacter.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  searchMainCharacters(term: string): Observable<MainCharacter[]> {
    if (!term.trim()) {
      // if not search term, return empty MainCharacter array.
      return of([]);
    }
    return this.http
      .get<MainCharacter[]>(`${this.mainCharactersUrl}/?firstName=${term}`)
      .pipe(
        tap((x) =>
          x.length
            ? this.log(`found MainCharacters matching "${term}"`)
            : this.log(`no MainCharacters matching "${term}"`)
        ),
        catchError(
          this.handleError<MainCharacter[]>('searchmainCharacters', [])
        )
      );
  }

  addMainCharacter(mainCharacter: MainCharacter): Observable<MainCharacter> {
    return this.http
      .post<MainCharacter>(
        this.mainCharactersUrl,
        mainCharacter,
        this.httpOptions
      )
      .pipe(
        tap((newMainCharacter: MainCharacter) =>
          this.log(`added MainCharacter w/ id=${newMainCharacter.id}`)
        ),
        catchError(this.handleError<MainCharacter>('addMainCharacter'))
      );
  }
  deleteMainCharacter(id: number): Observable<MainCharacter> {
    const url = `${this.mainCharactersUrl}/${id}`;

    return this.http.delete<MainCharacter>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted MainCharacter id=${id}`)),
      catchError(this.handleError<MainCharacter>('deleteMainCharacter'))
    );
  }
  getMainCharacters(): Observable<MainCharacter[]> {
    console.log(this.http.get<MainCharacter[]>(this.mainCharactersUrl));

    return this.http
      .get<MainCharacter[]>(this.mainCharactersUrl)
      .pipe(
        catchError(this.handleError<MainCharacter[]>('getMainCharacters', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`MainCharacterService: ${message}`);
  }
}
