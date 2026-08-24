import { expect } from "chai";

import {
  createScenario,
  runScenario,
  scenarioSummary,
} from "./helpers/scenarios";

describe("scenario examples", function () {
  const cases = [
    createScenario(
      "above target",
      100n,
      120n,
      true,
    ),
    createScenario(
      "at target",
      100n,
      100n,
      true,
    ),
    createScenario(
      "below target",
      100n,
      99n,
      false,
    ),
  ];

  for (const scenario of cases) {
    it(
      scenario.name,
      function () {
        expect(
          runScenario(scenario),
        ).to.equal(
          scenario.expected,
        );
      },
    );
  }

  it("creates a readable summary", function () {
    const scenario =
      cases[0];

    expect(
      scenarioSummary(scenario),
    ).to.contain(
      "above target",
    );
  });

  it("includes the target in the summary", function () {
    expect(
      scenarioSummary(cases[1]),
    ).to.contain(
      "target=100",
    );
  });
});
