# RIA Lab — Product and Engineering Brief

**Who it is for:** a fictional financial advisor learning tool and a student engineer validating workflow-product hypotheses. No real users or market validation is claimed.

**Problem:** Financial-advisor operations span client households, appointments, follow-up tasks and records. An engineer needs to understand this workflow before proposing a software intervention. This is a simplified model, not a statement about Savvy's internal system.

**Core user path:** Advisor overview -> select fictional household -> see only related records -> inspect operational urgency with evidence IDs -> generate an honest meeting brief from available records -> see the contextual Pulse recommendation and why it appears.

**Data model:** Advisor, Household, Meeting, Task; add Interaction for history and FeatureUsage/ProductEvent for Pulse. `householdId` links a record to its fictional household. Validate references and statuses.

**Business logic:** Pure deterministic functions. Example priority model is illustrative: upcoming meeting <48h +40; overdue tasks +20 each capped +40; high-priority open task +10; no contact 90+ days +25. Scores have evidence IDs, are deterministic for fixed clock, and make no investment recommendations. Pulse is a separate contextual feature-discovery hypothesis.

**Out of scope:** Real financial data/advice, live model-based ranking, auth and persistence for the initial demo, company affiliation, securities recommendations, custodian accounts, actual financial outcomes.

**Technical stack:** Next.js, React, TypeScript, Tailwind, TypeScript fixtures; tests for domain rules and manual browser smoke checks. Add DB or LLM only after a validated need and separate approval.

**Demo success:** A new viewer understands the pain point and core workflow in 90 seconds, sees one grounded explanation with source IDs, understands the rule's limits, and can name the next real-world validation question.

**Engineering learning goals:** Explain data joins, derived state, pure functions, deterministic ranking, source provenance, missing data, tests, UI vs domain responsibilities, and the difference between implemented software and product hypotheses.
