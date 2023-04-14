<script>
	import sky from "$lib/images/sky2.png"
	let name = 'sky background'
</script>

<div class="h-[calc(100vh-48px)] w-full flex items-center justify-center overflow-hidden">
	
	
	<img class="fixed object-cover h-[calc(100vh-48px)] w-full" src={sky} alt="{name}"/>

	<div class="absolute flex flex-col place-content-center items-center h-3/7 w-1/3 py-4 rounded-xl bg-gray-100">
		<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
			Register for an account
		</h2>
		<p class="text-center mt-1">
			Or <a href="/login" class="text-primary font-medium hover:cursor-pointer hover:underline"
				>sign in</a
			> if you already have an account.
		</p>
		<form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-3/4 pt-4">
			<div class="form-control w-full max-w-md">
				<label for="name" class="label font-medium pb-1">
					<span class="label-text">Name</span>
				</label>
				<input type="text" name="name" class="input input-bordered w-full max-w-md" />
			</div>
			<div class="form-control w-full max-w-md">
				<label for="email" class="label font-medium pb-1">
					<span class="label-text">Email</span>
				</label>
				<input type="email" name="email" class="input input-bordered w-full max-w-md" />
			</div>
			<div class="form-control w-full max-w-md">
				<label for="password" class="label font-medium pb-1">
					<span class="label-text">Password</span>
				</label>
				<input type="password" name="password" class="input input-bordered w-full max-w-md" />
			</div>
			<div class="form-control w-full max-w-md">
				<label for="passwordConfirm" class="label font-medium pb-1">
					<span class="label-text">Confirm Password</span>
				</label>
				<input type="password" name="passwordConfirm" class="input input-bordered w-full max-w-md" />
			</div>
			<div class="w-full max-w-md pt-2">
				<button type="submit" class="btn btn-primary w-full">Register</button>
			</div>
		</form>
	</div>

</div>