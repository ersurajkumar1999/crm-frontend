export const CalculateDateTime = (value) => {
    // const updatedAtDate = new Date(updatedAt);
    // const currentTime = new Date();

    // const timeDifference = currentTime - updatedAtDate;

    // // Convert milliseconds to seconds
    // let seconds = Math.floor(timeDifference / 1000);

    // // Calculate years
    // const years = Math.floor(seconds / (3600 * 24 * 365));
    // seconds -= years * 3600 * 24 * 365;

    // // Calculate months
    // const months = Math.floor(seconds / (3600 * 24 * 30.44));
    // seconds -= months * 3600 * 24 * 30.44;

    // // Calculate weeks
    // const weeks = Math.floor(seconds / (3600 * 24 * 7));
    // seconds -= weeks * 3600 * 24 * 7;

    // // Calculate days
    // const days = Math.floor(seconds / (3600 * 24));
    // seconds -= days * 3600 * 24;

    // // Calculate hours
    // const hours = Math.floor(seconds / 3600);
    // seconds -= hours * 3600;

    // // Calculate minutes
    // const minutes = Math.floor(seconds / 60);
    // seconds -= minutes * 60;

    // // Output the result
    // const time = `${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    const seconds = Math.floor((new Date() - new Date(value)) / 1000);

    if (seconds < 30) {
        return 'Just now';
    }

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    let counter;
    for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
            return counter === 1 ? `${counter} ${i} ago` : `${counter} ${i}s ago`;
        }
    }

    return value;
}