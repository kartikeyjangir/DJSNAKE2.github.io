

function eff(obj)
{    
    obj.style.color="red";
    obj.style.borderColor= "red";
    obj.style.fontWeight=" bold";
    obj.style.boxShadow="10px 10px 10px red";
    var thissound="sound"+obj.id;
    var audio=document.getElementById(thissound);
    audio.play();
    
}

function eff2(obj) {
    obj.style.color = "white";
    obj.style.boxShadow="none";
    obj.style.borderColor= "black";
    obj.style.fontWeight=" normal";
   
}




