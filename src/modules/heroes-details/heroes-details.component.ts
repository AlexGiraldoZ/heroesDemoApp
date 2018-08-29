import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Update } from "@ngrx/entity";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { IHeroInfo } from "../../models/heroe.model";
import * as fromActions from "../../store/actions/heroe.actions";
import { getHero, IHeroState} from "../../store/reducers/heroe.reducers";

@Component({
    selector: "heroes-app",
    styles: [ require("./heroes-details.component.scss") ],
    template: require("./heroes-details.component.html"),
})

export class HeroesDetailsComponent {

    hero$: Observable<IHeroInfo>;
    heroToUpdate: Update<IHeroInfo>;
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
        const heroId = parseInt(this.route.snapshot.paramMap.get("id"), 10);
        this.hero$ = this.store.select(getHero(heroId));
        this.hero$.subscribe((heroValue) => {
            this.form.controls[ "height" ].setValue(heroValue.height);
            this.form.controls[ "name" ].setValue(heroValue.name);
            this.form.controls[ "nickname" ].setValue(heroValue.nickname);
        });
        this.heroToUpdate = { id: heroId, changes: {} };
        this.form.valueChanges.subscribe((value) => {
            this.heroToUpdate.changes = {
                height: value.height,
                name: value.name,
                nickname: value.nickname,
            };
        });

    }

    returnToList() {
        this.store.dispatch(new fromActions.UpdateHero({ hero: this.heroToUpdate}));
        this.router.navigate(["../heroes"]);
    }

}