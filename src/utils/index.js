function formatDateDescription(dateString) {
    if (!dateString) {
        return 'Less than a month ago';
    }

    const today = new Date();
    const date = new Date(dateString);

    // Check if the input date is valid
    if (isNaN(date)) {
        return 'Invalid date format';
    }

    // Get the time difference in milliseconds
    const timeDifference = today.getTime() - date.getTime();
    const secondsDifference = timeDifference / 1000;
    const minutesDifference = secondsDifference / 60;
    const hoursDifference = minutesDifference / 60;
    const daysDifference = hoursDifference / 24;
    const weeksDifference = daysDifference / 7;
    const monthsDifference = daysDifference / 30;

    if (timeDifference < 0) {
        return 'Invalid date (in the future)';
    } else if (secondsDifference < 60) {
        return formatTimeDifference(secondsDifference, 'second');
    } else if (minutesDifference < 60) {
        return formatTimeDifference(minutesDifference, 'minute');
    } else if (hoursDifference < 24) {
        return formatTimeDifference(hoursDifference, 'hour');
    } else if (daysDifference < 7) {
        return formatTimeDifference(daysDifference, 'day');
    } else if (weeksDifference < 4) {
        return formatTimeDifference(weeksDifference, 'week');
    } else {
        return formatTimeDifference(monthsDifference, 'month');
    }
}

function formatTimeDifference(timeValue, unit) {
    const roundedValue = Math.floor(timeValue);
    const pluralSuffix = roundedValue === 1 ? '' : 's';
    return `${roundedValue} ${unit}${pluralSuffix} ago`;
}

export default formatDateDescription;
