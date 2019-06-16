var app = new Vue({
    el: '#app',
    data: {
      blur: 0,
      brightness: 0,
      saturate: 0,
      hueRotate: 0,
    },
    computed: {
      filter: function(){
        return `blur(${this.blur /10}px) brightness(${this.brightness / 50}) saturate(${this.saturate / 50}) hue-rotate(${this.hueRotate / 100 * 360 + 180}deg)`;
      }
    }
});
