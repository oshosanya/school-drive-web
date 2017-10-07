<template>
	<div class="container-fluid">
		<form>
			<div class="row">
				<div class="col-md-4">
					<label>First Name: </label>
					<input type="text" name="first_name" class="form-control" v-model="first_name">
				</div>
				<div class="col-md-4">
					<label>Last Name: </label>
					<input type="text" name="last_name" class="form-control" v-model="last_name">
				</div>
				<div class="col-md-4">
					<label>Other Name: </label>
					<input type="text" name="other_name" class="form-control" v-model="other_name">
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<label>Email Address: </label>
					<input type="email" name="email" class="form-control" v-model="email">
				</div>
				<div class="col-md-4">
					<label>Phone Number: </label>
					<input type="number" name="phone_number" class="form-control" v-model="phone_number">
				</div>
				<div class="col-md-4">
					<label>Role: </label>
					<select class="form-control" v-model="role">
						<option value="" selected="selected">--ROLE--</option>
						<option value="1"> Admin</option>
						<option value="2"> Student</option>
						<option value="3"> Staff</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<label>House Address: </label>
					<textarea class="form-control" v-model="house_address"></textarea>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<label>Gender: </label>
					<select name="gender" class="form-control" v-model="gender">
						<option value="">--GENDER--</option>
						<option value="female">FEMALE</option>
						<option value="male">MALE</option>
					</select>	
				</div>
				<div class="col-md-4">
					<label>State of Origin: </label>
					<input type="text" name="state_of_origin" class="form-control" v-model="state_of_origin">
				</div>
				<div class="col-md-4">
					<label>Local Government: </label>
					<input type="text" name="lga" class="form-control" v-model="lga">
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<label>Date of Birth: </label>
					<input type="date" name="date_of_birth" class="form-control" v-model="date_of_birth">
				</div>
				<div class="col-md-4">
					<label>Nationality: </label>
					<input type="text" name="nationality" class="form-control" v-model="nationality">
				</div>
				<div class="col-md-4">
					<label>Religion: </label>
					<input type="text" name="religion" class="form-control" v-model="religion">
				</div>
			</div>
			<div class="row">
				<div class="col-md-3 pull-right">
					<button class="btn btn-success btn-lg pull-right">Submit</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script type="text/javascript">
    import axios from 'axios'
	export default {
		name: 'create-users',
		data() {
			return {
				first_name: '',
				last_name: '',
				email: '',
				role: '',
				errors: [],
			};
		},
		created() {
			var api_url = this.$store.getters.getApiBaseUrl
			axios.get(api_url+'class')
			.then(response => {
				this.posts = response.data
			})
			.catch(e => {
				this.errors.push(e)
			})
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