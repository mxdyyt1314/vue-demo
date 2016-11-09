var app1 = new Vue({
    el: "#app-1",
    data: {
        sports: ["basketball", "football", "volleyball", "baseball"]
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "AllMessage",
        items: [{
            text: "杨雨婷"
        }, {
            text: "李阳"
        }, {
            text: "蒋丽君"
        }]
    }
});

var app3 = new Vue({
    el: "#app-3",
    data: {
        message: "AllMessage",
        items: [{
            msg: "杨雨婷"
        }, {
            msg: "李阳"
        }, {
            msg: "蒋丽君"
        }]
    }
});

var app4 = new Vue({
    el: "#app-4",
    data: {
        object: {
            name: "孟旭东",
            age: 12,
            job: "programmer"
        }
    }
});

var app5=new Vue({
    el:"#app-5",
    data:{}
});