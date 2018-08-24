import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { HeroesDataService } from "../services/heroes-data.service";
import * as fromReducers from "../store/reducers/heroe.reducers";
import { HeroesComponent } from "./heroes.component";

@NgModule({
    bootstrap:      [HeroesComponent],
    declarations:   [HeroesComponent],
    imports:        [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature("heroes", fromReducers.reducer),
    ],
    providers:      [HeroesDataService],
})
export class AppModule {}