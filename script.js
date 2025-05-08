document.addEventListener('DOMContentLoaded', () => {
	// Data object matching the provided data.json format
	const data = [
		{
			"title": "Work",
			"timeframes": {
				"daily": {
					"current": 5,
					"previous": 7
				},
				"weekly": {
					"current": 32,
					"previous": 36
				},
				"monthly": {
					"current": 103,
					"previous": 128
				}
			}
		},
		{
			"title": "Play",
			"timeframes": {
				"daily": {
					"current": 1,
					"previous": 2
				},
				"weekly": {
					"current": 10,
					"previous": 8
				},
				"monthly": {
					"current": 23,
					"previous": 29
				}
			}
		},
		{
			"title": "Study",
			"timeframes": {
				"daily": {
					"current": 0,
					"previous": 1
				},
				"weekly": {
					"current": 4,
					"previous": 7
				},
				"monthly": {
					"current": 13,
					"previous": 19
				}
			}
		},
		{
			"title": "Exercise",
			"timeframes": {
				"daily": {
					"current": 1,
					"previous": 1
				},
				"weekly": {
					"current": 4,
					"previous": 5
				},
				"monthly": {
					"current": 11,
					"previous": 18
				}
			}
		},
		{
			"title": "Social",
			"timeframes": {
				"daily": {
					"current": 1,
					"previous": 3
				},
				"weekly": {
					"current": 5,
					"previous": 10
				},
				"monthly": {
					"current": 21,
					"previous": 23
				}
			}
		},
		{
			"title": "Self Care",
			"timeframes": {
				"daily": {
					"current": 0,
					"previous": 1
				},
				"weekly": {
					"current": 2,
					"previous": 2
				},
				"monthly": {
					"current": 7,
					"previous": 11
				}
			}
		}
	];

	// Elements
	const periodBtns = document.querySelectorAll('.period-btn');

	// Set active time period and update data
	function setActivePeriod(period) {
		// Update active button
		periodBtns.forEach(btn => {
			if (btn.dataset.period === period) {
				btn.classList.add('active');
			} else {
				btn.classList.remove('active');
			}
		});

		// Update time data for each activity card
		data.forEach(activity => {
			const title = activity.title.toLowerCase().replace(' ', '-');
			const card = document.querySelector(`.activity-card.${title}`);

			if (!card) return;

			const currentTimeEl = card.querySelector('.current-time');
			const previousTimeEl = card.querySelector('.previous-time');

			const currentTime = activity.timeframes[period].current;
			const previousTime = activity.timeframes[period].previous;

			// Update the text content
			currentTimeEl.textContent = `${currentTime}hrs`;

			let timeLabel = '';
			switch (period) {
				case 'daily':
					timeLabel = 'Yesterday';
					break;
				case 'weekly':
					timeLabel = 'Last Week';
					break;
				case 'monthly':
					timeLabel = 'Last Month';
					break;
			}

			previousTimeEl.textContent = `${timeLabel} - ${previousTime}hrs`;
		});
	}

	// Event listeners for period buttons
	periodBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			const period = btn.dataset.period;
			setActivePeriod(period);
		});
	});

	// Initialize with weekly data (as shown in the design)
	setActivePeriod('weekly');
});