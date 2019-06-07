var app =  new Vue({
    el: "#app",
    methods: {
        toggleShow: function(){
            this.show = !this.show;
        }
    },
    data: {
        show: true
    }
});