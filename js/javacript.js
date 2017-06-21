/**
 * Created by huy on 6/20/17.
 */
var img_Name = ["funny-cat1","monkey","panda_swap"];
function setDefaultForImageTag(){
    var imgTag = document.getElementsByClassName("img");
    imgTag[0].attr("src","../image/panda_swap_part1x1.jpg");
    imgTag[1].attr("src","../image/panda_swap_part2x1.jpg");
    imgTag[2].attr("src","../image/panda_swap_part3x1.jpg");
    imgTag[3].attr("src","../image/panda_swap_part4x1.jpg");
    imgTag[4].attr("src","../image/panda_swap_part5x1.jpg");
}
function checkImageTag(img_Name) {
    var imgTag = document.getElementsByClassName("img");
    for(var i =0;i<imgTag.length;i++)
        if(imgTag[i].src.toString().indexOf(img_Name)===-1) return false;
    return true;
}
function setBorderColor(result){
    var color;
    if(result===true) color="red";
    else color = "black";
    $('.img').css("box-shadow","4px 4px 9px "+color);
}
$(document).ready(function(){
    $('.img').click(function(){
        var img_source = this.src.toString();
        for(var i=0;i<3;i++){
            if(img_source.indexOf(img_Name[i])>=0) {
                img_source = img_source.replace(img_Name[i], img_Name[(i + 1) % 3]);
                this.src = img_source;
                setComplete(checkComplete(img_Name[(i + 1) % 3]));
                break;
            }
        }
    });
});

