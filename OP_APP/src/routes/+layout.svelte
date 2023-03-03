<script>
	import '../app.postcss';
	
    import { onMount } from 'svelte';
    
    let isMenuOpen = false;
    
    onMount(() => {
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          isMenuOpen = false;
        }
      });
    });
  
</script>

<header class="w-screen p-2 fixed flex justify-between items-center bg-gray-700 text-gray-100">
    <a href="/" class="text-2xl font-bold tracking-widest">My Site</a>
    <button
    class="block lg:hidden focus:outline-none"
    on:click={() => isMenuOpen = !isMenuOpen}
    >
    <svg
        class="h-6 w-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="4" y="5" width="16" height="2"/>
        <rect x="4" y="11" width="16" height="2"/>
        <rect x="4" y="17" width="16" height="2"/>
    </svg>
    </button>
    <nav class="hidden lg:flex lg:items-center">
    <a href="/profile" class="mx-4 hover:text-gray-400">Profile</a>
    <a href="/games" class="mx-4 hover:text-gray-400">Games</a>
    <a href="/account" class="mx-4 hover:text-gray-400">Account</a>
    <a href="/about" class="mx-4 hover:text-gray-400">About</a>
    <a href="https://github.com" class="mx-4 hover:text-gray-400">GitHub</a>
    </nav>
    <div class="lg:hidden" class:class={isMenuOpen ? 'block' : 'hidden'}>
    <a href="/profile" class="block px-4 py-2 hover:bg-gray-600">Profile</a>
    <a href="/games" class="block px-4 py-2 hover:bg-gray-600">Games</a>
    <a href="/account" class="block px-4 py-2 hover:bg-gray-600">Account</a>
    <a href="/about" class="block px-4 py-2 hover:bg-gray-600">About</a>
    <a href="https://github.com" class="block px-4 py-2 hover:bg-gray-600">GitHub</a>
    </div>
</header>


  
  
  <slot></slot>

