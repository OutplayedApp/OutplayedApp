<script>
	import '../app.pcss';
	import Header from './Header.svelte';
	import './styles.css';
	import Logo from '../lib/images/Logo.svg';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
</script>

<div class="app">
	<!-- <Header></Header> -->
	  
	<Navbar>
		<NavBrand href="/">
			<img src={Logo} class="me-3 h-6 sm:h-9" alt="Outplyed Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Outplayed</span>
		</NavBrand>
		<NavUl>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/games">Games</NavLi>
			<NavLi href="/leaders">Leaderboards</NavLi>
			<NavLi href="/stats">Stats</NavLi>
		</NavUl>
		<div class="flex items-center md:order-2">
			<Avatar id="avatar-menu" src="https://i.stack.imgur.com/frlIf.png" />
			<NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
		</div>
		<Dropdown placement="bottom" triggeredBy="#avatar-menu">
			<DropdownHeader>
			<span class="block text-sm">Antonio Martinez III</span>
			<span class="block truncate text-sm font-medium">#1 EFT Player NA</span>
			</DropdownHeader>
			<DropdownItem>Profile</DropdownItem>
			<DropdownItem>Settings</DropdownItem>
			<DropdownItem>Some Tab</DropdownItem>
			<DropdownDivider />
			<DropdownItem>Sign out</DropdownItem>
		</Dropdown>
	</Navbar>

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
