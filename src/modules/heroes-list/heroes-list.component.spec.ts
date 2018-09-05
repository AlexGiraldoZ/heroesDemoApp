import { ComponentFixture, TestBed, async, getTestBed, inject } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { ApplicationInitStatus, InjectionToken } from '@angular/core';
import { RouterModule, Router } from "@angular/router";
import { 
  StoreModule, 
  Store, 
  StateObservable, 
  combineReducers, 
  ActionsSubject, 
  ReducerManager,
  ReducerManagerDispatcher,
 
} from "@ngrx/store";
import { assert, expect } from "chai";
import { after, before, describe, it } from "mocha";
import { Observable } from "rxjs/Observable";
import { IHeroInfo } from "../../models/heroe.model";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppModule } from "../../app.module"
import { HeroesListComponent } from "./heroes-list.component";
import { HeroesDataService } from "../../services/heroes-data.service";
import * as fromReducers from "../../store/reducers/heroe.reducers";
import { AppComponent } from "../../app.component";
import { HeroesDetailsComponent } from "../heroes-details/heroes-details.component";
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

describe("HeroesListComponent", () => {
  let heroesListComponent: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;
  let store: Store<fromReducers.IHeroState>;
  // const heroesDataService = {
  //   getHeroes: sinon.stub(),
  // };
  // const router = {
  //   events: Observable.create({}),
  //   navigate: sinon.stub(),
  // };

  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        StoreModule.forRoot({
          //'feature': combineReducers(fromReducers.reducer)
        }),
         StoreModule.forFeature( "heroes", fromReducers.reducer ),
      ],
      providers: [
        { provide: ReducerManager }, 
        { provide: ActionsSubject },
        { provide: StateObservable },
        Store,
        ApplicationInitStatus,
        { provide: HeroesDataService },
       ],
       declarations: [ HeroesListComponent ]
    });

    store = TestBed.get(Store);
    sinon.stub(store, 'dispatch').callThrough();
    fixture = TestBed.createComponent(HeroesListComponent);
    heroesListComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  // beforeEach(() => {
  //   heroesListComponent = new HeroesListComponent(heroesDataService as any, store as any, router as any);
  // });

  afterEach(() => {
    // Restore the default sandbox here
    sinon.restore();
  });

  describe("constructor()", () => {
    it("should test component constructor method", () => {
      expect(heroesListComponent).to.not.exist;
    });
  });

  it("should expose the Chai assert method", () => {
    assert.ok("everything", "everything is ok");
  });

  it("should expose the Chai expect method", () => {
    expect("foo").to.not.equal("floor");
  });

  it("should work with ES6 fat arrow function", () => {
    (1).should.not.equal(2);
  });
});
