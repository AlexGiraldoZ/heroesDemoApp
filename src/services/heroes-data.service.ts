import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HeroesDataService {
    private heroesListEndpoint: string;

    constructor(private http: HttpClient) {
        this.heroesListEndpoint = "https://udem.herokuapp.com/heroes";
    }

    getHeroes(): Observable<any> {
        return this.http.get(this.heroesListEndpoint);
    }
}
