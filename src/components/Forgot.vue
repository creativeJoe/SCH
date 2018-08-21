<template>

    <!-- BEGIN APP MAIN -->
    <div id="app-main">

		<!--===============================================================================================-->
			<link rel="stylesheet" type="text/css" href="/static/login/vendor/bootstrap/css/bootstrap.min.css">
		<!--===============================================================================================-->
			<link rel="stylesheet" type="text/css" href="/static/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
		<!--===============================================================================================-->
			<link rel="stylesheet" type="text/css" href="/static/login/fonts/iconic/css/material-design-iconic-font.min.css">
		<!--===============================================================================================-->
			<link rel="stylesheet" type="text/css" href="/static/login/vendor/animate/animate.css">
		<!--===============================================================================================-->
			<link rel="stylesheet" type="text/css" href="/static/login/vendor/css-hamburgers/hamburgers.min.css">
		<!--===============================================================================================-->
			<link rel="stylesheet" type="text/css" href="/static/login/vendor/animsition/css/animsition.min.css">
		<!--===============================================================================================-->
			<link rel="stylesheet" type="text/css" href="/static/login/vendor/select2/select2.min.css">
		<!--===============================================================================================-->
			<link rel="stylesheet" type="text/css" href="/static/login/vendor/daterangepicker/daterangepicker.css">
		<!--===============================================================================================-->
			<link rel="stylesheet" type="text/css" href="/static/login/css/util.css">
			<link rel="stylesheet" type="text/css" href="/static/login/css/main.css">
		<!--===============================================================================================-->
		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100 p-t-75 p-b-20">

					<div class="form-group" v-if="page_success == true">
							<label class="alert-success" style="padding: 10px;margin-top:5px;margin-bottom:5px;width: 100%;text-align: center; border-radius: 7px;">
								<br>
								<h2>Success !<hr></h2>
								We have sent you a mail to reset your password.
								<br>
								<br>
								<a v-on:click="send_reset_link" style="text-decoration: underline; cursor: pointer">Resend Code</a>
							</label>
					</div>

					<form v-if="page_success == false" class="login100-form validate-form" v-on:submit.prevent="send_reset_link">
						<span class="login100-form-title p-b-70">
							Forgot SwitchCaseHub Password
						</span>
						<div class="wrap-input100 validate-input m-t-25 m-b-35">
							<input class="input100" type="text" placeholder="Enter email" v-model="email">
							<!-- <span class="focus-input100" data-placeholder="Email"></span> -->
						</div>

						<div class="form-group">
							<label class="alert-danger" v-if="msg_err != false" style="padding: 10px;margin-top:5px;margin-bottom:5px;width: 100%;text-align: center; border-radius: 7px;">{{msg_err}}</label>
						</div>

						<div class="container-login100-form-btn">
							<button class="login100-form-btn">
								Send Email-Link
							</button>
						</div>

						<ul class="login-more p-t-40">
							<li class="m-b-8">
								<span class="txt1">
									Already have an
								</span>

								<a href="/forgot" class="txt2">
									account?
								</a>
							</li>

							<li>
								<span class="txt1">
									Don’t have an account?
								</span>

								<a href="http://switchcasehub.com/join.html" class="txt2">
									Sign up
								</a>
							</li>
						</ul>
					</form>
				</div>
			</div>
		</div>


		<div id="dropDownSelect1"></div>

		<div id="loader-wrapper" v-if="loading == true">
			<div id="loader"></div>
		</div>

    </div>

</template>

<style type="text/css" scoped>

	@import "../../static/reset.css";
	
</style>

<script>

	var PageData = {
		email: "",
		msg_err: false,
		page_success: false,
		loading: false
	};

	var PageMethods = {

		send_reset_link: function (event) {

			//validate user
			var emailRegex = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/;

			if (!emailRegex.test(PageData.email)) {

				PageData.msg_err = "Email is invalid";
				$("#email").focus();

			}

			else {

				 PageData.msg_err = false;
				 PageData.loading = true;
	          //HANDLES SENDING OF PRIVATE MESSAGE TO AN INDIVIDUAL
	          $.post('http://localhost:3000/account/forgot', {email: PageData.email},
	            function(data, status){

	            	console.log(data);
	            	PageData.loading = false;

	                if (data.res == true && data.message == 'true') {
	                //   console.log(PageData.messages)
	                	PageData.page_success = true;
	                }
	                else if (data.res == false && data.message == 'invalid_email') {

	                	PageData.msg_err = "Email is invalid";

	                }
	                else if (data.res == false && data.message == 'invalid') {

	                  PageData.msg_err = "Email is incorrect";

	                }
	                else {

							PageData.msg_err = "Sorry an error occured";	

	                }
	            });

			}

		}

	}

	export default {
	  name: 'Forgot',
	  data () {
	    return PageData
	  },
	  methods: PageMethods,
	  created: function () {
	  	
	  	this.$session.start()
	  	if (!this.$session.has("logged")) {

	  	}
	  	else{

	  		if (this.$jwt.decode(this.$session.get("time"), this.$session.get("keyonizer"))) {
	  			this.$router.push('/');
	  		}
	  		else{

	  		}

	  	}
	    // fetchUserChats()
	    // fetchTeamChats();
	  }
	}
</script>