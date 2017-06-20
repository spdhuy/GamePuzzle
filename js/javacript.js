/**
 * Created by huy on 6/20/17.
 */
var imgDirect = ["funny-cat1","monkey","panda_swap"];
function checkComplete(img) {
    var imgDiv = document.getElementsByClassName("img");
    for(var i =0;i<imgDiv.length;i++)
        if(imgDiv[i].src.toString().indexOf(img)===-1) return false;
    return true;
}
function setComplete(result){
    var color;
    if(result===true) color="red";
    else color = "black";
    $('.img').css("box-shadow","4px 4px 9px "+color);
}
$(document).ready(function(){
    $('.img').click(function(){
        var x = this.src.toString();
        for(var i=0;i<3;i++){
            if(x.indexOf(imgDirect[i])>=0) {
                x = x.replace(imgDirect[i], imgDirect[(i + 1) % 3]);
                this.src = x;
                setComplete(checkComplete(imgDirect[(i + 1) % 3]));
                break;
            }
        }
    });
});

