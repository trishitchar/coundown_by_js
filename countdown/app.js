const endDate = "10 April 2023 00:00 AM";

document.getElementById("end_date").innerHTML=endDate;

const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    console.log(diff);

    if(diff<0) return;
    console.log(Math.floor(diff));
    inputs[0].value = Math.floor(diff/86400);
    inputs[1].value = Math.floor((diff% 86400)/3600);
    // inputs[2].value = Math.floor(((diff/ 60)%60));
    inputs[2].value = Math.floor(((diff% 86400)%3600)/60);
    inputs[3].value = Math.floor((diff% 60));
}

clock();