<script>
	import '../app.postcss';
	import {slide, draw} from "svelte/transition";
	import { expoInOut } from 'svelte/easing'
	import SearchBar from './SearchBar.svelte';
	
	let isMenuOpen = false;
  
	function toggleMenu() {
	  isMenuOpen = !isMenuOpen;
	}

	function linkClick() {
		isMenuOpen = false;
	}

</script>
  
  <header class="h-12 w-full p-2 hover:drop-shadow-lg flex justify-between bg-midnight text-gray-100 sticky top-0">

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

	<div class="px-4 flex flex-grow justify-end">
        <SearchBar/>
    </div>


	<div class="flex justify-self-end">
		<a on:click={linkClick} href="/login" class="px-2 rounded text-2xl font-bold tracking-widest hover:bg-gray-600 hover:shadow-lg">LOGIN</a>
	</div>

	
  
	

  </header>

  	{#if isMenuOpen}
	<div transition:slide class={isMenuOpen ? 'fixed top-12 left-0 w-32 bg-midnight text-gray-100 drop-shadow-xl' : 'hidden'}>
		<a on:click={linkClick} href="/account" class="block px-4 py-2 hover:bg-gray-600 hover:shadow-md">Account</a>
		<a on:click={linkClick} href="/games" class="block px-4 py-2 hover:bg-gray-600 hover:shadow-md">Games</a>
		<a on:click={linkClick} href="/about" class="block px-4 py-2 hover:bg-gray-600 hover:shadow-md">About</a>
		<a on:click={linkClick} href="https://github.com/OutplayedApp/OutplayedApp" class="block px-4 py-2 hover:bg-gray-600">GitHub</a>
	</div>
	{/if}

  <slot></slot>
  