import type { Advisor, Household, Meeting, Task } from "./types";

export const referenceDate = "2026-10-19T09:00:00.000Z";

export const advisor: Advisor = {
  id: "advisor-alex-morgan",
  name: "Alex Morgan",
  role: "Lead financial advisor",
};

export const households: Household[] = [
  { id: "household-patel", name: "Patel household", members: 3 },
  { id: "household-chen", name: "Chen household", members: 2 },
  { id: "household-rivera", name: "Rivera household", members: 4 },
];

export const meetings: Meeting[] = [
  {
    id: "meeting-patel-oct-20",
    householdId: "household-patel",
    title: "Quarterly planning conversation",
    startsAt: "2026-10-20T16:00:00.000Z",
    status: "scheduled",
  },
  {
    id: "meeting-rivera-oct-23",
    householdId: "household-rivera",
    title: "Annual review",
    startsAt: "2026-10-23T18:30:00.000Z",
    status: "scheduled",
  },
];

export const tasks: Task[] = [
  {
    id: "task-patel-follow-up",
    householdId: "household-patel",
    title: "Send planning conversation recap",
    dueDate: "2026-10-20",
    status: "open",
    priority: "high",
  },
  {
    id: "task-chen-document-check",
    householdId: "household-chen",
    title: "Confirm document checklist",
    dueDate: "2026-10-22",
    status: "open",
    priority: "medium",
  },
  {
    id: "task-rivera-review-prep",
    householdId: "household-rivera",
    title: "Prepare annual review notes",
    dueDate: "2026-10-23",
    status: "open",
    priority: "medium",
  },
  {
    id: "task-patel-welcome",
    householdId: "household-patel",
    title: "Send welcome note",
    dueDate: "2026-10-15",
    status: "completed",
    priority: "low",
  },
];
