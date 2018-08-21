<template>
  <div>
    <hr>
    <Profile v-if="showAccount == true" :fullname="fullname" :company="company" :image="pro_pix" @changePPix="changeProfilePix"/> 

    <div class="container bootstrap snippet">
        <div class="row">
      		<div class="col-sm-10" style="margin-bottom: 30px;">
      			<h2 class="align-top" style="color: #4682B4">
      				<a href="/">
      					<span style="color: #444">{</span>
      					SwitchCaseHub
      					<span style="color: #444">}</span>
      				</a>
      			</h2>
      		</div>
	        	<div class="col-sm-2"> 
	        		<a href="/" class="pull-right">
	        			<i class="fa fa-home fa-2x"></i>
	        		</a> 
	        	</div>
        		<!-- <a href="/" class="pull-right"><img title="profile image" class="img-circle img-responsive" src="/static/SCH.png" width="200"></a></div>-->
        </div>
        <div class="row">
      		<div class="col-sm-3">                  

              <div class="text-center">
                <img :src="pro_pix" class="avatar img-circle img-thumbnail" alt="Profile Avatar">
					 <a class="btn btn-primary center" v-on:click="showAccount = true" style="" data-toggle="modal" data-target=".bd-example-modal-lg">Change Profile</a>
              </div></hr><br>

                <div class="panel panel-default">
                  <div class="panel-heading">Website <i class="fa fa-link fa-1x"></i></div>
                  <div class="panel-body"><a href="http://bootnipets.com">bootnipets.com</a></div>
                </div>
                     
                <div class="panel panel-default">
                  <div class="panel-heading">Social Media</div>
                  <div class="panel-body">
                  	<i class="fa fa-facebook fa-2x"></i> <i class="fa fa-github fa-2x"></i> <i class="fa fa-twitter fa-2x"></i> <i class="fa fa-pinterest fa-2x"></i> <i class="fa fa-google-plus fa-2x"></i>
                  </div>
                </div>
                
              </div><!--/col-3-->
        	<div class="col-sm-9">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#home">Profile</a></li>
                    <li><a data-toggle="tab" href="#messages">Update Profile</a></li>
                    <!-- <li><a data-toggle="tab" href="#settings">Menu 2</a></li> -->
                  </ul>

                  
              <div class="tab-content">
                <div class="tab-pane active" id="home">
                    <hr>
                      <form class="form" action="##" method="post" id="registrationForm">
                          <div class="form-group">

                              <div class="col-xs-6">
                                  <label for="full_name" v-if="showAccount = true"><h4>Full name:</h4></label>
                                  <br>
                                  <label><h5>{{fullname}}</h5></label>
                              </div>
                          </div>

                          <div class="form-group">

                              <div class="col-xs-6">
                                  <label for="full_name"><h4>Company:</h4></label>
                                  <br>
                                  <label><h5>{{company}}</h5></label>
                              </div>
                          </div>

                          <div class="form-group">

                              <div class="col-xs-6">
                                  <label for="phone"><h4>Phone</h4></label>
                                  <br>
                                  <label><h5>+2348114089344</h5></label>
                              </div>
                          </div>

                          <div class="form-group">

                              <div class="col-xs-12">
                                  <label for="email"><h4>Email</h4></label>
                                  <br>
                                  <label><h5>creative.joe007@gmail.com</h5></label>
                              </div>

                              <div class="col-xs-12">
                                  <label for="location"><h4>Location</h4></label>
                                  <br>
                                  <label><h5>07, United Street, Abaranje.</h5></label>
                              </div>

                          </div>

                  	</form>
                  
                  <hr>
                  <br>
                  <div class='row col-sm-12'>
				          <div class="col-sm-12">
				            <h3 class="mgbt-xs-15 font-semibold"><i class="fa fa-flask mgr-10 profile-icon"></i> SKILL</h3>
				            <div class="skill-list">
				              <div class="skill-name"> Photoshop </div>
				              <div class="progress  progress-sm">
				                <div style="width: 40%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" class="progress-bar progress-bar-success "> <span class="sr-only">40%</span> </div>
				              </div>
				            </div>
				            <div class="skill-list">
				              <div class="skill-name"> Illustrator </div>
				              <div class="progress  progress-sm">
				                <div style="width: 40%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" class="progress-bar progress-bar-danger "> <span class="sr-only">40%</span> </div>
				              </div>
				            </div>
				            <div class="skill-list">
				              <div class="skill-name"> PHP </div>
				              <div class="progress  progress-sm">
				                <div style="width: 40%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" class="progress-bar progress-bar-warning "> <span class="sr-only">40% Complete</span> </div>
				              </div>
				            </div>
				            <div class="skill-list">
				              <div class="skill-name"> Javascript </div>
				              <div class="progress  progress-sm">
				                <div style="width: 40%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" class="progress-bar progress-bar-info "> <span class="sr-only">40% Complete</span> </div>
				              </div>
				            </div>
				            <div class="skill-list">
				              <div class="skill-name"> Communication </div>
				              <div class="progress  progress-sm">
				                <div style="width: 40%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" class="progress-bar progress-bar-success "> <span class="sr-only">40% Complete</span> </div>
				              </div>
				            </div> 
				            <div class="skill-list">
				              <div class="skill-name"> Writing </div>
				              <div class="progress  progress-sm">
				                <div style="width: 40%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" class="progress-bar progress-bar-warning "> <span class="sr-only">40% Complete</span> </div>
				              </div>
				            </div>                                 
				          </div>
			       	</div>

                 </div><!--/tab-pane-->
                 <div class="tab-pane" id="messages">
                   
                   <h2></h2>
                   
                   <hr>
                      <form class="form" action="##" method="post" id="registrationForm">
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                  <label for="first_name"><h4>First name</h4></label>
                                  <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any.">
                              </div>
                          </div>
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                <label for="last_name"><h4>Last name</h4></label>
                                  <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any.">
                              </div>
                          </div>
              
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                  <label for="phone"><h4>Phone</h4></label>
                                  <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any.">
                              </div>
                          </div>
              
                          <div class="form-group">
                              <div class="col-xs-6">
                                 <label for="mobile"><h4>Mobile</h4></label>
                                  <input type="text" class="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any.">
                              </div>
                          </div>
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                  <label for="email"><h4>Email</h4></label>
                                  <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email.">
                              </div>
                          </div>
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                  <label for="email"><h4>Location</h4></label>
                                  <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location">
                              </div>
                          </div>
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                  <label for="password"><h4>Password</h4></label>
                                  <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password.">
                              </div>
                          </div>
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                <label for="password2"><h4>Verify</h4></label>
                                  <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2.">
                              </div>
                          </div>
                          <div class="form-group">
                               <div class="col-xs-12">
                                    <br>
                                  	<button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
                                   	<button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
                                </div>
                          </div>
                  	</form>
                   
                 </div><!--/tab-pane-->
                 <div class="tab-pane" id="settings">
                		
                   	
                      <hr>
                      <form class="form" action="##" method="post" id="registrationForm">
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                  <label for="first_name"><h4>First name</h4></label>
                                  <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any.">
                              </div>
                          </div>
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                <label for="last_name"><h4>Last name</h4></label>
                                  <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any.">
                              </div>
                          </div>
              
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                  <label for="phone"><h4>Phone</h4></label>
                                  <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any.">
                              </div>
                          </div>
              
                          <div class="form-group">
                              <div class="col-xs-6">
                                 <label for="mobile"><h4>Mobile</h4></label>
                                  <input type="text" class="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any.">
                              </div>
                          </div>
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                  <label for="email"><h4>Email</h4></label>
                                  <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email.">
                              </div>
                          </div>
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                  <label for="email"><h4>Location</h4></label>
                                  <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location">
                              </div>
                          </div>
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                  <label for="password"><h4>Password</h4></label>
                                  <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password.">
                              </div>
                          </div>
                          <div class="form-group">
                              
                              <div class="col-xs-6">
                                <label for="password2"><h4>Verify</h4></label>
                                  <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2.">
                              </div>
                          </div>
                          <div class="form-group">
                               <div class="col-xs-12">
                                    <br>
                                  	<button class="btn btn-lg btn-success pull-right" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Save</button>
                                   	<!--<button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>-->
                                </div>
                          </div>
                  	</form>
                  </div>
                   
                  </div><!--/tab-pane-->
              </div><!--/tab-content-->

            </div><!--/col-9-->
        </div><!--/row-->
  </div>
</template>

<style type="text/css" scoped>

</style>

<script>
import Profile from './Profile'

var key;

var PageData = {
	fullname: '',
	email: '',
	phone: '',
	showAccount: false,
	pro_pix: '',
	company: ''
};

//page functions goes here
var PageMethods = {

    changeProfilePix (value) {
      // snack(value)
      PageData.pro_pix = 'http://127.0.0.1:3000/file/load?file='+value;
    }

}

export default {
	name: 'Profiles',
	data () {
		return PageData
	},
  	components: {
    	Profile
  	},
	methods: PageMethods,
	created: function () {

    //check if user is permitted to view this page
    this.$session.start()
    if (!this.$session.has('logged')) {
      this.$router.push('/login');
    }
    else{

      if (this.$jwt.decode(this.$session.get('time'), this.$session.get('keyonizer'))) {
        key = this.$session.get('tokenizer');
      }
      else{
        this.$router.push('/login');
      }

    }

    console.log(this.$session.get('data'))
    PageData.fullname = this.$session.get('data').fullname.toUpperCase();
    PageData.email = this.$session.get('data').email;
    PageData.company = this.$session.get('data').company.toUpperCase();
    //fetch homepage contents
    // console.log(this.$session.get('tokenizer'))


    PageData.pro_pix = 'http://127.0.0.1:3000/file/load?file='+ this.$session.get('image');

	}
};

</script>