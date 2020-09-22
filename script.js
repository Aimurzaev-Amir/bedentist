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

for (var i = 0; i < navLink.length; i++) {
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
  var positionInfo = messageWindow.getBoundingClientRect();
  var height = positionInfo.height;
  var width = positionInfo.width;
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

let registrationCalendar = document.querySelector(".registrationCalendar");
// registrationCalendar.style.display = "block";
var positionInfo = registrationCalendar.getBoundingClientRect();
var height = positionInfo.height;
var width = positionInfo.width;
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

// calendar settings
//set current date month year
let currentDate = document.getElementById("currentDate");
let currentMonthDay = new Date().getDate();
currentDate.innerHTML = currentMonthDay;

let currentYear = document.getElementById("currentYear");
let currentYearDate = new Date().getFullYear();
currentYear.innerHTML = currentYearDate;

let currentMonth = document.getElementById("currentMonth");
let currentMonthNumberDate = new Date().getMonth() + 1;
let currentMonthDate;
if (currentMonthNumberDate === 1) {
  currentMonthDate = "January";
} else if (currentMonthNumberDate === 2) {
  currentMonthDate = "February";
} else if (currentMonthNumberDate === 3) {
  currentMonthDate = "March";
} else if (currentMonthNumberDate === 4) {
  currentMonthDate = "April";
} else if (currentMonthNumberDate === 5) {
  currentMonthDate = "May";
} else if (currentMonthNumberDate === 6) {
  currentMonthDate = "June";
} else if (currentMonthNumberDate === 7) {
  currentMonthDate = "July";
} else if (currentMonthNumberDate === 8) {
  currentMonthDate = "August";
} else if (currentMonthNumberDate === 9) {
  currentMonthDate = "September";
} else if (currentMonthNumberDate === 10) {
  currentMonthDate = "October";
} else if (currentMonthNumberDate === 11) {
  currentMonthDate = "November";
} else if (currentMonthNumberDate === 12) {
  currentMonthDate = "December";
}
currentMonth.innerHTML = currentMonthDate;

// set current month days by weeks
let monthDays = document.getElementById("monthDays");
let monthName = document.getElementById("monthName");
let arr = [];
monthName.addEventListener("change", function () {
  arr = [];
  let month = monthName.value;
  let year = new Date().getFullYear();
  let dayOfWeek = new Date(month + "1," + year).getDay();
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
  let fullLastDateArray = new Date(year, numberMonth + 1, 0).toString().split(" ");
  for (let i = 1; i <= fullLastDateArray[2]; i++) {
    arr.push(i);
  }
  if (dayOfWeek === 2) {
    arr.unshift(0);
  } else if (dayOfWeek === 3) {
    console.log("3");
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
  monthDays.innerHTML = "";
  arr.forEach((day) => {
    let newP = document.createElement("p");
    if (day === 0) {
      newP.innerHTML = "";
    } else {
      newP.innerHTML = day;
    }
    monthDays.appendChild(newP);
  });
});
