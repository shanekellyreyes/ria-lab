import {
  advisor,
  households,
  meetings,
  referenceDate,
  tasks,
} from "@/domain/fixtures";
import {
  getHouseholdCount,
  getHouseholdName,
  getOpenTaskCount,
  getOpenTasks,
  getUpcomingMeetings,
} from "@/domain/selectors";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

export default function Home() {
  const upcomingMeetings = getUpcomingMeetings(meetings, referenceDate);
  const openTasks = getOpenTasks(tasks);
  const metrics = [
    { label: "Households", value: getHouseholdCount(households) },
    { label: "Upcoming meetings", value: upcomingMeetings.length },
    { label: "Open tasks", value: getOpenTaskCount(tasks) },
  ];

  return (
    <main className="min-h-screen bg-[#f4f7f8] text-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        <header className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              RIA Lab
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Good morning, {advisor.name.split(" ")[0]}.
            </h1>
            <p className="mt-2 max-w-2xl text-slate-600">
              A clear view of the households, conversations, and follow-up work
              on your desk.
            </p>
          </div>
          <div className="rounded-2xl border border-teal-100 bg-white px-5 py-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Scenario advisor
            </p>
            <p className="mt-1 font-medium">{advisor.name}</p>
            <p className="text-sm text-slate-500">{advisor.role}</p>
          </div>
        </header>

        <section aria-label="Advisor metrics" className="mt-8 grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl bg-slate-950 p-5 text-white shadow-sm">
              <p className="text-sm text-slate-300">{metric.label}</p>
              <p className="mt-3 text-4xl font-semibold">{metric.value}</p>
            </div>
          ))}
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                  Calendar
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Upcoming meetings</h2>
              </div>
              <p className="text-sm text-slate-500">As of Oct 19, 2026</p>
            </div>
            <div className="mt-6 divide-y divide-slate-100">
              {upcomingMeetings.length > 0 ? (
                upcomingMeetings.map((meeting) => (
                  <article key={meeting.id} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-sm font-bold text-teal-800">
                      {shortDateFormatter.format(new Date(meeting.startsAt)).split(" ")[1]}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold">{meeting.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {getHouseholdName(households, meeting.householdId)} · {dateFormatter.format(new Date(meeting.startsAt))}
                      </p>
                    </div>
                  </article>
                ))
              ) : (
                <p className="py-5 text-slate-500">No upcoming meetings.</p>
              )}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
              Follow-up
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Open tasks</h2>
            <div className="mt-6 space-y-4">
              {openTasks.length > 0 ? (
                openTasks.map((task) => (
                  <article key={task.id} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-medium">{task.title}</h3>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold capitalize text-slate-600">
                        {task.priority}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">
                      {getHouseholdName(households, task.householdId)} · Due {shortDateFormatter.format(new Date(`${task.dueDate}T12:00:00Z`))}
                    </p>
                  </article>
                ))
              ) : (
                <p className="py-5 text-slate-500">No open tasks.</p>
              )}
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-3xl bg-teal-950 p-6 text-white shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-200">
            Your households
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {households.length > 0 ? (
              households.map((household) => (
                <div key={household.id} className="rounded-2xl border border-teal-800 bg-teal-900/60 p-4">
                  <p className="font-semibold">{household.name}</p>
                  <p className="mt-1 text-sm text-teal-200">{household.members} household members</p>
                </div>
              ))
            ) : (
              <p className="text-teal-200">No households yet.</p>
            )}
          </div>
        </section>

        <p className="mt-6 text-center text-xs text-slate-500">
          Fictional scenario data for learning only. No financial advice or real client data.
        </p>
      </div>
    </main>
  );
}
