// var socket = io.connect('http://revity-api.herokuapp.com:7000');

// socket.on('connect', function(){console.log("hey")});
// socket.on('connecting', function(){console.log("connecting")});

// console.log(socket);
// socket.on('disconnect', function(){console.log("disconnected")});

var key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNvbXBhbnkiOiJhdGxhcyIsImVtYWlsIjoiY3JlYXRpdmUuam9lMDA3QGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiam9zZXBoIG1hcnRpbnMiLCJyb2xlIjoidXNlciIsImlkXyI6MTB9LCJpYXQiOjE1MzEwODk3MzMsImV4cCI6MTUzMTE3NjEzM30.BnzFN7VYZ5jPDJDj4Po9jxWZa-lBkaOPt-owxnf1ETc"
var page_data = {
	channels: [],
	chats: [],
	is_group: false,
	view_message_content: false,
	messages: [],
	message_txt: "",

}

var vm = new Vue({
  el: '#app-main',
  data: page_data,
  methods: {
    load_msg: function (event) {
      // `this` inside methods points to the Vue instance
      // console.log(event)
      event.preventDefault();
      console.log(event.target.id);

	    $.get("http://localhost:3000/chat/"+event.target.id+"/"+key+"/1",
	    function(data, status){
	    	// console.log(data)
	    	page_data.messages = [];
	        if (data.res == false && data.message == "no_msg") {
	        	console.log(page_data.messages)
	        }

	        else if (data.res == true && data.message == "true") {
	        	
		        for (var i = data.data.length - 1; i >= 0; i--) {
		        	console.log(data.data[i])
		        	page_data.messages.push(data.data[i]);
		        	page_data.is_group = true;
		        	page_data.view_message_content = true;
		        	// console.log(data.data[i])
					$(".post-list").animate({scrollTop:$(".post-list").scrollHeight}, 1000);
		        }
	        }


	    });
    },
    load_individual_msg: function (event) {
      // `this` inside methods points to the Vue instance
      // console.log(event)
      event.preventDefault();
      console.log(event.target.id);

	    $.get("http://localhost:3000/chat/user/"+event.target.id+"/"+key+"/1",
	    function(data, status){
	    	// console.log(data)
	    	page_data.messages = [];
	        if (data.res == false && data.message == "no_msg") {
	        	console.log(page_data.messages)
	        }

	        else if (data.res == true && data.message == "true") {
	        	
		        for (var i = data.data.length - 1; i >= 0; i--) {
		        	console.log(data.data[i])
		        	page_data.messages.push(data.data[i]);
		        	page_data.is_group = false;
		        	page_data.view_message_content = true;
		        	// console.log(data.data[i])
					$(".post-list").animate({scrollTop:$(".post-list").scrollHeight}, 1000);
		        }
	        }


	    });
    },
    getTime: function(date_string){
    	  var date = new Date(date_string);
		  var hours = date.getHours();
		  var minutes = date.getMinutes();
		  var ampm = hours >= 12 ? 'pm' : 'am';
		  hours = hours % 12;
		  hours = hours ? hours : 12; // the hour '0' should be '12'
		  minutes = minutes < 10 ? '0'+minutes : minutes;
		  var strTime = hours + ':' + minutes + ' ' + ampm;
		  return strTime;
    },
    send_msg: function(){

    	  var message = /(\S+)/;
    	  console.log(page_data.message_txt);
    	  if (message.test(page_data.message_txt)) {
    	  	alert("hey")
    	  }
    	  else{
    	  	alert("Please input a valid message");
    	  }

    }
  }
});

    $.get("http://localhost:3000/chat"+"/"+key,
    function(data, status){
    	console.log(data)
        // alert("Data: " + data + "\nStatus: " + status);
        console.log(data.data)
        for (var i = 0; i < data.data.length; i++) {

        	page_data.chats.push(data.data[i]);

        }

    });

    $.get("http://localhost:3000/team"+"/"+key,
    function(data, status){
    	console.log(data)
        // alert("Data: " + data + "\nStatus: " + status);
        console.log(data.data)
        for (var i = 0; i < data.data.length; i++) {

        	page_data.channels.push(data.data[i]);

        }

    });

    // $.get("http://localhost:3000/team/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNvbXBhbnkiOiJhdGxhcyIsImVtYWlsIjoiY3JlYXRpdmUuam9lMDA3QGdtYWlsLmNvbSIsImZ1bGxuYW1lIjoiam9zZXBoIG1hcnRpbnMiLCJyb2xlIjoidXNlciIsImlkXyI6MTB9LCJpYXQiOjE1MzA1NzU0NzcsImV4cCI6MTUzMDY2MTg3N30.3M66M7PXwmDLTxJwiwH-AfOGdidbmScNj0RMR7IxOkQ",
    // function(data, status){
    // 	console.log(data)
    //     // alert("Data: " + data + "\nStatus: " + status);
    //     console.log(data.data)
    //     for (var i = 0; i < data.data.length; i++) {

    //     	page_data.channels.push(data.data[i]);

    //     }

    // });


// alert("hy");