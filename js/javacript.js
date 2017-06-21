/**
 * Created by huy on 6/20/17.
 */
var img_Name = ["funny-cat1","monkey","panda_swap"];
function setDefaultForImageTag(){
    var imgTag = document.getElementsByClassName("img");
    $('.img:nth-child(1)').attr("src","./image/panda_swap_part1x1.jpg")
    $('.img:nth-child(2)').attr("src","./image/panda_swap_part2x1.jpg")
    $('.img:nth-child(3)').attr("src","./image/panda_swap_part3x1.jpg")
    $('.img:nth-child(4)').attr("src","./image/panda_swap_part4x1.jpg")
    $('.img:nth-child(5)').attr("src","./image/panda_swap_part5x1.jpg")
    $('.img').css("box-shadow","4px 4px 9px black");
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
    setDefaultForImageTag();
    $('.img').click(function(){
        var imgName = this.src.toString();
        for(var i=0;i<3;i++){
            if(imgName.indexOf(img_Name[i])>=0) {
                var nexImage = img_Name[(i + 1) % 3];
                imgName = imgName.replace(img_Name[i], nexImage);
                this.src = imgName;
                setBorderColor(checkImageTag(nexImage));
                break;
            }
        }
    });
});

