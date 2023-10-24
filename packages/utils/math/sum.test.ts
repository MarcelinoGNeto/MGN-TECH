import { sum } from "./sum";

describe("sum()", () => {
  it("when receives 1 and 1, return 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
  it("when receives 2 and 1, return 3", () => {
    expect(sum(2, 1)).toBe(3);
  });
});
