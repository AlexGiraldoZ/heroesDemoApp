import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IHeroInfo } from "../../models/heroe.model";
import { HeroActions, HeroActionTypes } from "../actions/heroe.actions";

export interface IHeroState extends EntityState<IHeroInfo> {}

export const adapter: EntityAdapter<IHeroInfo> = createEntityAdapter<IHeroInfo>();

const initialState: IHeroState = adapter.getInitialState();

export function reducer(state: IHeroState = initialState, action: HeroActions): EntityState<IHeroInfo>  {
    switch (action.type) {

        case HeroActionTypes.UPDATE_HERO: {
            return adapter.updateOne(action.payload.hero, state);
        }

        case HeroActionTypes.LOAD_HEROES: {
            return adapter.addAll(action.payload.heroes, state);
        }

        default: {
            return state;
        }
    }
}
export const getSelectedHero = (state: IHeroInfo[], id: number) => state[id];

// get the selectors
const { selectAll: selectAllHeroes } = adapter.getSelectors();

export const selectHeroesState = createFeatureSelector<EntityState<IHeroInfo>>("heroes");

export const getHeroes = createSelector( selectHeroesState, selectAllHeroes );

export const getHero = (id: number) => createSelector( getHeroes, (state) => state[id] );
