**Accuracy**

1. **How should time that isn't a half-hour multiple be handled? (Act on now)** - The features say time is tracked in half-hour units but don't say what happens when someone works 40 minutes. Is it rounded up, rounded down, rounded to nearest, or rejected? Each choice changes how accurate the project history is.

2. **What are the minimum and maximum amounts of time that can be entered? (Act on now)** - Can a user enter 0 hours, or more than 24 hours in one day? Without limits, impossible entries could make the history inaccurate.

3. **When is time entered: per day, per week, or per timesheet period? (Act on now)** - "Complete a timesheet" suggests a period, but its length isn't defined. Does an entry need a date, and can time be logged for future or past dates?

4. **Who creates and maintains the list of projects? (Act on now)** - Users track time "against specific projects," but it's unclear whether they pick from a fixed list or type free text. Free text could split one project's history into several (e.g., "Proj A" vs. "Project A").

5. **Can tracked time be edited or deleted after a timesheet is completed? (Act on now)** - The goal is to keep a history. If entries can be changed freely, how do we make sure that history stays accurate? Is there an audit trail?

**Consistency**

6. **Who exactly is excluded by "only I should be able to see my tracked time"? (Rule out)** - Does this include managers, admins, payroll, or project owners? This may conflict with typical business needs, such as reporting time per project across the team.

7. **How is time displayed throughout the system? (Act on now)** - Is it shown as 0.5 hours, 30 minutes, or 0:30? It should be the same in entry forms, timesheet views, totals, and history reports.

8. **What is the difference between "tracking" time and "completing" a timesheet? (Shelve for later)** - Can a user save a partial entry, such as time with no project yet, as a draft? Or is anything without a project and time rejected outright? The two terms need to be used the same way throughout.

9. **Can one timesheet contain time for several projects, and can entries overlap? (Act on now)** - If two entries cover the same period for different projects, is that allowed or flagged as a conflict? The rules should be the same for single-project and multi-project timesheets.

10. **Where can users enter and view time, and are the results the same everywhere? (Rule out)** - If entry is possible on web, mobile, or across time zones, will the same entry show the same date, duration, and totals on every platform?
