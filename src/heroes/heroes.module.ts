import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HeroesDataService } from "../services/heroes-data.service";
import { HeroesComponent } from "./heroes.component";

@NgModule({
    bootstrap:      [HeroesComponent],
    declarations:   [HeroesComponent],
    imports:        [BrowserModule, FormsModule, HttpClientModule],
    providers:      [HeroesDataService],
})
export class AppModule {}