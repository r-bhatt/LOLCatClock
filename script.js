let clock = document.querySelector('.curr-time');
let imageWindow = document.querySelector('.time-img');
let statusWindow = document.querySelector('.statusWindow');

let morning_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR53ObeS6bgiGNzvWHtk-1w5LpQMmGc1q2afkcDt6RoqgXZwucE';
let noon_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3CftZycnmZd4HBMaHpJxE-49cSyVlYUBNK29OfVy-BpYUhSbL';
let night_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAGY3FYkIvXfjE4MIm8j-o5qMISyadscHodE43NsCKcPUXu5Wp';

let breakfast_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwZrBeZ6NP-1zCd4oJB5qf9nRxKzA0k5Ji38Bse5BkeqEN_Wy8';
let lunch_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkkbZIC35Jenz3gLXUxIhp9VWdTQ349DHYbKTPjSZHYLmWyJTy'
let nap_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaLU5vn5NwOWLgQ_fCYgo5kE2NQElJvUvNWuZUfZPK5CzeYBD3';

let party_img = 'https://img.izismile.com/img/img5/20120313/640/animals_having_party_640_15.jpg';

let partyBtn = document.querySelector('#partyBtn');
let partyToken = 0;

setInterval(updateTime, 1000);

function updateTime() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    const currentHour = now.getHours();

    const wakeUpTime = document.querySelector('#wakeUpTime').value;
    const lunchTime = document.querySelector('#lunchTime').value;
    const napTime = document.querySelector('#napTime').value;
    
    if (partyToken){
        current_img = party_img;
        status = "Party Time";
    }else if (currentHour == wakeUpTime) {
        current_img = breakfast_img;
        status = "Wake Up";
    } else if (currentHour == lunchTime) {
        current_img = lunch_img;
        status = "Let's Have some Lunch";
    } else if (currentHour == napTime) {
        current_img = nap_img;
        status = "Sleep Time";
    }else if(currentHour < 12 && currentHour > 6) {
        current_img = morning_img;
        status = "Good Morning";
    } else if (currentHour < 22){
        current_img = noon_img;
        status = "Good Evening";
    } else {
        current_img = night_img;
        status = "Good Night";
    }

    changeDisplay(currentTime,current_img,status);
}

function changeDisplay(currentTime, imageUrl, timeText) {
    clock.innerHTML =  currentTime;  //Displaying the clock
    imageWindow.style.backgroundImage = `url('${imageUrl}')`;    //Displaying the image
    statusWindow.innerText = `"${timeText}"!`;    //Displaying Time status over image
}

partyBtn.addEventListener("click", toggleParty);

function toggleParty() {
    if (!partyToken) {
        partyToken = 1;
        partyBtn.innerText = "Party Over!";
        partyBtn.style.backgroundColor = "red";
    } else {
        partyToken = 0;
        partyBtn.innerText = "Party Time!";
        partyBtn.style.backgroundColor = "midnightblue";
    }
}