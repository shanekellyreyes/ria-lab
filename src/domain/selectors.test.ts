import assert from "node:assert/strict";
import test from "node:test";

import { households, meetings, referenceDate, tasks } from "./fixtures";
import {
  getHouseholdCount,
  getHouseholdName,
  getMeetingsForHousehold,
  getOpenTaskCount,
  getOpenTasks,
  getTasksForHousehold,
  getUpcomingMeetings,
} from "./selectors";

test("fixtures contain the expected synthetic relationships", () => {
  assert.equal(getHouseholdCount(households), 3);
  assert.equal(getUpcomingMeetings(meetings, referenceDate).length, 2);
  assert.equal(getOpenTaskCount(tasks), 3);

  for (const meeting of meetings) {
    assert.ok(households.some((household) => household.id === meeting.householdId));
  }
  for (const task of tasks) {
    assert.ok(households.some((household) => household.id === task.householdId));
  }
});

test("selectors filter and resolve related records", () => {
  assert.equal(getMeetingsForHousehold(meetings, "household-patel").length, 1);
  assert.equal(getTasksForHousehold(tasks, "household-patel").length, 2);
  assert.equal(getOpenTasks(tasks)[0]?.id, "task-patel-follow-up");
  assert.equal(getHouseholdName(households, "household-chen"), "Chen household");
});

test("selectors handle empty lists and missing references safely", () => {
  assert.deepEqual(getUpcomingMeetings([], referenceDate), []);
  assert.deepEqual(getOpenTasks([]), []);
  assert.deepEqual(getMeetingsForHousehold(meetings, "missing-household"), []);
  assert.deepEqual(getTasksForHousehold(tasks, "missing-household"), []);
  assert.equal(getHouseholdName([], "missing-household"), "Unknown household");
});

test("reference date controls what counts as upcoming", () => {
  assert.equal(
    getUpcomingMeetings(meetings, "2026-10-24T00:00:00.000Z").length,
    0,
  );
});
