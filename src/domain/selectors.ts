import type { Household, Meeting, Task } from "./types";

export function getHouseholdCount(households: Household[]): number {
  return households.length;
}

export function getUpcomingMeetings(
  meetings: Meeting[],
  referenceDate: string,
): Meeting[] {
  const referenceTime = Date.parse(referenceDate);

  return meetings
    .filter(
      (meeting) =>
        meeting.status === "scheduled" &&
        Date.parse(meeting.startsAt) > referenceTime,
    )
    .sort((a, b) => Date.parse(a.startsAt) - Date.parse(b.startsAt));
}

export function getOpenTasks(tasks: Task[]): Task[] {
  return tasks
    .filter((task) => task.status === "open")
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate));
}

export function getOpenTaskCount(tasks: Task[]): number {
  return getOpenTasks(tasks).length;
}

export function getMeetingsForHousehold(
  meetings: Meeting[],
  householdId: string,
): Meeting[] {
  return meetings.filter((meeting) => meeting.householdId === householdId);
}

export function getTasksForHousehold(
  tasks: Task[],
  householdId: string,
): Task[] {
  return tasks.filter((task) => task.householdId === householdId);
}

export function getHouseholdName(
  households: Household[],
  householdId: string,
): string {
  return (
    households.find((household) => household.id === householdId)?.name ??
    "Unknown household"
  );
}
