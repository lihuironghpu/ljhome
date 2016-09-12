/**
 * Created by lhr on 16/9/9.
 */
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
