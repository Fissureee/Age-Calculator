function getValue() {
    var day = document.getElementById("day-input").value;
    var month = document.getElementById("month-input").value;
    var year = document.getElementById("year-input").value;

    var birthDate = new Date(year, month - 1, day); //month is 0-indexed

    var currentDate = new Date();

    const diff = currentDate.getTime() - birthDate.getTime();

    // Convert milliseconds to days
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Calculate the number of years
    const years = Math.floor(days / 365);

    // Calculate the number of months
    const months = Math.floor((days - (years * 365)) / 30.44);

    // Calculate the number of remaining days
    const remainingDays = Math.floor(days - (years * 365) - (months * 30.44));

    var dayResult = document.getElementById("day-result");
    var monthResult = document.getElementById("month-result");
    var yearResult = document.getElementById("year-result");

    dayResult.textContent = remainingDays;
    monthResult.textContent = months;
    yearResult.textContent = years;
}