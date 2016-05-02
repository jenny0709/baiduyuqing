$(function(){
    //登录
    var user=$(".min-nav li:first");
    var login=$(".login");
    var flag=true;
    user.click(function(){
        if(flag){
            flag=false;
            login.css("display","block");
        }else{
            flag=true;
            login.css("display","none");
        }
    });
    //菜单按钮
    var menubtn=$(".min-nav li:last-child");
    var menu=$(".menu");
    menubtn.click(function(){
        if(flag){
            flag=false;
            menu.css({display:"block"},{zIndex:9999});
        }else{
            flag=true;
            menu.css("display","none");
        }
    });


});