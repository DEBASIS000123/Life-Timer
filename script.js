const settingsicon=document.querySelector(".settings i");
const settingcontent=document.querySelector(".settings-content");
const initial=document.querySelector("#initial");
const final=document.querySelector("#final");
const settingbtn=document.getElementById("date-button");
const settinginput=document.getElementById("date-input");


const yearele=document.getElementById("year");
const monthele=document.getElementById("month");
const dayele=document.getElementById("day");
const hourele=document.getElementById("hour");
const minuteele=document.getElementById("minute");
const secondele=document.getElementById("second");

let isDOBopen=false;
let dateofbirth;

settingsicon.addEventListener("click",()=>{
    if(isDOBopen){
        settingcontent.classList.add("Hide");
    }
    else{
        settingcontent.classList.remove("Hide");
    }
    isDOBopen=!isDOBopen;
});

settingbtn.addEventListener("click",()=>{
    const datestring=settinginput.value;
    dateofbirth=new Date(datestring);

    if(dateofbirth){
        initial.classList.add("Hide");
        final.classList.remove("Hide");
        setInterval(()=>{
            updateage();
        },1000);
    }
    
});

const updateage=()=>{
    const curdate=new Date();
    const datediff=curdate-dateofbirth;
    const year=Math.floor(datediff/(1000*60*60*24*365));
    const month=Math.floor(datediff/(1000*60*60*24*365))%12;
    const day=Math.floor(datediff/(1000*60*60*24))%30;
    const hour=Math.floor(datediff/(1000*60*60))%24;
    const minute=Math.floor(datediff/(1000*60))%60;
    const second=Math.floor(datediff/(1000))%60;

    yearele.innerHTML=maketwodigit(year);
    monthele.innerHTML=maketwodigit(month);
    dayele.innerHTML=maketwodigit(day);
    hourele.innerHTML=maketwodigit(hour);
    minuteele.innerHTML=maketwodigit(minute);
    secondele.innerHTML=maketwodigit(second);
};

const maketwodigit=(number)=>{
return number>9? number: `0${number}`;
};

