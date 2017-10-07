<template>
	<div>
		<section class="content-header">
		  	<h1>
			    My Account
			    <small>Control panel</small>
		  	</h1>
		  	<ol class="breadcrumb">
		    	<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
		    	<li class="active">My Account</li>
		  	</ol>
		</section>

	    <!-- Main content -->
	    <section class="content">
	    	<div class="container">
	    		<form>
	    			<div class="row">
		    			<div class="col-md-10">
			    			<label>Full Name: </label>
			    			<div class="">
							  	<input type="text" class="form-control" placeholder="Full Name" aria-describedby="basic-addon1" v-model="fullName">
							</div>
						</div>
					</div>
					<div class="row">
		    			<div class="col-md-10">
			    			<label>Username: </label>
			    			<div class="">
							  	<input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1" v-model="username">
							</div>
						</div>
					</div>
					<div class="row">
		    			<div class="col-md-10">
			    			<label>Email: </label>
			    			<div class="input-group">
								<span class="input-group-addon" id="basic-addon1">@</span>
							  	<input type="email" class="form-control" placeholder="Username" aria-describedby="basic-addon1" v-model="email">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-10">
			    			<button class="btn btn-primary" type="button" v-on:click="submitForm">Update</button>
						</div>
					</div>
	    		</form>
		    </div>
	    </section>
    </div>
</template>

<script type="text/javascript">
	export default {
		name: 'staff-account-details',
		data() {
			return {
				id: '',
				user_id: '',
				fullName: '',
				username: '',
				email: '',
			};
		},
		mounted() {
			this.$Progress.start()
			this.$http.get(this.$store.getters.getApiBaseUrl+'/account').then(response => {
				    //responseData = response.body
				    this.id = response.body.staff[0].id;
				    this.user_id = response.body.staff[0].user_id;
				    this.fullName = response.body.staff[0].user.name;
				    this.username = response.body.staff[0].username;
				    this.email = response.body.staff[0].email;
				    this.$Progress.finish()
				  }, response => {
				    // error callback
				    this.$Progress.fail()
				  });
		},
		methods: {
			submitForm: function() {
				var form = new FormData();
				form.append('fullname', this.fullName);
				form.append('username', this.username);
				form.append('email', this.email);
				form.append('id', this.id);
				form.append('user_id', this.user_id);
				this.$http.post('http://localhost:8000/api/account', form).then(response => {

				    // get status
				    response.status;

				    // get status text
				    response.statusText;

				    // get 'Expires' header
				    response.headers.get('Expires');

				    // get body data
				    console.log(response.body);

				    alert("Staff Account Updated")

				}, response => {
				    alert("An Error Occured")
				});
			}
		}
	}
</script>