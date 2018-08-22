import {Component} from "@angular/core";
import { HeroesDataService } from "../services/heroes-data.service";

@Component({
    selector: "heroes-app",
    styles: [ require("./heroes.component.scss") ],
    template: require("./heroes.component.html"),
})
export class HeroesComponent {
    message = "Top heroes";
    heroes: any[];
    constructor(private heroesDataService: HeroesDataService) {}

    ngOnInit() {
        this.heroesDataService.getHeroes().subscribe(
            (result) => {
                this.heroes = result;
            },
        );
    }
}
