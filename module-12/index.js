function calculate() {
    let userinput = {
        date: document.getElementById("date").value,
        month: document.getElementById("month").value,
        year: document.getElementById("year").value
    }
    if (validates(userinput)) {
        let todaysdate = {
            date: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        }
        let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if (userinput.date > todaysdate.date) {
            todaysdate.date = todaysdate.date + months[userinput.month - 1]
            todaysdate.month--

        }
        if (userinput.month > todaysdate.month) {
            todaysdate.month = todaysdate.month + 12
            todaysdate.year--

        }
        let noofdays = todaysdate.date - userinput.date
        let noofmonths = todaysdate.month - userinput.month
        let noofyears = todaysdate.year - userinput.year

        showmsg(`your age is ${noofyears}, month is ${noofmonths} ,and days ${noofdays}`)

    }
    else {
        console.log("not validated")
    }
}

function validates(userinput) {
    if (userinput.date == null || userinput.date == "") {
        showmsg("please provide date")
        return false
    }
    if (userinput.month == null || userinput.month == "") {
        showmsg("please provide month")
        return false
    }
    if (userinput.year == null || userinput.year == "") {
        showmsg("please provide year")
        return false
    }
    if (parseInt(userinput.month > 12)) {
        showmsg("please provide month value at the range of 1 to 12")
        return false
    }
    if (userinput.year.length < 4) {
        showmsg("please provide year in formate of YYYY")
        return false
    }
    if (isNaN(userinput.date)) {
        showmsg("please provide valid date")
        return false
    }
    if (isNaN(userinput.month)) {
        showmsg("please provide valid month")
        return false
    }
    if (isNaN(userinput.year)) {
        showmsg("please provide valid year ")
        return false
    }
    if (userinput.date <= 0) {
        showmsg("Date cannot be 0 or less than 0")
        return false
    }
    if (userinput.month <= 0) {
        showmsg("month cannot be 0 or less than 0")
        return false
    }
    if (userinput.year <= 0) {
        showmsg("year cannot be 0 or less than 0")
        return false
    }
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (parseInt(userinput.date) > months[parseInt(userinput.month) - 1]) {
        showmsg("please provide valid date with respect to month")
        return false
    }

    return true

}

function showmsg(msg) {
    let ele = document.querySelector("#display");
    ele.innerText = msg;
}