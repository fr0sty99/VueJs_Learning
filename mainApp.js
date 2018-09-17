new Vue({
	el: '#app',
  data: {
  	title:'hello world!'
  },
  methods: {
  	changeTitle() {
    	this.title = "Changed from Function"
    }
  }
});
