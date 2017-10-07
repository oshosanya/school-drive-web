<template>
	<div class="container" id="centered-page">
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<img src="../assets/logo.png" class="pagination-centered center-block">
			</div>
		</div>
		<br>
		<br>
		<div class="row">
			<div class="col-md-3 col-md-offset-3">
				<router-link to="/staff" class="btn btn-secondary btn-block btn-lg">Login as Staff</router-link>
			</div>
			<div class="col-md-3">
				<router-link to="/student" class="btn btn-success btn-block btn-lg">Login as Student</router-link>
			</div>
		</div>
	</div>
</template>

<style type="text/css">
	#centered-page {
    height: 500px;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;

    margin: auto;
}
</style>