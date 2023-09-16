
// Get days in year
function getDaysInYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366;
    } else {
        return 365;
    }
}

console.log(getDaysInYear(2021));
console.log(getDaysInYear(2020)); 





// Get day of a year
function getDayNumber(dateString) {
    const date = new Date(dateString);
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const differenceInMs = date - startOfYear;
    const dayOfYear = Math.floor(differenceInMs / (24 * 60 * 60 * 1000)) + 1;
    return dayOfYear;
}

console.log(getDayNumber("2023-01-12")); 
console.log(getDayNumber("2023-02-26"));







// Get fiscal quarters
function getQuarters(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth();

    if (month < 3) {
        return "Feb 26 is I quarter";
    } else if (month < 6) {
        return "Apr 26 is II quarter";
    } else if (month < 9) {
        return "Jul 26 is III quarter";
    } else {
        return "Oct 26 is IV quarter";
    }
}

console.log(getQuarters("2023-02-26"));