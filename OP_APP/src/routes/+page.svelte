<script>
	import '../app.postcss';
	import Box from './Box.svelte';
	import sky from "$lib/images/sky2.png"
	import typegame from "$lib/images/typegame.png"
	let bgname = 'sky background'



	export let data;
</script>


<div class=" h-[calc(100vh-48px)] w-full flex items-center justify-center overflow-hidden">
	
	
	<img class="fixed object-cover h-[calc(100vh-48px)] w-full" src={sky} alt="{bgname}"/>

	
	

	<div class=" absolute grid grid-flow-cols grid-cols-3 gap-8 h-[calc(100vh-48px)] w-10/12 place-items-center">
	
		
		{#if !data.user}
			<Box src={typegame} name={"Cool Game"} link={"/login"}/>
			<Box/>
			<Box/>
		{:else}
			<Box src={typegame} name={"Cool Game"} link={"/type"}/>
			<Box/>
			<Box/>
		{/if}
		
		
	</div>

</div>
