export type TaskStatus = "open" | "completed";
export type TaskPriority = "low" | "medium" | "high";
export type MeetingStatus = "scheduled" | "completed" | "cancelled";

export type Advisor = {
  id: string;
  name: string;
  role: string;
};

export type Household = {
  id: string;
  name: string;
  members: number;
};

export type Meeting = {
  id: string;
  householdId: string;
  title: string;
  startsAt: string;
  status: MeetingStatus;
};

export type Task = {
  id: string;
  householdId: string;
  title: string;
  dueDate: string;
  status: TaskStatus;
  priority: TaskPriority;
};
