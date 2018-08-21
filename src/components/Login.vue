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
					<form class="login100-form validate-form" v-on:submit.prevent="log_user_in">
						<span class="login100-form-title p-b-70">
							Welcome to SwitchCaseHub
						</span>
						<div class="wrap-input100 validate-input m-t-25 m-b-35">
							<input class="input100" type="text" id="email" placeholder="Enter email" v-model="email">
							<!-- <span class="focus-input100" data-placeholder="Email"></span> -->
						</div>

						<div class="wrap-input100 validate-input m-b-50">
							<input class="input100" type="password" id="password" placeholder="Enter password" v-model="password">
							<!-- <span class="focus-input100" data-placeholder="Password"></span> -->
						</div>

						<div class="form-group"> 
							<label class="alert-danger" v-if="msg_err != false" style="padding: 10px;margin-top:5px;margin-bottom:5px;width: 100%;text-align: center; border-radius: 7px;">{{msg_err}}</label>
						</div>

						<div class="container-login100-form-btn">
							<button class="login100-form-btn">
								Login
							</button>
						</div>

						<ul class="login-more p-t-40">
							<li class="m-b-8">
								<span class="txt1">
									Forgot
								</span>

								<a href="/forgot" class="txt2">
									Password?
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
		password: "",
		msg_err: false,
		loading: false
	};

	var PageMethods = {
		log_user_in: function (event) {

			//validate user
			var emailRegex = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/;
			var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

			if (!emailRegex.test(PageData.email)) {

				PageData.msg_err = "Email is invalid";
				$("#email").focus();

			}

			else if (!passwordRegex.test(PageData.password)) {

				PageData.msg_err = "Password is invalid";
				$("#password").focus();
				
			}

			else {

				 PageData.msg_err = false;
				 PageData.loading = true;

				 var $this = this;

	          //HANDLES SENDING OF FORM DATA
	          $.post('http://localhost:3000/account/login', {email: PageData.email, password: PageData.password, company: "Atlas"},
	            function(data, status){

	            	console.log(data);
	            	PageData.loading = false;

	                if (data.res == true && data.message == 'true') {

	                	$this.$session.start()
	                	$this.$session.set("logged",true);
	                	$this.$session.set("tokenizer",data.jwt_token);
	                	$this.$session.set("time",data.time);
	                	$this.$session.set("keyonizer",data.chain);
	                	$this.$session.set("data",data.data);
	                	$this.$session.set("id",data.id);
	                	$this.$session.set("image",data.data.image);
	                	// $this.$router.push('/');
	                	window.location = "/";


	                }
	                else if (data.res == false && data.message == 'invalid_email') {

	                	PageData.msg_err = "Email is invalid";

	                }
	                else if (data.res == false && data.message == 'invalid_password') {

							PageData.msg_err = "Password is invalid";

	                }
	                else if (data.res == false && data.message == 'invalid') {

	                  PageData.msg_err = "Email/Password is incorrect";

	                }
	                else if (data.res == false && data.message == 'not_activated') {

							PageData.msg_err = "Please activate your account";

	                }
	                else {

							PageData.msg_err = "Sorry an error occured";	

	                }
	            });

			}

		}
	}

	export default {
	  name: 'Login',
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

	  }
	}
</script>