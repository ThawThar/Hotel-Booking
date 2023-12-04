var pic = ["../image/booking2.jpg","../image/h2","../image/h3.avif","../image/room1.jpg"];
var picindex= 0;

function changenext(){
    
    if(picindex< pic.length-1){
        picindex = picindex+1;
        document.getElementById("pic1").src = pic[picindex];
        console.log(picindex);
    }else{
        document.getElementById("pic1").src = pic[0];
    }


    
}

function changeprev(){
    if(picindex == 0){
        picindex = pic.length-1;
    }else if(picindex>0){
        picindex = picindex-1;
        document.getElementById("pic1").src = pic[picindex];
        console.log(picindex);
    }
}







function goitem(indexnum){
    window.location.href = "http://127.0.0.1:5500/Project/items/item.html?index="+indexnum;
}


// function goitem2(){
//     window.location.href = "http://127.0.0.1:5500/Project/items/item.html";
// }