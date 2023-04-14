<script>
	import '../app.postcss';
	export let data;
	
	import {slide, draw} from "svelte/transition";
	import { expoInOut } from 'svelte/easing'
	//import SearchBar from './SearchBar.svelte';
	
	let isMenuOpen = false;
  
	function toggleMenu() {
	  isMenuOpen = !isMenuOpen;
	}

	function linkClick() {
		isMenuOpen = false;
	}
</script>

<header class="z-10 h-12 w-full p-2 hover:drop-shadow-lg flex justify-between bg-midnight text-gray-100 fixed top-0">

	<div class="flex justify-start ">
		
		<button class=" justify-start focus:outline-none" on:click={toggleMenu}>
			<svg class=" rounded h-8 w-8 fill-current hover:bg-gray-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<rect x="4" y="5" width="16" height="2"/>
				<rect x="4" y="11" width="16" height="2"/>
				<rect x="4" y="17" width="16" height="2"/>
			</svg>
		</button>

			
		

		<a on:click={linkClick} href="/" class="pl-2 text-2xl font-bold tracking-widest">OUTPLAYED</a>
		
	</div>
	
	
	


	<div class="flex justify-self-end ">
		{#if !data.user}
			<a on:click={linkClick} href="/login" class="px-2 mr-2 rounded text-2xl font-bold tracking-widest hover:bg-gray-600 hover:shadow-lg">LOGIN</a>
			<a on:click={linkClick} href="/register" class="px-2 rounded text-2xl font-bold tracking-widest hover:bg-gray-600 hover:shadow-lg">REGISTER</a>
		{:else}
			<a on:click={linkClick} href="/login" class="px-2 rounded text-2xl font-bold tracking-widest hover:bg-gray-600 hover:shadow-lg">LOG OUT</a>
		{/if}
	</div>

	
  
	

</header>

{#if isMenuOpen}
	<div transition:slide class={isMenuOpen ? 'fixed top-12 left-0 w-32 z-10 bg-midnight text-gray-100 drop-shadow-xl' : 'hidden'}>
		{#if data.user}
			<a on:click={linkClick} href="/account" class="block px-4 py-2 hover:bg-gray-600 hover:shadow-md">Account</a>
			<a on:click={linkClick} href="/my/settings" class="block px-4 py-2 hover:bg-gray-600 hover:shadow-md">Settings</a>
		{/if}
		<a on:click={linkClick} href="/games" class="block px-4 py-2 hover:bg-gray-600 hover:shadow-md">Games</a>
		<a on:click={linkClick} href="/about" class="block px-4 py-2 hover:bg-gray-600 hover:shadow-md">About</a>
		<a on:click={linkClick} href="https://github.com/OutplayedApp/OutplayedApp" class="block px-4 py-2 hover:bg-gray-600">GitHub</a>
	</div>
{/if}

<div class="py-12 h-[calc(100vh-48px)]">
	<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
		<slot />
	</div>
</div>

