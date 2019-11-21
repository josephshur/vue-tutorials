new Vue({
  el: '#vue-app',
  data: {
    output: 'Your fav food'
  //  available: false,
  //  nearby: false
  //  name: '',
  //  job: 'Ninja',
  //  website: 'https://www.thenetninja.co.uk',
  //  websiteTag: '<a href="https://www.thenetninja.co.uk">The Net Ninja Website</a>',
  //  age: 20,
  //  a: 0,
  //  b: 0
  //  x: 0,
  //  y: 0
  },

  methods: {
    readRefs: function(){
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    }
//    addToA: function() {
//      console.log('addtoA');
//      return this.a + this.age;
//    },
//    addToB: function() {
//      console.log('addtoB');
//      return this.b + this.age;
//    }

//    logName: function(){
//      console.log('you entered your name');
//    },
//    logAge: function(){
//      console.log('you entered your age');
//    },
//    add: function(inc){
//      this.age += inc;
//    },
//    subtract: function(dec){
//      this.age -= dec;
//    },
//    updateXY: function(event){
//      this.x = event.offsetX;
//      this.y = event.offsetY;
//    },
//    click: function(){
//      alert('You clicked me');
//    },
},

//  computed: {
//    compClasses: function(){
//      return {
//        available: this.available,
//        nearby: this.nearby
//      }
//    }
//  }
});
