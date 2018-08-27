import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { IHeroInfo } from "../../models/heroe.model";
import { getHero, getHeroes, IHeroState} from "../../store/reducers/heroe.reducers";

@Component({
    selector: "heroes-app",
    styles: [ require("./heroes-details.component.scss") ],
    template: require("./heroes-details.component.html"),
})

export class HeroesDetailsComponent {

    hero$: Observable<IHeroInfo>;
    form: FormGroup;
    heroHeight = new FormControl("", Validators.required);
    heroName = new FormControl("", Validators.required);
    heroNickname = new FormControl("", Validators.required);

    constructor(
        private store: Store<IHeroState>,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
    ) {
        this.form = formBuilder.group({
            height: this.heroHeight,
            name: this.heroName,
            nickname: this.heroNickname,
        });
    }

    ngOnInit() {
        const heroId = this.route.snapshot.paramMap.get("id");
        this.hero$ = this.store.select(getHero(parseInt(heroId, 10)));
        this.heroHeight.setValue(this.hero$.subscribe((result) => result && result.height));
        this.heroName.setValue(this.hero$.subscribe((result) => result && result.name));
        this.heroNickname.setValue(this.hero$.subscribe((result) => result && result.nickname.toString()));
    }

    returnToList() {
        this.router.navigate(["../heroes"]);
      }

}