const btn = document.querySelector("button");




btn.addEventListener("click",generateQR);




function generateQR (){



    const qrContainer = document.querySelector(".qr_container");
    let inputVal = document.querySelector("input").value;
   
    if(inputVal == ""){
        return inputVal;
    }else{
            let img = document.querySelector("#img");
            const qrValue  = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
            img.src = qrValue;
            setTimeout(() => {
                qrContainer.style.display = "flex";
    
            }, 500);
            const faTimes = document.querySelector(".fa-times");
            faTimes.addEventListener("click",()=>{
                document.querySelector("input").value = "";
                qrContainer.style.display = 'none';
            })

    }
   
}


