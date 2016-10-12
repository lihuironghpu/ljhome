/**
 * Created by lhr on 16/9/9.
 */
//判断屏幕分辨率
(function(){
    var screenHeight = window.screen.height;
    //var sereenWidth = window.screen.width;
    //var validHeight = window.screen.availHeight;
    if(screenHeight > 900){
        document.getElementById("home_container").className = "container_big";
    }
    if(screenHeight <= 768){
        document.getElementById("home_container").className = "container_small";
    }
})();

function showTab(num){
    var header = document.getElementById("mesAndNotiveHeader");
    var mesLink = header.getElementsByTagName("a")[0];
    var noticeLink = header.getElementsByTagName("a")[1];
    if(num == 1){
        mesLink.className = "active";
        noticeLink.className = "";
        document.getElementById("mesCon").style.display = "block";
        document.getElementById("noticeCon").style.display = "none";
    }else{
        noticeLink.className = "active";
        mesLink.className = "";
        document.getElementById("mesCon").style.display = "none";
        document.getElementById("noticeCon").style.display = "block";
    }
}

//弹出框隐藏显示  传递参数显示隐藏标志|标题文本|路径  true显示  false隐藏

function toggleDialog(togflag,titletext,iframesrc){
    var dialogEle = document.getElementById("mesDialog");

    //显示，三个参数都需要传入
    if(togflag){
        document.getElementById("diaTitle").innerHTML = titletext;
        document.getElementById("mesIframe").setAttribute("src",iframesrc);
        dialogEle.style.display = "block";
    }else{
        //隐藏，可传入一个参数
        dialogEle.style.display = "none";
    }
}
