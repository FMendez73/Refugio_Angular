import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Animales } from './refugio';
import { Dueños } from './refugio';
import { Adopciones } from './refugio';
import { Usuarios } from './refugio';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  private refugioURL='http://localhost:3000/api/v1/refugio_angular/animales';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {

  }
  /** GET heroes from the server */
  getAnimales(): Observable<Animales[]> {
    return this.http.get<Animales[]>(this.refugioURL)
      .pipe(
        tap(_ => this.log('fetched Animales')),
        catchError(this.handleError<Animales[]>('getAnimales', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getAnimalesNo404<Data>(id: number): Observable<Animales> {
    const url = `${this.refugioURL}/?id=${id}`;
    return this.http.get<Animales[]>(url)
      .pipe(
        map(Animales => Animales[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} Id=${id}`);
        }),
        catchError(this.handleError<Animales>(`getAnimales Id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getAnimal(id: number): Observable<Animales> {
    const url = `${this.refugioURL}/${id}`;
    return this.http.get<Animales>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Animales>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchAnimales(term: string): Observable<Animales[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Animales[]>(`${this.refugioURL}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found Animales matching "${term}"`) :
         this.log(`no Animales matching "${term}"`)),
      catchError(this.handleError<Animales[]>('searchAnimales', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addAnimales(Animales: Animales): Observable<Animales> {
    return this.http.post<Animales>(this.refugioURL, Animales, this.httpOptions).pipe(
      tap((newHero: Animales) => this.log(`added taqueria w/ id=${Animales.Id_animal}`)),
      catchError(this.handleError<Animales>('addAnimales'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteAnimal(id: number): Observable<Animales> {
    const url = `${this.refugioURL}/${id}`;

    return this.http.delete<Animales>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted taqueria id=${id}`)),
      catchError(this.handleError<Animales>('deleteAnimal'))
    );
  }

  /** PUT: update the hero on the server */
  updateAnimal(Animales: Animales): Observable<any> {
    return this.http.put(this.refugioURL, Animales, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${Animales.Id_animal}`)),
      catchError(this.handleError<any>('updateAnimal'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AnimalesService: ${message}`);
  }
}

export class DueñoService {

  private refugioURL='http://localhost:3000/api/v1/refugio_angular/dueños';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {

  }
  /** GET heroes from the server */
  getDueños(): Observable<Dueños[]> {
    return this.http.get<Dueños[]>(this.refugioURL)
      .pipe(
        tap(_ => this.log('fetched Dueños')),
        catchError(this.handleError<Dueños[]>('getAnimales', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getDueñosNo404<Data>(id: number): Observable<Dueños> {
    const url = `${this.refugioURL}/?id=${id}`;
    return this.http.get<Dueños[]>(url)
      .pipe(
        map(Dueños => Dueños[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} Id=${id}`);
        }),
        catchError(this.handleError<Dueños>(`getDueños Id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getDueño(id: number): Observable<Dueños> {
    const url = `${this.refugioURL}/${id}`;
    return this.http.get<Dueños>(url).pipe(
      tap(_ => this.log(`fetched Id_dueño=${id}`)),
      catchError(this.handleError<Dueños>(`getDueños id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchDueño(term: string): Observable<Dueños[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Dueños[]>(`${this.refugioURL}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found Dueños matching "${term}"`) :
         this.log(`no Dueños matching "${term}"`)),
      catchError(this.handleError<Dueños[]>('searchDueño', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addDueños(Dueños: Dueños): Observable<Dueños> {
    return this.http.post<Dueños>(this.refugioURL, Dueños, this.httpOptions).pipe(
      tap((newDueño: Dueños) => this.log(`added dueño w/ id=${Dueños.Id_dueño}`)),
      catchError(this.handleError<Dueños>('addDueños'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteDueño(id: number): Observable<Dueños> {
    const url = `${this.refugioURL}/${id}`;

    return this.http.delete<Dueños>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted dueño id=${id}`)),
      catchError(this.handleError<Dueños>('deleteDueño'))
    );
  }

  /** PUT: update the hero on the server */
  updateDueño(Dueños: Dueños): Observable<any> {
    return this.http.put(this.refugioURL, Dueños, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${Dueños.Id_dueño}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`DueñosService: ${message}`);
  }
}

export class AdopcionesService {

  private refugioURL='http://localhost:3000/api/v1/refugio_angular/adopciones';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {

  }
  /** GET heroes from the server */
  getAdopciones(): Observable<Adopciones[]> {
    return this.http.get<Adopciones[]>(this.refugioURL)
      .pipe(
        tap(_ => this.log('fetched Adopciones')),
        catchError(this.handleError<Adopciones[]>('getAdopciones', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getAdopcionesNo404<Data>(id: number): Observable<Adopciones> {
    const url = `${this.refugioURL}/?id=${id}`;
    return this.http.get<Adopciones[]>(url)
      .pipe(
        map(Adopciones => Adopciones[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} Id=${id}`);
        }),
        catchError(this.handleError<Adopciones>(`getadopciones Id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getAdopcion(id: number): Observable<Adopciones> {
    const url = `${this.refugioURL}/${id}`;
    return this.http.get<Adopciones>(url).pipe(
      tap(_ => this.log(`fetched Id=${id}`)),
      catchError(this.handleError<Adopciones>(`getAdopciones id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchAdopciones(term: string): Observable<Adopciones[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Adopciones[]>(`${this.refugioURL}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found adopciones matching "${term}"`) :
         this.log(`no adopciones matching "${term}"`)),
      catchError(this.handleError<Adopciones[]>('searchAnimales', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addAdopciones(Adopciones: Adopciones): Observable<Adopciones> {
    return this.http.post<Adopciones>(this.refugioURL, Adopciones, this.httpOptions).pipe(
      tap((newAdopcion: Adopciones) => this.log(`added adopcion w/ id=${Adopciones.Id_adopcion}`)),
      catchError(this.handleError<Adopciones>('addAdopcion'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteAdopcion(id: number): Observable<Adopciones> {
    const url = `${this.refugioURL}/${id}`;

    return this.http.delete<Adopciones>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted adopcion id=${id}`)),
      catchError(this.handleError<Adopciones>('deleteAdopcion'))
    );
  }

  /** PUT: update the hero on the server */
  updateAdopcion(Adopciones: Adopciones): Observable<any> {
    return this.http.put(this.refugioURL, Adopciones, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${Adopciones.Id_adopcion}`)),
      catchError(this.handleError<any>('updateAdopcion'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AdopcionesService: ${message}`);
  }
}

