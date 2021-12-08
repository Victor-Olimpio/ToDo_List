let textHour = document.querySelector('.task-title');

const currentData = () => {
    const nowTime = new Date();
    let currentDay = nowTime.getDate();
    let currentMonth = nowTime.getMonth() + 1;
    let currentYears = nowTime.getFullYear();

    if (currentDay < 10) {
        textHour.innerHTML = `0${currentDay}/${currentMonth}/${currentYears}`;
    } else {
        textHour.innerHTML = `${currentDat}/${currentMonth}/${currentYears}`;
    }
}

currentData();