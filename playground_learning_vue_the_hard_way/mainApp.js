var app = new Vue({
  el: '#app',
  data: {
    title: 'hello world!',
    name: {
      show: true,
      first: 'John',
      last: 'Doe'
    },
    fruit: 'pear',
    fruits: [
      {name: 'banana', amount:5},
      {name: 'orange', amount:2},
      {name: 'apple', amount:3}
    ]
  },
  methods: {
    addFruit: function() {
      for(var i = 0; i < this.fruits.length; i++) {
        if(this.fruits[i].name == this.fruit) {
          this.fruits[i].amount++;
          return;
        }
      }
      // if no record exists, we create a new one
      this.fruits.push({name: this.fruit, amount: 1});
    },
    valObj: function() {
      return this.fruits.filter(function(elem) {
        if(elem.name == 'this.fruitt') return
      })
    },
    addOrange: function() {
      app.fruits[1].amount++;
    }
  }
});

// setTimeout(() => app.fruits.push({name:'pear', amount:1}), 1000)
// setTimeout(() => app.name.show = true, 2000);
