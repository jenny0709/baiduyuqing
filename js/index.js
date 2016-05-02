$(function(){
    var user=$(".min-nav li:first");
    var login=$(".login");
    login.css("display","none");
    var flag=true;
    user.click(function(){
        if(flag){
            flag=false;
            login.css("display","block");
        }else{
            flag=true;
            login.css("display","none");
        }
    })

});