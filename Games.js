


CheckGuess = () =>{
    let AutoNum = Math.ceil(Math.random()*10);
    let AutoNumber = document.querySelector(".AutoNumber").innerHTML = "Computer Guessed this number: - "+ AutoNum;
    let GivenNumebr = document.querySelector(".GivenNumber").value;
    if(GivenNumebr==AutoNum){
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
    }
radios = () =>{
    let won = document.createElement('img');
    won.style.visibility = "hidden";
    let vaues = document.getElementsByName("RPS");
    let Plmove;
    let moveArr = ["Rock" , "Paper", "Scissors"];
    let PcMove = Math.floor(Math.random()*3);
    let Commove = moveArr[PcMove]
    for(var radio of vaues){
        if(radio.checked){
             Plmove = radio.value;
        }

    }   
    if(Commove==="Paper" && Plmove==="Rock" || Commove === "Scissors" && Plmove==="Paper" || Commove ==="Rock" && Plmove==="Scissors"){
        won.style.visibility="visible";
        won = document.createElement('img');
        won.src = 'https://media.giphy.com/media/EndO2bvE3adMc/giphy.gif';
        won.style.width = "450px"
        document.getElementById('gif').appendChild(won);
        document.querySelector(".btn-radio").disable = true;
        
    }
    if(Commove==="Rock" && Plmove==="Paper" || Commove === "Paper" && Plmove==="Scissors" || Commove ==="Scissors" && Plmove==="Rock")
    {
        let won = document.createElement('img');
        won.src = 'https://media.giphy.com/media/1zkMbX7k4nd1AM4i4k/giphy.gif';
        won.style.width = "450px"
        document.getElementById('gif').appendChild(won);
        won.disable = true;
    }
  
}


//-----------------------Stop the count------------


let num =0; 
let ranNum;

ranNum = Math.floor(Math.random()*10)
document.querySelector(".StopAt").innerText = "Stop at " + ranNum;

Level1 = () =>{
    let btn1 = document.querySelector(".StopCount-btn").disabled =true;    
        start = setInterval(()=>{
            num++;
            document.querySelector(".Number-Head").innerText = num;
           
        },500);
        
        
}

Level2 = () =>{
    start = setInterval(() => {
        num++;
        document.querySelector(".Number-Head").innerText = num;
    }, 400);
}
    
Level3 = () =>{
    start = setInterval(()=>{
        num++;
        document.querySelector(".Number-Head").innerText = num;
    },300)
}

Stop = () =>{
    clearInterval(start);

    timeout = setTimeout(()=>{
        if(num ==ranNum){
            document.querySelector(".Number-Head").innerText = 0;
            num = 0;
            ranNum = Math.floor(Math.random()*10)
            document.querySelector(".StopAt").innerText = "Stop at " + ranNum;
        }
        else{
            document.querySelector(".Number-Head").innerText = 0;
            document.querySelector(".StopAt1").innerText = "Y0U LOST";
            num = 0;
            ranNum = Math.floor(Math.random()*10)
            document.querySelector(".StopAt").innerText = "Stop at " + ranNum;
        }
    },1000) 
    

}
   

