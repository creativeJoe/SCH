<template>

    <!-- BEGIN APP MAIN -->
    <div id="app-main">

		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100 p-t-75 p-b-20">

					<!--error message-->
					<div class="form-group" v-if="msg_Error != false">
						<label class="alert-danger" style="padding: 10px;margin-top:5px;margin-bottom:5px;width: 100%;text-align: center; border-radius: 7px;">
							<br>
							<h3>Error !<hr></h3>
								{{ msg_Error }}
							<br>
							<br>
						</label>
					</div>

					<!--error message-->
					<div class="form-group" v-if="page_success == true && msg_Error == false">
						<label class="alert-success" style="padding: 10px;margin-top:5px;margin-bottom:5px;width: 100%;text-align: center; border-radius: 7px;">
							<br>
							<h3>Success !<hr></h3>
								Password has been changed, you would be redirected to the login page soon
							<br>
							<br>
						</label>
					</div>
					<!-- end-error message -->

					<!--reset form-->
					<form v-if="page_success == false && msg_Error == false" class="login100-form validate-form" v-on:submit.prevent="reset_password">
						<span class="login100-form-title p-b-70">
							Reset SwitchCaseHub Password
						</span>

						<div class="wrap-input100 validate-input m-b-50">
							<input class="input100" type="password" id="password" placeholder="Enter password" v-model="password">
							<!-- <span class="focus-input100" data-placeholder="Password"></span> -->
						</div>

						<div class="wrap-input100 validate-input m-b-50">
							<input class="input100" type="password" id="c_password" placeholder="Confirm password" v-model="c_password">
							<!-- <span class="focus-input100" data-placeholder="Password"></span> -->
						</div>

						<div class="form-group">
							<label class="alert-danger" v-if="msg_err != false" style="padding: 10px;margin-top:5px;margin-bottom:5px;width: 100%;text-align: center; border-radius: 7px;">{{msg_err}}</label>
						</div>

						<div class="container-login100-form-btn">
							<button class="login100-form-btn">
								Reset Password
							</button>
						</div>

					</form>
				</div>
			</div>
		</div>

		<div id="loader-wrapper" v-if="loading == true">
			<div id="loader"></div>
		</div>

    </div>

 </template>

<style type="text/css" scoped>

	@import "../../static/reset.css";
	@import "../../static/login/css/util.css";
	@import "../../static/login/css/main.css";
	@import "../../static/login/vendor/bootstrap/css/bootstrap.min.css";
	/*@import "../../static/login/css/util.css";*/
	
</style>
 <script>

 	var PageData = {
 		msg_Error:  false,
 		loading: true,
 		page_success: false,
 		password: "",
 		c_password: "",
 		msg_err: false,
 		token: null
 	}
 	var PageMethods = {

		reset_password: function (event) {

			//validate user
			var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

			if (!passwordRegex.test(PageData.password)) {

				PageData.msg_err = "Password is invalid";
				$("#password").focus();
				
			}

			else if (PageData.c_password != PageData.password) {

				PageData.msg_err = "Password does not match";
				$("#c_password").focus();
				
			}

			else {

				PageData.loading = true;
				var $this = this;

		  	 	//let's reset password
		      $.post('http://localhost:3000/account/reset/'+PageData.token, {password: PageData.password},
		      	function(data, status){

		           	PageData.loading = false;
		           	PageData.msg_err =  false;
		           	console.log(data)

		            if (data.res == true && data.message == 'confirmed') {

		              	PageData.msg_Error = false;
		              	PageData.page_success = true;

		              	setTimeout(function () {
		              		$this.$router.push('/login');
		              	}, 5000)

		            }
		            else if (data.res == false && data.message == 'invalid_token') {

		               PageData.msg_Error = "This link is broken or has expired";

		            }
		            else if (data.res == false && data.message == 'invalid_password') {

		               // PageData.msg_Error = "This link is broken or has expired";
		               PageData.msg_Error = "Password is invalid";

		            }
		            else if (data.res == false && data.message == 'invalid') {

		               PageData.msg_err = "Email does not exist";

		            }
		            else {

							PageData.msg_err = "Sorry an error occured";	

		            }
		      });

			}
		}

 	}

	export default {
	  name: 'Reset',
	  data () {
	    return PageData
	  },
	  methods: PageMethods,
	  created: function () {

	  	this.$session.start()
	  	PageData.token = this.$route.query.token;
	  	
	  	if (!this.$session.has("logged")) {

	  	}
	  	else{

	  		if (this.$jwt.decode(this.$session.get("time"), this.$session.get("keyonizer"))) {
	  			this.$router.push('/');
	  		}
	  		else{

	  		}
	  	}

	  	if (!PageData.token) {
	  	 	PageData.loading = false;
	  	 	PageData.msg_Error = "This link is broken, please re-check";
	  	}

	  	else {

	  	 	//let's confirm if token is valid, before proceeding
	      $.post('http://localhost:3000/account/verifyToken/'+PageData.token,
	      	function(data, status){

	           	PageData.loading = false;

	            if (data.res == true && data.message == 'true') {

	              	PageData.msg_Error = false;

	            }
	            else if (data.res == false && data.message == 'invalid_token') {

	               PageData.msg_Error = "This link is broken or has expired";
	               // PageData.msg_Error = false;

	            }
	            else if (data.res == false && data.message == 'invalid') {

	               PageData.msg_err = "Email does not exist";

	            }
	            else {

						PageData.msg_err = "Sorry an error occured";	

	            }
	      });

	  	}

	    // fetchUserChats()
	    // fetchTeamChats();
	  }
	}
 </script>