<script>
	import Box from './Box.svelte';
	import sky from "$lib/images/sky2.png"
	let name = 'sky background'
</script>


<div class="h-[calc(100vh-48px)] w-full flex items-center justify-center overflow-hidden">
	<img class="object-cover h-[calc(100vh-48px)] w-full" src={sky} alt="{name}"/>

<div class="absolute grid grid-cols-3 h-[calc(100vh-48px)] w-10/12 place-items-center">
	
	<Box>
	</Box>
	<Box >
	</Box>
	<Box >
	</Box>
	<Box >
	</Box>
	<Box >
	</Box>
	<Box >
	</Box>
</div>

</div>


