<template>

    <!-- BEGIN APP MAIN -->
    <div id="app-main">
      <!-- <UploadFile v-if="fileUploadModal"/> -->
      <!-- BEGIN THEME STYLES -->
      <!-- theme will place after this element dinamically via vision.handleThemeChange(themeName) -->
      <link id="app-theme">
      <!-- BEGIN THEME STYLES -->
      <!-- BEGIN GLOBALS STYLES -->
      <link href="/static/assets/globals/css/custom.min.css" rel="stylesheet" type="text/css">

      <div id="myProgress">
        <div id="myBar"></div>
      </div>

      <!-- BEGIN APP HEADER -->
      <div id="app-header" class="app-header">
        <!-- .navbar -->
        <nav class="navbar navbar-default navbar-static-top">
          <div class="container-fluid">
            <!-- .navbar-header -->
            <div class="navbar-header float-left">
              <div class="float-left">
                <!-- drawer handler -->
                <button type="button" class="navbar-toggle d-block" data-toggle="drawer" title="Toggle Global Navigations">
                  <span class="sr-only">Toggle global navigations</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <!-- navbar brand/title -->
              <h1 class="navbar-title dropdown">
                <a href="#" class="hidden-xs mr-2" data-toggle="tooltip-bottom" title="Add to Favorite"><i class="fa fa-star-o"></i></a>
                <a href="#" data-toggle="dropdown" title="Current room">SCH <!--<span class="caret"></span>--></a>
              </h1>
            </div>
            <!-- /.navbar-header -->
            <!-- .float-right -->
            <div class="float-right">
              <!-- uncollapsible block -->
              <div class="navbar-tools float-right">
                <!-- navigation right -->
                <ul class="nav navbar-nav">
                  <!-- Global search form -->
                  <li class="visible-xs-inline">
                    <a href="#chat-global-search" data-toggle="collapse" onclick="setTimeout(function(){vision.handleStickyLayout()}, 250)" title="Toggle Global Search">
                      <i class="icon-magnifier"></i><span class="sr-only">Toggle Global Search</span>
                    </a>
                  </li>
                  <!-- /Global search form -->
                  <!-- Members -->
                  <li>
                    <a id="members" href="#" data-toggle="tooltip-bottom" title="Members">
                      <i class="icon-people"></i>
                      <span class="badge badge-floated">34</span>
                    </a>
                  </li>
                  <!-- /Members -->
                  <!-- Activities -->
                  <li>
                    <a id="activities" href="#" data-toggle="tooltip-bottom" title="Activities">
                      <i class="fa fa-at"></i>
                    </a>
                  </li>
                  <!-- /Activities -->
                  <!-- Settings -->
                  <li class="dropdown">
                    <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" title="Settings">
                      <i class="icon-settings"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">Flagged Posts</a></li>
                      <li><a href="#">Pinned Posts</a></li>
                      <li><a href="#">Shared Files</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Room Info</a></li>
                      <li><a href="#">Archive This Room</a></li>
                      <li><a href="#">Mute Notifications</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Preferences</a></li>
                    </ul>
                  </li>
                  <!-- /Settings -->
                </ul>
                <!-- /.nav -->
              </div>
              <!-- /.navbar-tools -->
            </div>
            <!-- /.float-right -->
            <div class="clearfix visible-xs"></div>
            <!-- collapsible block form -->
            <div id="chat-global-search" class="navbar-right navbar-collapse collapse h-a">
              <!-- Global search form -->
              <form class="form-inline border-0">
                <div class="form-group has-clearable">
                  <input type="text" class="form-control form-control-pill" placeholder="Search...">
                  <button type="button" class="close btn-clearable"><i class="fa fa-times-circle"></i></button>
                </div>
              </form>
              <!-- /Global search form -->
            </div>
            <!-- /.navbar-collapse -->
          </div>
          <!-- /.container -->
        </nav>
        <!-- /.navbar -->
      </div>
      <!-- END APP HEADER -->
      <!-- BEGIN APP CONTENT -->
      <div id="app-content" class="app-content">
        <!-- BEGIN APP DRAWER -->
        <div id="app-drawer" class="drawerjs drawerjs-has-bottom-nav drawerjs-has-navbar">
          <div class="navbar navbar-inverse navbar-static-top">
            <div class="container-fluid">
              <div class="user-avatar user-avatar-inverse">
                <div class="dropdown dropdown-sm float-left">
                  <a href="#" class="avatar-wrapper has-hoverable-badge" data-toggle="dropdown">
                    <img class="avatar avatar-sm" :src="pro_pix" alt="">
                    <span class="avatar-badge online"><i class="fa fa-check"></i></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Online</a></li>
                    <li><a href="#">Idle</a></li>
                    <li><a href="#">Busy</a></li>
                    <li><a href="#">Offline</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <a href="#" data-toggle="dropdown">
                    <button type="button" class="float-right btn btn-compact"><i class="icon-options-vertical"></i></button>
                    <h5 class="avatar-title">{{user_fullname}}</h5>
                    <p class="avatar-hint"><small>@{{company}}</small></p>
                  </a>

                  <ul class="dropdown-menu dropdown-list dropdown-menu-right">
                    <li  v-on:click="showAccount = true" data-toggle="modal" data-target=".bd-example-modal-lg"><a href="/profile">Profile</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Invite People</a></li>
                    <li class="divider"></li>
                    <li><a href="#">About</a></li>
                    <li class="divider"></li>
                    <li><a href="/logout">Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- .drawer-inner -->
          <div class="drawerjs-inner">
            <!-- #drawer-menu -->
            <div id="drawer-menu" class="stacked-menu">
              <!-- .menu -->
              <ul class="menu">

                <!-- /.menu-item -->
                <li class="menu-header">
                  <!-- <button type="button" class="btn" data-toggle="tooltip" title="create new room" data-container="body"><span class="fa fa-plus"></span></button> -->
                  <h2>Channels</h2>
                </li>

                <div id="rooms">
                  <!-- /.menu-item -->
                    <li v-for="channel in channels" style="cursor: pointer;" :key="channel.team_name" class="menu-item channel menu-item-slim">
                        <a :id="channel.team_name" v-on:click="load_msg" data-key="channel.team_name" class="menu-link lv-highlight">
                          <i class="menu-icon fa fa-hashtag"></i>
                          <span :id="channel.team_name" class="menu-text">{{ channel.team_name }}</span>
                        </a>
                    </li>

                    <li v-if="channel_error" class="menu-item menu-item-slim active" style="cursor: pointer;">
                        <a class="menu-link" v-on:click="refresh_page('channel')">
                          <span class="menu-text">Error! please reload</span>
                        </a>
                    </li>
                  <!-- /.menu-item -->
                </div>
              </ul>
              <!-- /.menu -->

              <!-- .menu -->
              <ul class="menu">

                <!-- /.menu-item -->
                <li class="menu-header">
                  <!-- <button type="button" class="btn" data-toggle="tooltip" title="create new room" data-container="body"><span class="fa fa-plus"></span></button> -->
                  <h2>Chats</h2>
                </li>

                <div id="rooms">
                  <!-- /.menu-item -->
                    <li v-for="chat in chats" style="cursor: pointer;" :key="chat.id" class="menu-item chat menu-item-slim lv-highlight">
                        <a :id="chat.id" :href="chat.fullname" data-key="chat.id" v-on:click="load_individual_msg" class="menu-link lv-highlight">
                          <i class="menu-icon fa fa-at"></i>
                          <span :id="chat.id" class="menu-text">{{ chat.fullname }}</span><span class="badge btn-compactdanger">{{ chat.count }}</span>
                        </a>
                    </li>

                    <li v-if="user_error" class="menu-item menu-item-slim active" style="cursor: pointer;">
                        <a class="menu-link" v-on:click="refresh_page('user')">
                          <span class="menu-text">Error! please reload</span>
                        </a>
                    </li>
                  <!-- /.menu-item -->
                </div>
              </ul>
              <!-- /.menu -->
            </div>
            <!-- /#drawer-menu -->
          </div>
          <!-- /.drawer-inner -->
          <!-- compact toggler -->
          <ul class="nav drawerjs-nav drawerjs-nav-bottom nav-right">
            <li class="nav-item hidden-xs" data-toggle="tooltip" title="Toggle drawer" data-container="body">
              <a href="#" data-toggle="drawer-compact">
                <span class="sr-only">Toggle Compact Drawer</span>
                <span class="icon-toggle-compact" style="top:0"></span>
              </a>
            </li>
          </ul>
          <!-- /compact toggler -->
        </div>
        <!-- END APP DRAWER -->
        <!-- BEGIN APP DRAWER HOLDER -->
        <div id="app-drawer-holder">
          <!-- BEGIN CONTENT HEADING -->
          <!-- END CONTENT HEADING -->
          <!-- BEGIN CONTENT BODY -->
          <div class="app-content-inner">
            <!-- .reference-details -->
            <div class="reference-details has-side-right has-side-right-closed">

              <div id="app-drawer-holder" v-if='showAccount'>
                <!-- <Profile :fullname="user_fullname" :company="company" :image="pro_pix" @changePPix="changeProfilePix"/> -->
              </div>
              <!-- .reference-content   v-if='showAccount == false'-->
              <div id="reference-content" class="reference-content">
                <!-- .content-heading -->
                <div class="content-heading" v-if="is_group == true">
                  <!-- .app-content-inner -->
                  <div class="app-content-inner">
                    <!-- .page-header -->
                    <h3 class="page-header">{{header_name}} </h3>
                    <!-- <button class="btn btn-compact text-muted" data-toggle="tooltip-bottom" title="Edit the header"><i class="fa fa-pencil"></i></button> -->
                    <!-- <p class="noted text-truncate">Add the room description here. Placeat doloribus quas velit libero reiciendis deleniti, odio ab sint repudiandae accusamus.</p> -->
                  </div>
                  <!-- /.app-content-inner -->
                </div>

                <div class="content-heading" v-if="is_group == 'chat'">
                  <!-- .app-content-inner -->
                  <div class="app-content-inner">
                    <!-- .page-header -->
                    <h3 class="page-header">{{header_name}}</h3>
                    <!-- <button class="btn btn-compact text-muted" data-toggle="tooltip-bottom" title="Edit the header"><i class="fa fa-pencil"></i></button> -->
                  </div>
                  <!-- /.app-content-inner -->
                </div>

                  <div class="load_more_bar" v-if="show_load_bar == true" data-toggle="tooltip" title="Load More" v-on:click="load_more" style="cursor: pointer;z-index: 1000; opacity: 1;"><i class="fa fa-refresh"></i>&nbsp; {{load_msgs}}</div>

                <div class="content-heading" v-if="view_message_content == false">
                  <!-- .app-content-inner -->
                  <div class="app-content-inner">
                    <!-- .page-header -->
                    <h3 class="page-header">Welcome to Skrim</h3>
                    <p class="noted text-truncate">Get work done faster, share your progress and build for the future.</p>
                  </div>
                  <!-- /.app-content-inner -->
                </div>

                <!-- /.content-heading -->
                <!-- .reference-inner -->
                <div class="reference-inner"  v-if="view_message_content == true">
                  <!-- .post-wrapper -->

                  <div class="post-wrapper" id="msg_viewer">
                    <!-- .post-holder -->
                    <div id="post-holder" class="post-holder message-container">
                      <!-- .post-body -->
                      <div class="post-body">
                        <!-- .post-list -->
                        <div class="post-list">
                          <div class="loading-wrapper">
                            <div data-loader="line-scale" data-color="#969696" data-scale=".5"></div>
                          </div>
                          <!-- /.post-divider -->
                          <div v-for="(message, index) of messages" :key="message.id" style="overflow: visible;">
                            <!-- {{message}} -->
                            <div class="post-list-item post-bot hover-control">
                              <!-- .media -->
                              <div class="media">
                                <!-- .media-left -->
                                <div class="media-left">
                                  <div class="post-img">
                                    <div class="user-avatar">
                                      <a href="#" class="avatar-wrapper mr-0">
                                        <img class="avatar avatar-sm avatar-boot" :src="imageDisplay+message.profile_picture" :alt="message.profile_picture">
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <!-- /.media-left -->
                                <!-- .media-body -->
                                <div class="media-body">
                                  <div class="post-content">
                                    <div class="post-tools">
                                      <a class="hover-control-item" data-toggle="tooltip" title="Delete" style="cursor: pointer;"><i :id="message.id" v-on:click="delete_msg(index)" class="fa fa-trash-o"></i></a>

                                      <a class="hover-control-item" data-toggle="tooltip" v-if="message.reported == false" title="Flag" style="cursor: pointer;"><i v-on:click="flag_msg(index)" class="fa fa-flag"></i></a>

                                      <a class="hover-control-item active" data-toggle="tooltip" v-if="message.reported == true" title="UnFlag" style="cursor: pointer;"><i v-on:click="unflag_msg(index)" class="fa fa-flag active"></i></a>

                                    </div>
                                    <h5 class="post-heading"><a :href="message.fullname" :id="message.sender_id" v-on:click="load_individual_msg">
                                      <strong>{{message.fullname}}</strong>
                                      <strong v-if='message.isMe' class="isMe"> (You)</strong>
                                    </a> 
                                    <a href="#" class="text-muted">{{getTime(message.full_date)}}</a></h5>

                                    <small v-if="message.reported == true" class="text-danger">*Reported*</small>

                                    <p class="post-text">{{message.message}}</p>
                                    <div v-if="message.isFile == true" style="margin-top:10px; margin-bottom: 10px;">
                                      <img :src="imageDisplay+message.fileName" class="preview"/>
                                    </div>
                                  </div>
                                </div>
                                <!-- /.media-body -->
                                </div>
                                </div>
                                </div>
                          <!-- .post-list-item -->

                          <!-- /.post-list-item -->
                        </div>
                        <!-- /.post-list -->
                      </div>
                      <!-- /.post-body -->
                    </div>
                    <!-- /.post-holder -->
                    <!-- .post-creator -->
                    <div class="post-creator">
                      <form enctype="multipart/form-data" novalidate id="post-creator-frm" class="message_form">
                        <div class="input-group input-group-pill">
                          <input type="text" id="postInput" autocomplete="off" v-model="message_txt" class="form-control" placeholder="Write a message..." name="message">
                          <span class="input-group-btn">
                            <button class="btn btn-pill btn-success" v-on:click="send_msg" type="submit"><i class="fa fa-send fa-lg"></i> Send</button>
                          </span>
                        </div>
                        <div class="help-block">
                          <!-- <span class="count arrow text-muted">Attachment</span> -->
                          <!--preview file to be uploaded-->
                          <div class="displayImage">
                            <button class="btn btn-unstyled btn-compact"><i class="fa fa-smile-o fa-lg"></i></button>
                            <label class="btn btn-file btn-unstyled btn-compact">
                              <i class="fa fa-paperclip fa-lg"></i>
                              <input type="file" id="postAttachment" name="message_pic" class="file_msg" @change="filesChange($event.target.name, $event.target.files);" readonly accept="image/*">
                            </label>
                            <img  v-if="displayImage" class="preview" id='displayImage'/>
                          </div>

                        </div>
                      </form>
                    </div>
                    <!-- /.post-creator -->
                  </div>
                  <!-- /.post-wrapper -->
                </div>
                <!-- /.reference-inner -->
              </div>
            </div>
            <!-- /.reference-details -->
          </div>
          <!-- END CONTENT BODY -->
        </div>
        <!-- END APP DRAWER HOLDER -->
      </div>
      <!-- END APP CONTENT -->
      <div id="snackbar_msg"></div>
    </div>
    <!-- END APP MAIN -->
</template>

<style type="text/css" scoped>

  @import "../../static/assets/base/flag-icon-css/css/flag-icon.min.css";
  @import "../../static/assets/base/simple-line-icons/css/simple-line-icons.min.css";
  @import "../../static/assets/base/animate.css/animate.min.css";
  @import "../../static/assets/base/loaders/loaders.min.css";
  @import "../../static/assets/base/pace/themes/vision/pace-theme-minimal.css";
  @import "../../static/assets/base/perfect-scrollbar/css/perfect-scrollbar.min.css";
  @import "../../static/assets/base/dragula.js/dragula.min.css";
  @import "../../static/assets/base/toastr/toastr.min.css";
  @import "../../static/assets/base/sweetalert/sweetalert.min.css";
  @import "../../static/assets/layouts/drawerjs/css/stacked-menu.min.css";
  @import "../../static/assets/layouts/drawerjs/css/drawerjs.min.css";
  @import "../../static/assets/layouts/layout/css/layout.min.css";
  @import "../../static/assets/components/css/components.min.css";
  @import "../../static/assets/components/css/plugins.min.css";
  @import "../../static/assets/pages/css/chat.css";
  @import "../../static/style.css";
  @import "../../static/snackbar.css";
  
</style>

<script>

var key = '';
var previousType;

/*
* SOcket basic handling goes here before being integrated with Vue Itself
* Yeahhh
*/
const
    io = require("socket.io-client"),
    ioClient = io.connect("http://localhost:7000");
console.log(ioClient)

/*End socket*/

var PageData = {
  channels: [],
  chats: [],
  is_group: false,
  pro_pix: '',
  view_message_content: false,
  current_user: '',
  messages: [],
  message_txt: '',
  user_error: false,
  channel_error: false,
  header_name: '',
  user_fullname: '',
  company: '',
  show_load_bar: false,
  defaultPageNumber: 1,
  previousData: '',
  previousDataType: '',
  load_msgs: 'Load More',
  showAccount: false,
  displayImage: false,
  imageDisplay: 'http://127.0.0.1:3000/file/load?file='
}


var PageMethods =  {

    load_msg: function (event) {
      // `this` inside methods points to the Vue instance
      // console.log(event)
      event.preventDefault();
      console.log(event.currentTarget.getAttribute('id'));
      PageData.is_group = true;
      PageData.header_name = event.target.id;
      PageData.displayImage = false
      // PageData.current_user = event.target.id;
      PageData.current_user = event.currentTarget.getAttribute('id');

      $(".lv-highlight").removeClass("active");
      $("#"+event.target.id).addClass("active")

      //clear message form
      $('#postAttachment').val('')

      /* lets set previousData so that when user clicks 
      * on load more, it would be able to fetch more data 
      * using the previously searched data
      */
      PageData.previousData = event.target.id;
      PageData.previousDataType = 'group';
      PageData.defaultPageNumber = 1;

      $.get('http://localhost:3000/chat/'+event.target.id+'/'+key+'/'+PageData.defaultPageNumber,
      function (data, status) {

        PageData.messages = [];

          if (data.res == false && data.message == 'no_msg') {

            console.log(PageData.messages)
            PageData.view_message_content = true;
            $("#postInput").focus();

          }
          else if (data.res == false && data.message == 'invalid_token') {

            //redirect user to login page
            this.$router.push('/login');

          }
          else if (data.res == true && data.message == 'true') {

            for (var i = data.data.length - 1; i >= 0; i--) {
              console.log(data.data[i])
              PageData.messages.push(data.data[i]);
              PageData.view_message_content = true;
              $("#postInput").focus();
              // PageData.current_user = data.data[i].team_name;
            }

            //scroll to the bottom
            setTimeout(function () {
              $('.message-container').scrollTop(1E10);
            },500)

          }
          else {
            snack('Sorry an error occured')
          }
      });
    },
    load_individual_msg: function (event) {
      // `this` inside methods points to the Vue instance
      // console.log(event)
      event.preventDefault();

      var current_element = event.currentTarget.getAttribute('id');
      PageData.current_user = current_element;
      PageData.displayImage = false

      //clear message form
      $('#postAttachment').val('')

      if (this.$session.get("id") == current_element) {
        snack('You can\'t message yourself');
      }

      else{

        PageData.header_name = event.currentTarget.getAttribute('href');
        PageData.is_group = 'chat';

        $('.lv-highlight').removeClass('active');
        $("#"+event.currentTarget.getAttribute('id')).addClass('active')

        console.log(current_element)
        console.log(event.currentTarget.getAttribute('href'))

        /* lets set previousData so that when user clicks 
        * on load more, it would be able to fetch more data 
        * using the previously searched data
        */
        PageData.previousData = current_element;
        PageData.previousDataType = 'chat';
        PageData.defaultPageNumber = 1;

        $.get('http://localhost:3000/chat/user/'+current_element+'/'+key+'/'+PageData.defaultPageNumber,
        function(data, status){

            //lET EMPTY THE MESSAGE ARRAY BOX
            PageData.messages = [];
            console.log(data)

            if (data.res == false && data.message == 'no_msg') {

              PageData.view_message_content = true;
              $('#postInput').focus();

            }
            else if (data.res == false && data.message == 'invalid_token') {

              //redirect user to login page
              this.$router.push('/login');

            }
            else if ( data.res == true && data.message == 'true' ) {

              for (var i = data.data.length - 1; i >= 0; i--) {
                console.log(data.data[i])
                PageData.messages.push(data.data[i]);
                PageData.view_message_content = true;
                $('#postInput').focus();
                //change unread messages to 0
                $('#'+current_element).find('.badge').html('0');
              }

              //scroll to the bottom
              setTimeout(function () {
                $('.message-container').scrollTop(1E10);
              },500)

            }
            else {
              snack('Sorry an error occured')
            }
        });
      }
    },
    getTime: function(date_string){
      var date = new Date(date_string);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var locale = 'en-uk',
      month = date.toLocaleString(locale, { month: 'long' });
      console.log(date)
      var strTime = date.getDate() + '-' + month + '-' + date.getFullYear() + ', ' + hours + ':' + minutes + ' ' + ampm;
      // var strTime = month;

      return strTime;
    },
    send_msg: function(event){

        /*
        * This function handles every aspect of sending a message
        *, either to a group, or and individual, or even file messages
        */
        event.preventDefault();
        var message = /(\S+)/;//REGEX FOR MESSAGE VALIDATION
        console.log(PageData.current_user);

        if (message.test(PageData.message_txt) && PageData.is_group == 'chat' && PageData.current_user != '') {

          // snack("hay")
          //HANDLES SENDING OF PRIVATE MESSAGE TO AN INDIVIDUAL
          $.post('http://localhost:3000/chat/send/'+key, {message: PageData.message_txt, receiver_id: PageData.current_user},
            function(data, status){

                console.log(data)

                if (data.res == false && data.message == 'no_msg') {

                  console.log(PageData.messages)

                }
                else if (data.res == false && data.message == 'invalid_token') {

                  //redirect user to login page
                  this.$router.push('/login');

                }
                else if (data.res == true && data.message == 'true') {
                  //empty the textbox to send message
                  PageData.message_txt = '';
                  PageData.messages.push(data.data);
                  PageData.is_group = 'chat';
                  PageData.view_message_content = true;

                  //scroll to the bottom
                  setTimeout(function () {
                    $('.message-container').scrollTop(1E10);
                  },500);

                }
                else {

                  snack('Sorry an error occured, try again');

                }
            });

        }
        else if (PageData.is_group == 'file' && PageData.current_user != '' && previousType == true) {
          //group sending of file message
          var form = $('.message_form')[0] // You need to use standard javascript object here

          console.log(PageData.current_user)
          console.log(PageData.previousData)

          var formData = new FormData(form)

          //HANDLES SENDING OF PRIVATE MESSAGE TO AN INDIVIDUAL

          $.ajax({
              url: 'http://localhost:3000/file/upload/chat/'+PageData.previousData+'/'+key,
              type: 'POST',
              cache: false,
              contentType: false,
              data: formData,
              processData: false,
              success: function (data) {

                console.log(data)

                if (data.res == false && data.message == 'invalid') {

                  snack("Upload Images Only")

                }
                else if (data.res == false && data.message == 'invalid_token') {

                  //redirect user to login page
                  this.$router.push('/login');

                }
                else if (data.res == true && data.message == 'true') {

                  //empty the textbox to send message
                  alert(data.message)
                  PageData.message_txt = '';
                  PageData.messages.push(data.data);
                  PageData.is_group = true;
                  PageData.view_message_content = true;
                  PageData.displayImage = false;
                  //scroll to the bottom
                  setTimeout(function () {
                    $('.message-container').scrollTop(1E10);
                  },500)

                }
                else {

                  snack('Sorry an error occured, try again');

                }

            },
            error: function () {
              // PageData.upload_loading = false;
              snack('Sorry an error occured');
            }
          });

        }
        else if (PageData.is_group == 'file' && PageData.current_user != '' && previousType == 'chat') {
          //individual sending of file message
          var form = $('.message_form')[0] // You need to use standard javascript object here

          console.log(PageData.current_user)
          console.log(PageData.previousData)

          var formData = new FormData(form)

          //HANDLES SENDING OF PRIVATE MESSAGE TO AN INDIVIDUAL

          $.ajax({
              url: 'http://localhost:3000/file/upload/chat/'+key+'?receiver='+PageData.previousData,
              type: 'POST',
              cache: false,
              contentType: false,
              data: formData,
              processData: false,
              success: function (data) {

                console.log(data)

                if (data.res == false && data.message == 'invalid') {

                  snack("Upload Images Only")

                }
                else if (data.res == false && data.message == 'invalid_token') {

                  //redirect user to login page
                  this.$router.push('/login');

                }
                else if (data.res == true && data.message == 'true') {

                  //empty the textbox to send message
                  PageData.message_txt = '';
                  PageData.messages.push(data.data);
                  PageData.is_group = true;
                  PageData.view_message_content = true;
                  PageData.displayImage = false;
                  //scroll to the bottom
                  setTimeout(function () {
                    $('.message-container').scrollTop(1E10);
                  },500)

                }
                else {

                  snack('Sorry an error occured, try again');

                }

            },
            error: function () {
              // PageData.upload_loading = false;
              snack('Sorry an error occured');
            }
          });

        }
        else if (message.test(PageData.message_txt) && PageData.is_group == true && PageData.current_user != '') {

          //HANDLES SENDING OF PRIVATE MESSAGE TO A GROUP
          $.post('http://localhost:3000/chat/send/'+PageData.current_user+'/'+key, {message: PageData.message_txt},
            function(data, status){

                if (data.res == false && data.message == 'no_msg') {

                  console.log(PageData.messages)

                }
                else if (data.res == false && data.message == 'invalid_token') {

                  //redirect user to login page
                  this.$router.push('/login');

                }
                else if (data.res == true && data.message == 'true') {

                  //empty the textbox to send message
                  PageData.message_txt = '';
                  PageData.messages.push(data.data);
                  PageData.is_group = true;
                  PageData.view_message_content = true;

                  //scroll to the bottom
                  setTimeout(function () {
                    $('.message-container').scrollTop(1E10);
                  },500)

                }
                else {

                  snack('Sorry an error occured, try again');

                }
            });

        }
        else {

          snack('Please input a valid message');
          console.log(PageData.current_user);

        }


    },
    delete_msg: function(index) {
        //delete a message
        // event.preventDefault()
        var $this = this;
        // console.log($this.messages);
        // console.log($this.messages[0]);

        // console.log($this.messages[index].id);

        $.ajax({url: 'http://localhost:3000/chat/'+key, type: 'DELETE', data: {msg_id: $this.messages[index].id},success: function(data, status){

              console.log(data)
              if (data.res == false && data.message == 'msg_not_found') {

               console.log(data)

              }
              else if (data.res == true && data.message == 'true') {

                console.log(data)
                $this.messages.splice(index, 1);

              }
              else if (data.res == false && data.message == 'invalid_token') {

                //redirect user to login page
                this.$router.push('/login');

              }
              else {
                snack('Sorry an error occured')
              }
        }});

    },
    flag_msg: function (index) {

        var $this = this;

        console.log(PageData.messages[index])

        $.ajax({url: 'http://localhost:3000/chat/report/'+key, type: 'POST', data: {msg_id: $this.messages[index].id, message: $this.messages[index].message}, success: function(data, status){

              console.log(data)

              if (data.res == false && data.message == 'message_not_exist') {

               snack('Could not flag this message');

              }
              else if (data.res == true && data.message == 'true') {

                $this.messages[index].reported = true;
                snack('This message has been reported');

              }
              else if (data.res == false && data.message == 'invalid_token') {

                //redirect user to login page
                this.$router.push('/login');

              }
              else if (data.res == false && data.message == 'invalid_msg_id') {

                //Invalid message id
                snack('Could not flag this message');

              }
              else if (data.res == false && data.message == 'invalid_message') {

                //Invalid message
                snack('Could not flag this message');

              }
              else {

                snack('Sorry an error occured');

              }

        }});

    },
    unflag_msg: function (index) {

        var $this = this;

        console.log(PageData.messages[index])

        $.ajax({url: 'http://localhost:3000/chat/unreport/'+key, type: 'POST', data: {msg_id: $this.messages[index].id, message: $this.messages[index].message}, success: function(data, status){

              console.log(data)

              if (data.res == false && data.message == 'message_not_exist') {

               // console.log(data)
               snack("Could not flag this message");

              }
              else if (data.res == true && data.message == 'true') {

                console.log(data)
                $this.messages[index].reported = false;
                snack("This message has been unreported");

              }
              else if (data.res == false && data.message == 'invalid_token') {

                //redirect user to login page
                this.$router.push('/login');

              }
              else if (data.res == false && data.message == 'invalid_msg_id') {

                //Invalid message id
                snack("Could not flag this message");

              }
              else if (data.res == false && data.message == 'invalid_message') {

                //Invalid message
                snack("Could not flag this message");

              }
              else {

                snack('Sorry an error occured');

              }

        }});

    },
    load_more: function () {

      //check if it's a group chat relod
      PageData.defaultPageNumber++;
      
      if (PageData.previousDataType == 'group') {

        PageData.load_msgs = 'Loading...'

        $.get('http://localhost:3000/chat/'+PageData.previousData+'/'+key+'/'+PageData.defaultPageNumber,
        function (data, status) {

            if (data.res == false && data.message == 'no_msg') {

              console.log(PageData.messages)
              PageData.view_message_content = true;
              PageData.load_msgs = 'Load more - no new message found';

            }
            else if (data.res == false && data.message == 'invalid_token') {

              //redirect user to login page
              this.$router.push('/login');

            }
            else if (data.res == true && data.message == 'true') {

              for (var i = data.data.length - 1; i >= 0; i--) {
                console.log(data.data[i])
                PageData.messages.unshift(data.data[i]);
                PageData.view_message_content = true;
                // PageData.current_user = data.data[i].team_name;
              }

            }
            else {
              snack('Sorry an error occured')
            }
        });
      }

      //or if it's individual reload
      else if (PageData.previousDataType == 'chat') {

        PageData.load_msgs = 'Loading...'

        $.get('http://localhost:3000/chat/user/'+PageData.previousData+'/'+key+'/'+PageData.defaultPageNumber,
        function(data, status){

            //lET EMPTY THE MESSAGE ARRAY BOX
            console.log(data)

            if (data.res == false && data.message == 'no_msg') {

              PageData.view_message_content = true;
              PageData.load_msgs = 'Load more - no new message found';

            }
            else if (data.res == false && data.message == 'invalid_token') {

              //redirect user to login page
              this.$router.push('/login');

            }
            else if ( data.res == true && data.message == 'true' ) {

              for (var i = data.data.length - 1; i >= 0; i--) {
                console.log(data.data[i])
                PageData.messages.unshift(data.data[i]);
                PageData.view_message_content = true;
                //change unread messages to 0
                $('#'+current_element).find('.badge').html('0');
              }

            }
            else {
              snack('Sorry an error occured')
            }
        });
      }

    }
    ,
    refresh_page: function (type) {
      if (type == 'channel') {
        fetchTeamChats();
      }
      else if (type == 'user') {
        fetchUserChats();
      }
    },
    changeProfilePix (value) {
      // snack(value)
      PageData.pro_pix = 'http://127.0.0.1:3000/file/load?file='+value;
    },
    filesChange (fieldName, fileList) {

        // handle file changes
        var file = $(".file_msg")[0].files[0];

        PageData.displayImage = true

        //display file to be uploaded in img tag
        var reader = new FileReader();

        var $this = this;

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
          return function(e) {
            // Render thumbnail.
            console.log(e.target.result);
            $("#displayImage").attr("src",e.target.result);
            previousType = PageData.is_group
            PageData.is_group = 'file';
          };
        })(file);

        // Read in the image file as a data URL.
        reader.readAsDataURL(file);
   
    }
  }

import UploadFile from './UploadFile'

export default {
  name: 'Home',
  data () {
    return PageData
  },
  components: {
    UploadFile
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

    PageData.company = this.$session.get('data').company;
    PageData.user_fullname = this.$session.get('data').fullname;
    //fetch homepage contents
    fetchUserChats()
    fetchTeamChats();

    console.log(this.$session.get('data'));

    PageData.pro_pix = 'http://127.0.0.1:3000/file/load?file='+ this.$session.get('image');
    console.log(PageData.pro_pix)
    // /*Load more contents for individual chat when user scrolls to top of page*/

    // /*End of loading extra content for individual chat*/

  },
  updated: function () {

      console.log(PageData.messages.length);

  },
  watch: {
      'pro_pix': function(){
          PageData.pro_pix = 'http://127.0.0.1:3000/file/load?file='+ this.$session.get('image');
      },
      'messages': function (val, oldVal) {
        
        if (val.length > 9) {

          PageData.show_load_bar = true;

        }

        else if (val.length <= 9) {

          PageData.show_load_bar = false;

        }

      }
  }
}

function fetchUserChats () {

  $.get('http://localhost:3000/chat'+'/'+key,
  function(data, status){
    console.log(data)
    console.log(data.data)
    if (data.res == true && data.message == 'true') {
      PageData.user_error = false
      for (var i = 0; i < data.data.length; i++) {
        PageData.chats.push(data.data[i]);
      }          
    }
    else if (data.res == true && data.message == 'empty') {
      //no channel found
    }
    else if (data.res == false && data.message == 'invalid_token') {

      //redirect user to login page
      this.$router.push('/login');

    }
    else{
      PageData.user_error = true;
    }
  });
 }

function fetchTeamChats () {

    $.get('http://localhost:3000/team'+'/'+key,
    function(data, status){

      console.log(data)
      console.log(data.data)
      if (data.res == true && data.message == 'true') {
        PageData.channel_error = false;
        for (var i = 0; i < data.data.length; i++) {
          PageData.channels.push(data.data[i]);
        }
      }
      else if (data.res == true && data.message == 'empty') {
        //no channel found
      }
      else if (data.res == false && data.message == 'invalid_token') {

        //redirect user to login page
        this.$router.push('/login');

      }
      else{
        PageData.channel_error = true;
      }
  });
    
}

//Loading functionality
var loading_interval;

function move () {
  var elem = document.getElementById('myBar');

  var width = 10
  clearInterval(loading_interval);
  loading_interval = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      width = 10
      elem.style.display = 'none'
    }
    else {
      elem.style.display = 'block'
      width++
      elem.style.width = width + '%'
    }
  }
}

$(document).ajaxStart(function () {
  console.log('starting')
  move()
})

$(document).ajaxComplete(function () {
  console.log('ending')
  var elem = document.getElementById('myBar')
  clearInterval(loading_interval)
  elem.style.display = 'none'
})

function snack(text) {
    // Get the snackbar DIV
    var x = $('#snackbar_msg')

    // Add the "show" class to DIV
    x.addClass('show')

    $('#snackbar_msg').html(text)
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.removeClass("show") }, 3000);
    
};
</script>
