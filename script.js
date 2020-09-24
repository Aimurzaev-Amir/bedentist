// Setting the viewport height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
// on viewport height change
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// mobile main menu
let burger = document.getElementById("burger");
let nav = document.getElementById("main-nav");
let body = document.querySelector("body");
let navLink = document.getElementsByClassName("navLink");

burger.addEventListener("click", function (e) {
  this.classList.toggle("is-open");
  nav.classList.toggle("is-open");
  body.classList.toggle("bodyFixed");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function (e) {
    body.classList.remove("bodyFixed");
    burger.classList.remove("is-open");
    nav.classList.remove("is-open");
  });
}

let doneImage = document.getElementById("doneImage");
let send = document.getElementById("send");
let loading = document.getElementById("loading");
let messageSend = document.querySelector(".messageSend");

send.addEventListener("click", function (e) {
  e.preventDefault();
  messageSend.style.display = "block";
  centerPosition(".messageWindow");
  let messageWindow = document.querySelector(".messageWindow");
  let positionInfo = messageWindow.getBoundingClientRect();
  let height = positionInfo.height;
  let width = positionInfo.width;
  // Setting the viewport height
  let halfvh = (window.innerHeight / 2 - height / 2) * 0.01;
  let halfvw = (window.innerWidth / 2 - width / 2) * 0.01;
  document.documentElement.style.setProperty("--halfvw", `${halfvw}px`);
  document.documentElement.style.setProperty("--halfvh", `${halfvh}px`);
  // on viewport height change
  window.addEventListener("resize", () => {
    let halfvh = (window.innerHeight / 2 - height / 2) * 0.01;
    let halfvw = (window.innerWidth / 2 - width / 2) * 0.01;
    document.documentElement.style.setProperty("--halfvw", `${halfvw}px`);
    document.documentElement.style.setProperty("--halfvh", `${halfvh}px`);
  });
  setTimeout(function () {
    doneImage.style.display = "block";
    loading.style.display = "none";
    document.getElementById("registration-form").reset();
    setTimeout(function () {
      messageSend.style.display = "none";
    }, 1000);
  }, 2000);
});

// CALENDAR MEETING SETTINGS

// calendar window positioning
let registrationCalendar = document.querySelector(".registrationCalendar");
// registrationCalendar.style.display = "block";
let positionInfo = registrationCalendar.getBoundingClientRect();
let height = positionInfo.height;
let width = positionInfo.width;
// Setting the viewport height
let halfCvh = (window.innerHeight / 2 - height / 2) * 0.01;
let halfCvw = (window.innerWidth / 2 - width / 2) * 0.01;
document.documentElement.style.setProperty("--halfCvw", `${halfCvw}px`);
document.documentElement.style.setProperty("--halfCvh", `${halfCvh}px`);
// on viewport height change
window.addEventListener("resize", () => {
  let halfCvh = (window.innerHeight / 2 - height / 2) * 0.01;
  let halfCvw = (window.innerWidth / 2 - width / 2) * 0.01;
  document.documentElement.style.setProperty("--halfCvw", `${halfCvw}px`);
  document.documentElement.style.setProperty("--halfCvh", `${halfCvh}px`);
});

//get current date and set
let getCalendarDates = document.querySelector(".getCalendarDates");
let currentDate = document.getElementById("currentDate");
let currentMonthDay = new Date().getDate();
currentDate.innerHTML = currentMonthDay;
// get current year and set
let currentYear = document.getElementById("currentYear");
let currentYearDate = new Date().getFullYear();
currentYear.innerHTML = currentYearDate;
// get current month
let currentMonth = document.getElementById("currentMonth");
let currentMonthNumberDate = new Date().getMonth() + 1;
let currentMonthDate;

// converting month numver to month name
if (currentMonthNumberDate === 1) {
  currentMonthDate = "Январь";
} else if (currentMonthNumberDate === 2) {
  currentMonthDate = "Февраль";
} else if (currentMonthNumberDate === 3) {
  currentMonthDate = "Март";
} else if (currentMonthNumberDate === 4) {
  currentMonthDate = "Апрель";
} else if (currentMonthNumberDate === 5) {
  currentMonthDate = "Май";
} else if (currentMonthNumberDate === 6) {
  currentMonthDate = "Июнь";
} else if (currentMonthNumberDate === 7) {
  currentMonthDate = "Июль";
} else if (currentMonthNumberDate === 8) {
  currentMonthDate = "Август";
} else if (currentMonthNumberDate === 9) {
  currentMonthDate = "Сентябрь";
} else if (currentMonthNumberDate === 10) {
  currentMonthDate = "Октябрь";
} else if (currentMonthNumberDate === 11) {
  currentMonthDate = "Ноябрь";
} else if (currentMonthNumberDate === 12) {
  currentMonthDate = "Декабрь";
}
// set month name
currentMonth.innerHTML = currentMonthDate;

// set current month days by weeks
let monthDays = document.getElementById("monthDays");
let monthName = document.getElementById("monthName");
let arr = [];

// on change month select element
monthName.addEventListener("change", function () {
  arr = [];
  let month = monthName.value;
  let year = new Date().getFullYear();
  let dayOfWeek = new Date(month + "1," + year).getDay();

  // convert moth name to number
  let numberMonth;
  if (month === "January") {
    numberMonth = 0;
  }
  if (month === "February") {
    numberMonth = 1;
  }
  if (month === "March") {
    numberMonth = 2;
  }
  if (month === "April") {
    numberMonth = 3;
  }
  if (month === "May") {
    numberMonth = 4;
  }
  if (month === "June") {
    numberMonth = 5;
  }
  if (month === "July") {
    numberMonth = 6;
  }
  if (month === "August") {
    numberMonth = 7;
  }
  if (month === "September") {
    numberMonth = 8;
  }
  if (month === "October") {
    numberMonth = 9;
  }
  if (month === "November") {
    numberMonth = 10;
  }
  if (month === "December") {
    numberMonth = 11;
  }

  // change month on select changing
  currentMonth.innerHTML = monthName.options[monthName.selectedIndex].text;

  // get last day of month
  let fullLastDateArray = new Date(year, numberMonth + 1, 0).toString().split(" ");
  for (let i = 1; i <= fullLastDateArray[2]; i++) {
    arr.push(i);
  }

  // set beginning of the week from correct week day
  if (dayOfWeek === 2) {
    arr.unshift(0);
  } else if (dayOfWeek === 3) {
    arr.unshift(0, 0);
  } else if (dayOfWeek === 4) {
    arr.unshift(0, 0, 0);
  } else if (dayOfWeek === 5) {
    arr.unshift(0, 0, 0, 0);
  } else if (dayOfWeek === 6) {
    arr.unshift(0, 0, 0, 0, 0);
  } else if (dayOfWeek === 0) {
    arr.unshift(0, 0, 0, 0, 0, 0);
  }

  // clear month days before set new month days
  monthDays.innerHTML = "";

  //create for each day block and paragraph
  arr.forEach((day) => {
    let newP = document.createElement("div");
    newP.classList.add("monthDayBlock");
    let dayNum = document.createAttribute("dayNum");
    dayNum.value = day;
    newP.setAttributeNode(dayNum);
    if (day === 0) {
      newP.innerHTML = "";
    } else {
      newP.innerHTML = `<p class="day">${day}</p>`;
    }
    monthDays.appendChild(newP);
    let clickedDay;
    let chosenDate = document.querySelector(".chosenDate");
    let chosenDoc = document.querySelector(".chosenDoc");
    let docName = document.getElementById("docName");

    // on day number click action
    newP.addEventListener("click", function (e) {
      if (
        e.currentTarget.innerText !== "" &&
        docName.options[docName.selectedIndex].text !== "Выберите стоматолога"
      ) {
        clickedDay = e.currentTarget.innerText;
        currentDate.innerHTML = e.currentTarget.innerText;
        let selectedDay = document.getElementsByClassName("selectedDay");
        for (let i = 0; i < selectedDay.length; i++) {
          selectedDay[i].classList.remove("selectedDay");
        }
        newP.classList.add("selectedDay");
        getCalendarDates.removeAttribute("disabled");
        chosenDate.innerHTML =
          e.currentTarget.innerText + " " + monthName.options[monthName.selectedIndex].text;
        chosenDoc.innerHTML = docName.options[docName.selectedIndex].text;
      } else {
        let popup = document.querySelector(".popup");
        popup.style.display = "block";
        setTimeout(function () {
          popup.style.display = "none";
        }, 1000);
      }
    });
  });
});

let calendarDates = document.querySelector(".calendarDates");
let meetingTimeTable = document.querySelector(".meetingTimeTable");
let getBack = document.querySelector(".getBack");
// go button to the next page (day timetable)
getCalendarDates.addEventListener("click", function () {
  calendarDates.style.display = "none";
  meetingTimeTable.style.display = "block";
});

// second page (day timetable) get back button
getBack.addEventListener("click", function () {
  calendarDates.style.display = "block";
  meetingTimeTable.style.display = "none";
});

const timeArr = [
  {
    hour: "9:00",
  },
  {
    hour: "10:00",
  },
  {
    hour: "11:00",
  },
  {
    hour: "12:00",
  },
  {
    hour: "13:00",
  },
  {
    hour: "14:00",
  },
  {
    hour: "15:00",
  },
  {
    hour: "16:00",
  },
  {
    hour: "17:00",
  },
];

const usersArr = [
  {
    time: "12:00",
    name: "Амир",
    goal: "Чистка зубов",
  },
  {
    time: "15:00",
    name: "Амир",
    goal: "Чистка зубов",
  },
  {
    time: "9:00",
    name: "Амир",
    goal: "Чистка зубов",
  },
  {
    time: "17:00",
    name: "Амир",
    goal: "Чистка зубов",
  },
];

let usersTimetable = document.querySelector(".usersTimetable");
let timetable = () => {
  timeArr.map((time) => {
    let userTimeBlock = document.createElement("div");
    let userTimeButton = document.createElement("button");
    userTimeButton.innerHTML = time.hour;
    userTimeButton.classList.add("usersTimetableBlock");
    usersTimetable.appendChild(userTimeBlock);
    userTimeBlock.appendChild(userTimeButton);
  });
  usersArr.map((user) => {
    let usersTimetableBlocks = document.querySelectorAll(".usersTimetableBlock");
    for (let i = 0; i < usersTimetableBlocks.length; i++) {
      if (usersTimetableBlocks[i].innerText === user.time) {
        usersTimetableBlocks[i].classList.add("userClosedTime");
        usersTimetableBlocks[i].setAttribute("disabled", "disabled");
        // usersTimetableBlocks[i].style.cursor =
      }
    }
  });
};

timetable();

let clickedTime;
let usersTimetableBlocks = document.querySelectorAll(".usersTimetableBlock");

for (let i = 0; i < usersTimetableBlocks.length; i++) {
  usersTimetableBlocks[i].addEventListener("click", function (e) {
    clickedTime = e.currentTarget.innerHTML;
  });
}
