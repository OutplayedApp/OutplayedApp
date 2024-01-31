<script lang="ts">
	import Logo from '$lib/images/Logo.svg';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider, Button} from 'flowbite-svelte';

    import { page } from '$app/stores';
	import Counter from '../../routes/Counter.svelte';

    export let logged_in = false;

    type link = {
        path: string;
        text: string;
        protected: boolean;
    };

    const links: link[] = [
        { path: "/", text: "Home", protected: false },
        { path: "/test", text: "Test", protected: false },
        { path: "/games", text: "Games", protected: false },
        { path: "/leaders", text: "Leaderboards", protected: false },
        { path: "/stats", text: "Stats", protected: true },
    ];
</script>

<Navbar>
    <NavBrand href="/">
        <img src={Logo} class="me-3 h-6 sm:h-9" alt="Outplyed Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Outplayed</span>
    </NavBrand>
    <NavUl>
        {#each links as link}
            {#if !link.protected || logged_in}
                <NavLi href={link.path}>{link.text}</NavLi>
            {:else}
                <!-- <NavLi href="/">{link.text}</NavLi> -->
            {/if}
        {/each}
    </NavUl>
    {#if logged_in}
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
    {:else}
        <div class="flex md:order-2">
            <Button href="/login" size="sm">Login</Button>
            <Button href="/signup" size="sm">Signup</Button>
            <NavHamburger />
        </div>
    {/if}
</Navbar>