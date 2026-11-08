class Timesheet {
	timesheets = new Map()

	submitTimesheet(projectName, hours) {
		if (this.timesheets.has(projectName)) {
			hours += this.timesheets.get(projectName)
		}
		this.timesheets.set(projectName, hours)
		return true
	}

	getTimesheets() {
		return [...this.timesheets.values()]
	}

	getTotalTimesheetHours(projectName) {
		return this.timesheets.get(projectName)
	}
}

module.exports = Timesheet
