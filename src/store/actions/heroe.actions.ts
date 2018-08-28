import { Update } from "@ngrx/entity";
import { Action } from "@ngrx/store";
import { IHeroInfo } from "../../models/heroe.model";

export enum HeroActionTypes {
    LOAD_HEROES = "[Hero] Load Heroes",
    UPDATE_HERO = "[Hero] Update Hero",
    SELECT_HERO = "[Hero] Select Hero",
  }

export class LoadHeroes implements Action {
    readonly type = HeroActionTypes.LOAD_HEROES;

    constructor(public payload: { heroes: IHeroInfo[] }) {}
}

// tslint:disable-next-line:max-classes-per-file
export class UpdateHero implements Action {
    readonly type = HeroActionTypes.UPDATE_HERO;

    constructor(public payload: { hero: Update<IHeroInfo> }) {}
}

export type HeroActions = LoadHeroes | UpdateHero;
