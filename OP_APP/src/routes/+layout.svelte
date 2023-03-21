<script>
	import '../app.postcss';
	import {slide} from "svelte/transition";
	import { expoInOut } from 'svelte/easing'
	let isMenuOpen = false;
  
	function toggleMenu() {
	  isMenuOpen = !isMenuOpen;
	}
</script>
  
  <header class="w-screen p-2 fixed flex justify-between items-center bg-gray-700 text-gray-100">
	<a href="/" class="text-2xl font-bold tracking-widest">My Site</a>
  
	<div class="flex relative">
	  <button class="focus:outline-none" on:click={toggleMenu}>
		<svg class=" rounded h-8 w-8 fill-current hover:bg-gray-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		  <rect x="4" y="5" width="16" height="2"/>
		  <rect x="4" y="11" width="16" height="2"/>
		  <rect x="4" y="17" width="16" height="2"/>
		</svg>
	  </button>
	</div>

  </header>

  	{#if isMenuOpen}
	<div transition:slide class={isMenuOpen ? 'fixed top-12 right-0 w-32 p-2 bg-gray-700 text-gray-100' : 'hidden'}>
		<a href="/profile" class="block px-4 py-2 hover:bg-gray-600">Profile</a>
		<a href="/games" class="block px-4 py-2 hover:bg-gray-600">Games</a>
		<a href="/account" class="block px-4 py-2 hover:bg-gray-600">Account</a>
		<a href="/about" class="block px-4 py-2 hover:bg-gray-600">About</a>
		<a href="https://github.com" class="block px-4 py-2 hover:bg-gray-600">GitHub</a>
	</div>
	{/if}

  <slot></slot>
  