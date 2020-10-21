var text=document.getElementById("text");
var result =document.getElementById("result");
var selct=document.getElementById("selct");
text.addEventListener("input",()=>{
    lastresult()
})
selct.addEventListener("change",()=>{
    lastresult()
})

function lastresult() {
    if(selct.value=="encode"){
        result.value=btoa(text.value);

    }else{
        result.value=atob(text.value);


    }
    
}