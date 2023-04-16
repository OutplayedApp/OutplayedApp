<script>
	export let src;
	export let name = "idk man"
	export let link;

</script>

<div class="border-2 bg-gray-300 border-midnight hover:border-blue-400 outline-4 hover:outline-gray-700 shadow-md rounded-xl w-80 h-60 place-items-center flex justify-center overflow-hidden">
	<div class="absolute mt-40 w-auto px-2 h-8 text-lg font-bold text-center tracking-widest bg-gray-100 rounded-lg shadow-md ">
		<a href={link}>
			<header class="h-full w-full">{name}</header>
		</a>
	</div>
	<div class="w-full h-full">
		<a href={link}>
			<img class="self-center object-cover h-full w-full" {src} alt="game pic"/>
		</a>
		
	</div>
	
</div>