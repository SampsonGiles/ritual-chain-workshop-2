# Scenario Testing

Instead of writing tests around individual helper calls only, I started
using small scenarios.

For example:

- value above target
- value equal to target
- value below target

Each scenario has an input and an expected result.

This felt more natural to me because I can read the test names almost
like examples of how the market should behave.

I kept the scenarios small so it is easy to add another edge case later.
