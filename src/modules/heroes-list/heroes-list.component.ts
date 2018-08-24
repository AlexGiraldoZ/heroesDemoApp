import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { IHeroInfo } from "../../models/heroe.model";
import { HeroesDataService } from "../../services/heroes-data.service";
import * as fromActions from "../../store/actions/heroe.actions";
import { getHeroes, IHeroState} from "../../store/reducers/heroe.reducers";

const FEET_TO_CMS_CONVERSOR = 30.48;

@Component({
    selector: "heroes-app",
    styles: [ require("./heroes-list.component.scss") ],
    template: require("./heroes-list.component.html"),
})

export class HeroesListComponent {

    heroes: IHeroInfo[];
    heroes$: Observable<IHeroInfo[]>;
    constructor(
        private heroesDataService: HeroesDataService,
        private store: Store<IHeroState>,
        private router: Router,
    ) {}

    ngOnInit() {
        this.heroesDataService.getHeroes().subscribe(
            (result) => {
                this.heroes = result;
                this.loadHeroes(this.prepareData(this.heroes));
            },
        );
        this.heroes$ = this.store.select(getHeroes);
    }

    viewDetails(hero: IHeroInfo) {
        this.router.navigate(["../hero", hero.id]);
      }

    private loadHeroes(data: IHeroInfo[]) {
        this.store.dispatch(new fromActions.LoadHeroes({heroes: data}));
    }

    private prepareData(data: any[]) {
        const heroes: IHeroInfo[] = data.map((item, index) => {
            return {
                height: this.convertToMetricSystem(item._height),
                id: index,
                name: item._name,
                nickname: item._nickname,
                picture: item._picture,
                position: this.transformToOrdinal(++index),
            };
        });
        return heroes;
    }

    private convertToMetricSystem(height: number) {
        const cms = (height * FEET_TO_CMS_CONVERSOR) / 100;
        return (Math.round(cms * 100) / 100).toFixed(2) + "mt";
    }

    private transformToOrdinal(index: number) {
        const s = ["th", "st", "nd", "rd"];
        const v = index % 100;
        return index + (s[(v - 20) % 10] || s[v] || s[0]);
     }
}
