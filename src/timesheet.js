class Timesheet {
	timesheets = new Map()

	submitTimesheet(projectName, hours) {
		if (typeof projectName !== "string" || projectName.trim() === "") {
			throw new TypeError("Project name must be a non-empty string")
		}
		if (typeof hours !== "number" || !Number.isFinite(hours)) {
			throw new TypeError("Hours must be a finite number")
		}
		if (hours < 0) {
			throw new RangeError("Hours must be non-negative")
		}

		const normalizedProjectName = projectName.trim().toLowerCase()
		const totalHours = (this.timesheets.get(normalizedProjectName) ?? 0) + hours
		if (!Number.isFinite(totalHours)) {
			throw new RangeError("Total hours must be finite")
		}
		this.timesheets.set(normalizedProjectName, totalHours)
		return true
	}

	getTimesheets() {
		return [...this.timesheets.values()]
	}

	getTotalTimesheetHours(projectName) {
		if (typeof projectName !== "string") {
			return undefined
		}
		return this.timesheets.get(projectName.trim().toLowerCase())
	}
}

module.exports = Timesheet
