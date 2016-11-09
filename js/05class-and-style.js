var app1 = new Vue({
    el: "#app-1",
    data: {
        isActive: true,
        isDanger: false,
        message: "our china"
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "hello world"
    }
});

var app3=new Vue({
    el:"#app-3",
    data:{
        activeColor:"green",
        fontSize:16,
        myStyle:{
            "color":"red",
            "font-size":17
        },
        myStyle2:{
            border:"1px solid #0094ff"
        }
    }
});
