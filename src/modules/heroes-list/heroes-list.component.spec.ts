import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { assert, expect } from "chai";
import { after, before, describe, it } from "mocha";
import { Observable } from "rxjs/Observable";
import * as sinon from "sinon";
import { IHeroInfo } from "../../models/heroe.model";
import { HeroesDataService } from "../../services/heroes-data.service";
import { HeroesListComponent } from "./heroes-list.component";

describe("HeroesListComponent ", () => {
  let heroesListComponent: HeroesListComponent;
  const heroesDataService = {
    getHeroes: sinon.stub(),
  };
  const router = {
    events: Observable.create({}),
    navigate: sinon.stub(),
  };

  const store = sinon.stub();

  beforeEach(() => {
    heroesListComponent = new HeroesListComponent(heroesDataService as any, store as any, router as any);
  });

  describe("constructor()", () => {
    it("should test component constructor method", () => {
      expect(heroesListComponent).to.exist;
    });
  });
});

// describe("karma test with Chai", () => {
//     it("should expose the Chai assert method", () => {
//       assert.ok("everything", "everything is ok");
//     });

//     it("should expose the Chai expect method", () => {
//       expect("foo").to.not.equal("floor");
//     });

//     it("should work with ES6 fat arrow function", () => {
//       (1).should.not.equal(2);
//   });
// });