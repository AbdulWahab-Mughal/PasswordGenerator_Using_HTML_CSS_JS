function generatePassword(){
    let range =document.getElementById("range").value
    // let upperCase=String.fromCharCode(Math.floor(Math.random()*26)+65) 
    // let lowerCase=String.fromCharCode(Math.floor(Math.random()*26)+97) 
    // let numbers=String.fromCharCode(Math.floor(Math.random()*10)+48)
    let upperCase=`ABCDEFGHIJKLMNOPQRSTUVWXYZ` 
    let lowerCase=`abcdefghijklmnopqrstuvwxyz` 
    let numbers=`0123456789`
    let specialChar="!@#$%^&*():;~`/?.,"
    // for checkbox
    let upperR=document.getElementById("upper");
    let lowerR=document.getElementById("lower");
    let numbersR=document.getElementById("numbers");
    let specialR=document.getElementById("special");
// =========================================

    let hasUpperR=upperR.checked
    let hasLowerR=lowerR.checked
    let hasNumbersR=numbersR.checked
    let hasSpecialR=specialR.checked
    if (range<3){
        // alert("lenth is too short")
        document.getElementById("alert").innerHTML=`"range is too short"`
        let Null=""
         document.getElementById("result").value=Null

     }
     else if(hasUpperR==false && hasLowerR==true && hasNumbersR==true && hasSpecialR==true){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= lowerCase[Math.floor(Math.random()*lowerCase.length)]+numbers[Math.floor(Math.random()*numbers.length)]+specialChar[Math.floor(Math.random()*specialChar.length)]
            result=result.substr(3,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("upper uncheck")

     }
     else if(hasUpperR==true && hasLowerR==false && hasNumbersR==true && hasSpecialR==true){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= upperCase[Math.floor(Math.random()*upperCase.length)]+numbers[Math.floor(Math.random()*numbers.length)]+specialChar[Math.floor(Math.random()*specialChar.length)]
            result=result.substr(3,range)
            // console.log(result)
            document.getElementById("result").value=result;
        
        // alert("lower uncheck")

     }
     else if(hasUpperR==true && hasLowerR==true && hasNumbersR==false && hasSpecialR==true){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= lowerCase[Math.floor(Math.random()*lowerCase.length)]+upperCase[Math.floor(Math.random()*upperCase.length)]+specialChar[Math.floor(Math.random()*specialChar.length)]
            result=result.substr(3,range)
            // console.log(result)
        // alert("numbers uncheck")
            document.getElementById("result").value=result;
        

     }
     else if(hasUpperR==true && hasLowerR==true && hasNumbersR==true && hasSpecialR==false){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= lowerCase[Math.floor(Math.random()*lowerCase.length)]+numbers[Math.floor(Math.random()*numbers.length)]+upperCase[Math.floor(Math.random()*upperCase.length)]
            result=result.substr(3,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("specail uncheck")

     }
     else if(hasUpperR==true && hasLowerR==false && hasNumbersR==false && hasSpecialR==false){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= upperCase[Math.floor(Math.random()*upperCase.length)]
            result=result.substr(0,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("upper check")

     }
     else if(hasUpperR==false && hasLowerR==true && hasNumbersR==false && hasSpecialR==false){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= lowerCase[Math.floor(Math.random()*lowerCase.length)]
            result=result.substr(0,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("lower check")
        

     }
     else if(hasUpperR==false && hasLowerR==false && hasNumbersR==true && hasSpecialR==false){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= numbers[Math.floor(Math.random()*numbers.length)]
            result=result.substr(0,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("numbers check")

     }
     else if(hasUpperR==false && hasLowerR==false && hasNumbersR==false && hasSpecialR==true){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= specialChar[Math.floor(Math.random()*specialChar.length)]
            result=result.substr(0,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("special check")

     }
     else if(hasUpperR==true && hasLowerR==true && hasNumbersR==false && hasSpecialR==false){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= lowerCase[Math.floor(Math.random()*lowerCase.length)]+upperCase[Math.floor(Math.random()*upperCase.length)]
            result=result.substr(0,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("lower and upper check")

     }
     else if(hasUpperR==false && hasLowerR==true && hasNumbersR==true && hasSpecialR==false){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= numbers[Math.floor(Math.random()*numbers.length)]+lowerCase[Math.floor(Math.random()*lowerCase.length)]
            result=result.substr(0,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("lower and numbers check")

     }
     else if(hasUpperR==false && hasLowerR==false && hasNumbersR==true && hasSpecialR==true){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= numbers[Math.floor(Math.random()*numbers.length)]+specialChar[Math.floor(Math.random()*specialChar.length)]
            result=result.substr(0,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("numbers and special check")

     }
     else if(hasUpperR==true && hasLowerR==false && hasNumbersR==false && hasSpecialR==true){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= specialChar[Math.floor(Math.random()*specialChar.length)]+upperCase[Math.floor(Math.random()*upperCase.length)]
            result=result.substr(0,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("specail and upper check")

     }
     else if(hasUpperR==true && hasLowerR==false && hasNumbersR==true && hasSpecialR==false){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= numbers[Math.floor(Math.random()*numbers.length)]+upperCase[Math.floor(Math.random()*upperCase.length)]
            result=result.substr(0,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("numbers and upper check")

     }
     else if(hasUpperR==false && hasLowerR==true && hasNumbersR==false && hasSpecialR==true){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= lowerCase[Math.floor(Math.random()*lowerCase.length)]+specialChar[Math.floor(Math.random()*specialChar.length)]
            result=result.substr(0,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("lower and special check")

     }
     
     else if( hasUpperR==false && hasLowerR==false && hasNumbersR==false && hasSpecialR==false){
        // alert("all not checked")
        document.getElementById("alert").innerHTML=`"please atleast checked one"`
        let Null=""
         document.getElementById("result").value=Null

     }
   
       
     
    
    else if(hasUpperR==true && hasLowerR==true && hasNumbersR==true && hasSpecialR==true){
        let Null=""
         document.getElementById("alert").innerHTML=Null
        let result="";
        for(i=0;i<=range;i++)
            result+= upperCase[Math.floor(Math.random()*upperCase.length)]+lowerCase[Math.floor(Math.random()*lowerCase.length)]+numbers[Math.floor(Math.random()*numbers.length)]+specialChar[Math.floor(Math.random()*specialChar.length)]
            result=result.substr(3,range)
            // console.log(result)
            document.getElementById("result").value=result;
        // alert("all check")
    }
    
}
function copyPassword(){
    let copyText=document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0,999)
    document.execCommand("copy")

}


// generatePassword(7)
// function generatePassword(len) {
//     // let len=prompt("enter range");
//     let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let lowerCase="abcdefghijklmnopqrstuvwxyz" 
//     let numbers="0123456789"
//     let specialChar="!@#$%^&*():;~`/?.,"
//     // console.log(upperCase+lowerCase+numbers)
//     if (len<3){
//         alert("lenth is too short")
//     }    
//     else if(len>=3){
//         let result="";
//         for(i=0;i<=len;i++)
//             result +=specialChar[Math.floor(Math.random()*specialChar.length)]+lowerCase[Math.floor(Math.random()*lowerCase.length)]+upperCase[Math.floor(Math.random()*upperCase.length)]+numbers[Math.floor(Math.random()*numbers.length)]
//             result=result.substr(0,len)
//             console.log(result);
        
        
//     }
// }
// generatePassword(10)