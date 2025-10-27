export function normalizeEventDates(events) {
  if (!events || events.length === 0) return [];

  function getEventTypeAndCleanDesc(event) {
    const description = (event.description || "").toLowerCase();
    const summary = (event.summary || "").toLowerCase();
    let eventType = "Unset Event";
    let cleanDesc = event.description || "";

    const content = `${description} ${summary}`;

    const rules = [
      { keyword: "general meeting", type: "General Meeting" },
      { keyword: "board meeting", type: "Board Meetings" },
      { keyword: "fundraiser", type: "Fundraiser" },
      { keyword: "fundraising", type: "Fundraiser" },
      { keyword: "conference", type: "Conference" },
      { keyword: "summit", type: "Conference" },
      { keyword: "special event", type: "Special Event" },
      { keyword: "celebration", type: "Special Event" },
    ];

    for (const rule of rules) {
      if (content.includes(rule.keyword)) {
        eventType = rule.type;

        break;
      }
    }

    return { eventType, cleanDesc: cleanDesc };
  }

  return events.map((event) => {
    if (!event.start) return { date: "", summary: event.summary || "Untitled" };

    const startDate = new Date(event.start.dateTime || event.start.date);
    const endDate =
      event.end?.dateTime || event.end?.date
        ? new Date(event.end.dateTime || event.end.date)
        : null;

    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, "0");
    const day = String(startDate.getDate()).padStart(2, "0");
    const isoDate = `${year}-${month}-${day}`;

    const startMonth = startDate.toLocaleDateString("en-US", {
      month: "short",
    });
    const startDay = startDate.getDate();
    let formattedDate;

    if (
      endDate &&
      (endDate.getFullYear() !== startDate.getFullYear() ||
        endDate.getMonth() !== startDate.getMonth() ||
        endDate.getDate() !== startDate.getDate())
    ) {
      const endMonth = endDate.toLocaleDateString("en-US", { month: "short" });
      const endDay = endDate.getDate();

      if (startMonth === endMonth) {
        formattedDate = `${startMonth} ${startDay}-${endDay}`;
      } else {
        formattedDate = `${startMonth} ${startDay}-${endMonth} ${endDay}`;
      }
    } else {
      formattedDate = `${startMonth} ${startDay}`;
    }

    const shortenedSummary =
      event.summary.length > 14
        ? event.summary.substring(0, 7) + "..."
        : event.summary;

    const { eventType, cleanDesc } = getEventTypeAndCleanDesc(event);

    return {
      date: event.start.date? event.start.date : isoDate,
      formattedDate,
      summary: event.summary || "Untitled",
      shortenedSummary: shortenedSummary,
      // allDay: event.start.date ? true : false,
      time: event.start.dateTime
        ? startDate.toLocaleTimeString([], { hour: "numeric", hour12: true })
        : null,
      end: event.end.dateTime
        ? endDate.toLocaleTimeString([], { hour: "numeric", hour12: true })
        : null,
      startTime: event.start.dateTime
        ? startDate.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        : null,
      endTime: event.end.dateTime
        ? endDate.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        : null,
      location: event.location || "No location provided",
      desc: cleanDesc,
      type: eventType,
    };
  });
}