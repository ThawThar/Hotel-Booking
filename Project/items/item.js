function count(operator){
    var a=document.getElementById("amount");
    let num=parseInt(a.value);

    if(operator == "+"){
            let num=parseInt(a.value);
            a.value=num+1; 
    }else if(a.value>1){
            a.value = num-1;
        }
    }

function pricefun(){
    var x = document.getElementById("roomType").value;
   
    if (x == "Single Room"){
        document.getElementById("price").value="30000ks";
    }else if(x == "Twin Room"){
        document.getElementById("price").value="50000ks";
    }else if(x == "Family Room"){
        document.getElementById("price").value="70000ks";
    }else{
        console.log("Something Wrong");
    }
}

function cancel(){
    document.getElementById("fromdate").value = "";
    document.getElementById("roomType").value = "";
    document.getElementById("price").value = "";


}

function ssbooking(){
    var d = document.getElementById("fromdate").value;
    var rType = document.getElementById("roomType").value;
    var p = document.getElementById("price").value;
    if (d != "" && rType != "" && p != ""){
        window.location.href = "successful.html";
    }else{
        alert("Please fill the information!!!");
    }
}




var img_list1 =["../image/room1.jpg","../image/room2.jpg","../image/h5.avif",
                "../image/h2","../image/p2.jpg","../image/p1.jpg"];
var img_list2 =["../image/room3.jpg","../image/room4.jpg","../image/h6.avif",
                "../image/fs1.jpg","../image/friendship.jpg","../image/winlight.jpg"];
var img_list3 =["../image/h7.avif","../image/h8.avif","../image/h9.avif",
                "../image/h10.avif","../image/h11.avif","../image/h12.avif",]                


var hname = ["FriendShip Hotel","Paradise Hotel","Winlight Hotel"]; 
var htitle = ["FriendShip Hotel","Paradise Hotel","Winlight Hotel"];               

let url = new URLSearchParams(window.location.search);
console.log(url.get('index'));


function readImage(){
    var img1 = document.getElementById("leftone");
    var img2 = document.getElementById("lefttwo");
    var img3 = document.getElementById("leftthree");
    var img4 = document.getElementById("leftfour");
    var img5 = document.getElementById("leftfive");
    var img6 = document.getElementById("leftsix");

    if(url.get('index') == 1){
        setTimeout(function(){
            img1.src = img_list1[0];
            img2.src = img_list1[1];  
            img3.src = img_list1[2]; 
            img4.src = img_list1[3];
            img5.src = img_list1[4];
            img6.src = img_list1[5];     
        }, 1000);
        document.getElementById("hotelName").innerHTML = hname[0];
        document.getElementById("title").innerHTML = htitle[0];
    }else if(url.get('index') == 2){
        setTimeout(function(){
            img1.src = img_list2[0];
            img2.src = img_list2[1];  
            img3.src = img_list2[2]; 
            img4.src = img_list2[3];
            img5.src = img_list2[4];
            img6.src = img_list2[5];     
        }, 1000);
        document.getElementById("hotelName").innerHTML = hname[1];
        document.getElementById("title").innerHTML = htitle[1];
    }else if(url.get('index') == 3){
        setTimeout(function(){
            img1.src = img_list3[0];
            img2.src = img_list3[1];  
            img3.src = img_list3[2]; 
            img4.src = img_list3[3];
            img5.src = img_list3[4];
            img6.src = img_list3[5];     
        }, 1000);
        document.getElementById("hotelName").innerHTML = hname[2];
        document.getElementById("title").innerHTML = htitle[2];

    }else{

        console.log("someting wrong!");
    }
}
   










