Vue.component("my-component", {
    template: "<div>A customer component!</div>"
});

var app1 = new Vue({
    el: "#app-1"
});

var app2 = new Vue({
    el: "#app-2",
    components: {
        "part-component": {
            template: "<div>a part component</div>"
        }
    }
});


var data = {
    counter: 1
};
Vue.component("simple-counter", {
    template: "<button v-on:click='counter+=1'>{{counter}}</button>",
    data: function () {
        return data;
        // return {
        //     counter:1
        // };
    }
});
new Vue({
    el: "#app-3"
});

