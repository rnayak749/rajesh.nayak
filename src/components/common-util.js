function openNav() {
    var v=document.getElementById("main").firstChild.className;
    if(v.includes("menu-hamburger")) {
        document.getElementById("mySidenav").style.width = "204px";
        document.getElementById("main").style.marginLeft = "204px";
        document.getElementById("main").firstChild.className="glyphicon glyphicon-menu-left";
    }
    else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.getElementById("main").firstChild.className="glyphicon glyphicon-menu-hamburger";
    }
}
export default {openNav}