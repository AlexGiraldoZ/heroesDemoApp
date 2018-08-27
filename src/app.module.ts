import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "../src/app.component";
import { HeroesDetailsComponent } from "../src/modules/heroes-details/heroes-details.component";
import { HeroesListComponent } from "../src/modules/heroes-list/heroes-list.component";
import { HeroesDataService } from "../src/services/heroes-data.service";
import * as fromReducers from "../src/store/reducers/heroe.reducers";

const appRoutes: Routes = [
    {
        component: HeroesDetailsComponent,
        path: "hero/:id",
    },
    {
        component: HeroesListComponent,
        data: { title: "Heroes List" },
        path: "heroes",
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "heroes",
    },
    {
        component: HeroesListComponent,
        path: "**",
    },
];

@NgModule({
    bootstrap:      [AppComponent],
    declarations:   [AppComponent, HeroesListComponent, HeroesDetailsComponent],
    imports:        [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature("heroes", fromReducers.reducer),
    ],
    providers:      [HeroesDataService],
})

export class AppModule {}