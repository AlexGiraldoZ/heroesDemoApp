import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { IHeroInfo } from "../../models/heroe.model";

export interface IState extends EntityState<IHeroInfo> {
    selectedProject: IHeroInfo;
}

export const adapter: EntityAdapter<IHeroInfo> = createEntityAdapter<IHeroInfo>();