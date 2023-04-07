<script>
	import sky from "$lib/images/sky2.png"
	let name = 'sky background'
	
	let email;
	let password;

	const handleSubmit=(e)=>{
       let loginFields={email,password};
	   console.log(loginFields)
    }
	
</script>

<!-- sign up page, almost identical to login-->


<div class="mt-[48px] h-[calc(100vh-48px)] w-full flex items-center justify-center overflow-hidden">
	

	<img class="object-cover h-[calc(100vh-48px)] w-full" src={sky} alt="{name}"/>

	<div class="absolute h-96 w-72 py-8 rounded-xl grid grid-rows-4 place-content-center drop-shadow-lg bg-gray-100">

		<p class="mt-4 text-xl font-bold text-center">Sign up</p>

		<form on:submit|preventDefault="{handleSubmit}">
			<div class="mb-8">
				<input 
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-normal focus:outline-none focus:shadow-outline" 
					id="email" 
					type="text" 
					placeholder="Email address">

			</div>
			<div class="">
				<input 
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-normal focus:outline-none focus:shadow-outline" 
					id="password" 
					type="password" 
					placeholder="Password">
			</div>
			<div class="mb-2">
				<input 
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-normal focus:outline-none focus:shadow-outline" 
					id="password" 
					type="password" 
					placeholder="Re-enter Password">
			</div>
			<div class="flex items-center justify-between">
				<button 
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
					type="button">
				  Sign Up
				</button>
				
			</div>
		</form>

	</div>
	

</div>





