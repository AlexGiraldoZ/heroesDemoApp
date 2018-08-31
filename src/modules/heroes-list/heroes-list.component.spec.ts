import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Router } from "@angular/router";
import { StoreModule, Store } from "@ngrx/store";
import { assert, expect } from "chai";
import { after, before, describe, it } from "mocha";
import { Observable } from "rxjs/Observable";
import { IHeroInfo } from "../../models/heroe.model";
import { HeroesDataService } from "../../services/heroes-data.service";
import { HeroesListComponent } from "./heroes-list.component";
import * as fromReducers from "../../store/reducers/heroe.reducers";

describe("HeroesListComponent", () => {
  let heroesListComponent: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;
  const heroesDataService = {
    getHeroes: sinon.stub(),
  };
  const router = {
    events: Observable.create({}),
    navigate: sinon.stub(),
  };

  let store: Store<fromReducers.IHeroState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesListComponent],
      imports: [StoreModule.forRoot({})],
      providers: []
    }).compileComponents();

    store = TestBed.get(Store);

    sinon.spy(store, 'dispatch')

    fixture = TestBed.createComponent(HeroesListComponent);
    heroesListComponent = fixture.componentInstance;
    fixture.detectChanges();
  }));

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
