<script>
	import '../app.postcss';
	import Box from './Box.svelte';
	import sky from "$lib/images/sky2.png"
	import typegame from "$lib/images/typegame.png"
	import click10 from "$lib/images/click10.png"
	let bgname = 'sky background'



	export let data;
</script>


<div class=" h-[calc(100vh-48px)] w-full flex items-center justify-center overflow-hidden">
	
	
	<img class="fixed object-cover h-[calc(100vh-48px)] w-full" src={sky} alt="{bgname}"/>

	
	

	<div class=" absolute grid grid-flow-cols grid-cols-2 gap-8 h-[calc(100vh-48px)] w-10/12 place-items-center">
	
		
		{#if !data.user}
			<Box src={typegame} name={"Typing Race"} link={"/login"}/>
			<Box src={click10} name={"Click 10"} link={"/login"}/>
		{:else}
			<Box src={typegame} name={"Typing Race"} link={"/type"}/>
			<Box src={click10} name={"Click 10"} link={"/click10"}/>
		{/if}
		
		
	</div>

</div>

<style>
	.b {
		border: 1px solid #263344;
	}
</style>
