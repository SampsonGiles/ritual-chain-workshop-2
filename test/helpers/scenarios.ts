export type Scenario = {
  name: string;
  target: bigint;
  value: bigint;
  expected: boolean;
};

export function createScenario(
  name: string,
  target: bigint,
  value: bigint,
  expected: boolean,
): Scenario {
  return {
    name,
    target,
    value,
    expected,
  };
}

export function runScenario(
  scenario: Scenario,
): boolean {
  return (
    scenario.value >=
    scenario.target
  );
}

export function scenarioSummary(
  scenario: Scenario,
): string {
  return [
    scenario.name,
    `value=${scenario.value}`,
    `target=${scenario.target}`,
    `expected=${scenario.expected}`,
  ].join(" | ");
}
