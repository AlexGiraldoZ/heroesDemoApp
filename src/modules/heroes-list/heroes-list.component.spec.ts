import { ComponentFixture, TestBed, async, getTestBed, inject } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { ApplicationInitStatus } from '@angular/core';
import { Router } from "@angular/router";
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
import { HttpClient } from "@angular/common/http";
import { HeroesListComponent } from "./heroes-list.component";
import { HeroesDataService } from "../../services/heroes-data.service";
import * as fromReducers from "../../store/reducers/heroe.reducers";
import { AppComponent } from "../../app.component";
import { HeroesDetailsComponent } from "../heroes-details/heroes-details.component";
import { MockBackend, MockConnection } from '@angular/http/testing';

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
      declarations: [AppComponent, HeroesListComponent, HeroesDetailsComponent],
      imports: [
        //HttpClient,
        StoreModule.forRoot({
          //'feature': combineReducers(fromReducers.reducer)
        }),
        StoreModule.forFeature("heroes", fromReducers.reducer),
      ],
      providers: [
         ApplicationInitStatus,
         Store,
         { provide: StateObservable, useValue: StoreModule},
         ActionsSubject,
         ReducerManager,
         ReducerManagerDispatcher,
        //HttpClient,
        { provide: HeroesDataService, useValue: MockBackend },
        //HeroesDataService
       ]
    });

    store = TestBed.get(Store);
    sinon.stub(store, 'dispatch');
    fixture = TestBed.createComponent(HeroesListComponent);
    heroesListComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [HeroesListComponent],
  //     imports: [
  //       StoreModule.forRoot({}),
  //     ],
  //     providers: [ApplicationInitStatus, Store, StateObservable]
  //   }).compileComponents();
  // });

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
