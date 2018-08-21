<!-- template for the modal component -->
<template>

  <div>

      <!-- Large modal -->
      <div class="modal fade bd-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">

            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">

              <div class="container-fluid">

                <div class="row">
                    <div class="col-md-4">

                      <img :src="profile_picture" class="img-responsive center img-thumbnail img-circle card-img-top" alt="username.toUpperCase()" style="border: 2px solid #ddd;padding: 10px;">
                      <br>
                      <a href="#" class="btn btn-primary center" v-on:click='openFile' style="margin: auto; margin-left: 35px; margin-top: 10px;" v-if="upload_view == false && upload_loading == false">Open Image Manager</a>

                      <label v-if="upload_loading"><h5>Loading.......</h5></label>

                      <div v-if="upload_view">
                        <a href="#" class="btn btn-primary center" v-on:click='filesSubmit' style="margin: auto; margin-left: 35px; margin-top: 10px;">Update Image</a>

                        <a href="#" class="btn btn-primary center" v-on:click='filesCancel' style="margin: auto; margin-left: 35px; margin-top: 10px;">Cancel Image</a>
                      </div>

                      <form enctype="multipart/form-data" novalidate class="propic_form">

                        <input type="file" name="profile_pic" id="profile_pic" class="profile_pic" style="display: none;" @change="filesChange($event.target.name, $event.target.files);" accept="image/*">

                      </form>

                    </div>

                </div>

              </div>

            </div>

            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
            </div>

          </div>
        </div>
      </div>
      <div id="snackbar_msg"></div>
  </div>

</template>

<style type="text/css" scoped>

  @import '../../static/profile.css';
  @import "../../static/snackbar.css";

</style>

<script>
var key = ''

const PageData = {
  profile_picture: "",
  upload_view: false,
  fileList: '',
  upload_loading: false
}

const PageMethods = {
  openFile: function () {
    $('#profile_pic').click()
  },
  filesSubmit() {

    if (!PageData.fileList.length) return;

    var form = $('.propic_form')[0] // You need to use standard javascript object here

    console.log(form)

    var formData = new FormData(form)

    console.log(formData)
    var $this = this;
    PageData.upload_loading = true
    PageData.upload_view = false

    $.ajax({
        url: 'http://127.0.0.1:3000/file/upload/profile/'+key,
        type: 'POST',
        cache: false,
        contentType: false,
        data: formData,
        processData: false,
        success: function (data) {

          PageData.upload_loading = false;

          if (data.res == false && data.message == 'invalid') {

            snack('Please use a valid image file that is less than 2MB')


          }
          else if (data.res == false && data.message == 'invalid_token') {

            //redirect user to login page
            snack('Session has expired, please re-login')
            $this.$router.push('/login')

          }
          else if ( data.res == true && data.message == 'true' ) {

            $this.$session.set('image', data.data)
            PageData.upload_view = false;
            snack('Successfully updated profile picture')
            $this.$emit('changePPix', data.data)

          }
          else {
            snack('Sorry an error occured')
          }

      },
      error: function () {
        PageData.upload_loading = false;
        snack('Sorry an error occured');
      }
    });
  },
  filesChange (fieldName, fileList) {

    // handle file changes
    console.log($(".profile_pic")[0].files[0]);

    var file = $(".profile_pic")[0].files[0];

    var reader = new FileReader();

    var $this = this;

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        console.log(e.target.result);
        PageData.profile_picture = e.target.result;
        PageData.upload_view = true;
        PageData.fileList = fileList;

      };
    })(file);

    // Read in the image file as a data URL.
    reader.readAsDataURL(file);
   
  },
  filesCancel: function () {
    PageData.upload_view = false;
  }
}

export default {
  name: 'Profile',
  props: ['fullname', 'company', 'image'],
  methods: PageMethods,
  data: function () {
    return PageData
  },
  created: function () {
    key = this.$session.get('tokenizer');
    PageData.profile_picture = this.$props.image;
  },
  beforeMount: function () {
    $('#myModal').modal('show');
  }
}


function snack(text) {
    // Get the snackbar DIV
    var x = $('#snackbar_msg')

    // Add the "show" class to DIV
    x.addClass('show')

    $('#snackbar_msg').html(text)
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.removeClass("show") }, 3000);
    
};

$('#myModal').on('hidden.bs.modal', function () {
  // do something…
  alert("yoo");
})
</script>
