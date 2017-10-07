<template>
	<div>
		<section class="content-header">
		  	<h1>
			    View Mock Results
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
	    		<div class="row">
	    			<form>
	    				<div class="col-md-3">
	    					<select class="form-control" v-model="level">
	    						<option disabled="disabled" value="">CLASS</option>
	    						<option :value="level.value" v-for="level in levels">{{ level.name }}</option>
	    					</select>
	    				</div>
	    				<div class="col-md-3">
	    					<select class="form-control" v-model="division">
	    						<option value="">DIVISION</option>
	    					</select>
	    				</div>
	    				<div class="col-md-3">
	    					<select class="form-control" v-model="term">
	    						<option value="">TERM</option>
	    					</select>
	    				</div>
	    				<div class="col-md-3">
	    					<select class="form-control" v-model="session">
	    						<option value="">SESSION</option>
	    					</select>
	    				</div>
	    			</form>
	    		</div>
	    	</div>
	    </section>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'results-mock',
		data() {
			return {
				level: '',
				levels: [
				],
				division: '',
				term: '',
				session: ''
			}
		},
		mounted() {
			this.$Progress.start()
			this.$http.get(this.$store.getters.getApiBaseUrl+'/settings/classes').then(response => {
				var i = 0;
				for(i=0; i<response.body.classes.length; i++)
				{
					var x = { name: response.body.classes[i].class, value: response.body.classes[i].class }
					this.levels.push(x)
				}
			    //responseData = response.body
			    // this.id = response.body.staff[0].id;
			    // this.user_id = response.body.staff[0].user_id;
			    // this.fullName = response.body.staff[0].user.name;
			    // this.username = response.body.staff[0].username;
			    // this.email = response.body.staff[0].email;
			    console.log(response.body)
			    this.$Progress.finish()
			}, response => {
			    // error callback
			    this.$Progress.fail()
			});
		}
	}
</script>