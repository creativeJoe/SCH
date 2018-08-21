        <!-- BEGIN APP DRAWER HOLDER -->
        <div id="app-drawer-holder">
          <!-- BEGIN CONTENT HEADING -->
          <!-- END CONTENT HEADING -->
          <!-- BEGIN CONTENT BODY -->
          <div class="app-content-inner">
            <!-- .reference-details -->
            <div class="reference-details has-side-right has-side-right-closed">
              <!-- .reference-content -->
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

                  <div class="load_more_bar" v-if="show_load_bar == true" data-toggle="tooltip" title="Load More" v-on:click="load_more" style="cursor: pointer;"><i class="fa fa-refresh"></i>&nbsp; {{load_msgs}}</div>

                <div class="content-heading" v-if="view_message_content == false">
                  <!-- .app-content-inner -->
                  <div class="app-content-inner">
                    <!-- .page-header -->
                    <h3 class="page-header">Welcome to SwitchCaseHub</h3>
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
                                        <img class="avatar avatar-sm avatar-boot" src="/static/assets/globals/img/dummy/avatars/boot.png" alt="System boot">
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
                                    <h5 class="post-heading"><a :href="message.fullname" :id="message.sender_id" v-on:click="load_individual_msg"><strong>{{message.fullname}}</strong></a> <a href="#" class="text-muted">{{getTime(message.full_date)}}</a></h5>

                                    <small v-if="message.reported == true" class="text-danger">*Reported*</small>

                                    <p class="post-text">{{message.message}}</p>
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
                      <form id="post-creator-frm">
                        <div class="input-group input-group-pill">
                          <input type="text" id="postInput" autocomplete="off" v-model="message_txt" class="form-control" placeholder="Write a message...">
                          <span class="input-group-btn">
                            <button class="btn btn-pill btn-success" v-on:click="send_msg" type="submit">Send</button>
                          </span>
                        </div>
                        <div class="help-block">
                          <button class="btn btn-unstyled btn-compact"><i class="fa fa-smile-o fa-lg"></i></button>
                          <label class="btn btn-file btn-unstyled btn-compact">
                            <i class="fa fa-paperclip fa-lg"></i>
                            <input type="file" id="postAttachment" multiple>
                          </label>
                          <span class="count arrow text-muted">Attachment</span>
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