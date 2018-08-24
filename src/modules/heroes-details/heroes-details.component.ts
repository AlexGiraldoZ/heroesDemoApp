import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { IHeroInfo } from "../../models/heroe.model";
import { getHero, IHeroState} from "../../store/reducers/heroe.reducers";

@Component({
    selector: "heroes-app",
    styles: [ require("./heroes-details.component.scss") ],
    template: require("./heroes-details.component.html"),
})

export class HeroesDetailsComponent {

    hero$: Observable<IHeroInfo>;

    constructor(
        private store: Store<IHeroState>,
        private route: ActivatedRoute,
        private router: Router,

    ) {}

    ngOnInit() {
        debugger
    }

}