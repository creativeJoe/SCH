<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Logout',
	created: function () {

	  	this.$session.start()
	  	if (!this.$session.has("logged")) {
	  		this.$router.push('/login');
	  	}
	  	else{

	  		if (this.$jwt.decode(this.$session.get("time"), this.$session.get("keyonizer"))) {
	  			this.$session.remove("time")
	  			this.$session.remove("keyonizer")
	  			this.$session.remove("logged")
	  			this.$router.push('/login');
	  		}
	  		else{
	  			this.$router.push('/login');
	  		}

	  	}

	}
}
</script>
