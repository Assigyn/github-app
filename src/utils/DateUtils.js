function getReadableDateDiff(dateStr, referenceDate = null) {
    if (null === dateStr) {
        return null;
    }

    if (null === referenceDate) {
        referenceDate = new Date();
    }

    const targetDate = new Date(dateStr);
    const diffMs = referenceDate - targetDate;
    let result = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let minutesDiff = Math.floor(diffMs / (1000 * 60));
    let value;

    if (result > 365) {
        value = Math.round(result / 365);

        return {
            value: value,
            unit: value > 1 ? 'years' : 'year'
        }
    }

    if (result > 30.5) {
        value = Math.round(result / 30.5);

        return {
            value: value,
            unit: value > 1 ? 'months' : 'month'
        }
    }

    if (result <= 0) {
        if (minutesDiff >= 60) {
            value = Math.round(minutesDiff / 60);

            return {
                value: value,
                unit: value > 1 ? 'hours' : 'hour'
            }
        }

        return {
            value: minutesDiff,
            unit: minutesDiff > 1 ? 'minutes' : 'minute'
        };
    }

    return {
        value: result,
        unit: result > 1 ? 'days' : 'day'
    };
}

export default getReadableDateDiff;