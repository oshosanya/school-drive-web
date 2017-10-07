<template>
	<div class="container">
    <div class="row vertical-offset-100">
    	<div class="col-md-4 col-md-offset-4">
    		<div class="panel panel-default">
			  	<div class="panel-heading">
			    	<h3 class="panel-title">Please sign in</h3>
			 	</div>
			  	<div class="panel-body">
			    	<form accept-charset="UTF-8" role="form">
                    <fieldset>
			    	  	<div class="form-group">
			    		    <input class="form-control" placeholder="E-mail" name="email" type="text" v-model="username">
			    		</div>
			    		<div class="form-group">
			    			<input class="form-control" placeholder="Password" name="password" type="password" value="" v-model="password">
			    		</div>
			    		<div class="checkbox">
			    	    	<label>
			    	    		<input name="remember" type="checkbox" value="Remember Me"> Remember Me
			    	    	</label>
			    	    </div>
			    	    <button class="btn btn-lg btn-success btn-block" type="button" v-on:click="tryAuth">Login</button>
			    	</fieldset>
			      	</form>
			    </div>
			</div>
		</div>
	</div>
</div>
</template>

<style>
body{
    /*background: url(http://mymaplist.com/img/parallax/back.png);
	background-color: #444;
    background: url(http://mymaplist.com/img/parallax/pinlayer2.png),url(http://mymaplist.com/img/parallax/pinlayer1.png),url(http://mymaplist.com/img/parallax/back.png);*/    
}

.vertical-offset-100{
    padding-top:100px;
}
</style>

<script type="text/javascript">
    import axios from 'axios'
    export default {
		name: 'Login',
		data() {
			return {
				username: '',
				password: '',
			};
		},
		methods: {
			tryAuth: function(username, password) {
				var credentials = {
					username: this.username,
					password: this.password,
                }

                var router = this.$router

                axios.post('http://localhost:8000/api/auth', credentials)
                    .then(function(response) {
                        console.log(response.data)
                        router.push({ path: response.data })
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
			}
		}
	}
</script>
