import { assert, expect } from "chai";
import { after, before, describe, it } from "mocha";

describe("karma test with Chai", () => {
    it("should expose the Chai assert method", () => {
      assert.ok("everything", "everything is ok");
    });

    it("should expose the Chai expect method", () => {
      expect("foo").to.not.equal("bar");
    });

  });