<script>
    import "../app.css";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
    import Logo from "$lib/assets/logo.svg";
</script>

<div class = "container">
    <!-- Navbar -->
    <Navbar rounded color="form">
        <NavBrand href = "/">
            <!-- display logo.svg from the images directory-->
            <img src={Logo} class="me-3 h-6 sm:h-9" alt="Outplayed" width = "100" height = "100">
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-black light:text-white">Outplayed</span>
        </NavBrand>
        <div class="flex items-center md:order-2">
            <Avatar id="avatar-menu" src="https://avatars.githubusercontent.com/u/44908413?v=4"/>
            <NavHamburger class1="w-full md:flex md:w-auto md:order-1"/>
        </div>
        <Dropdown placement="bottom" triggeredBy="#avatar-menu">
            <DropdownHeader>
                <span class="block text-sm">Antonio Martinez III</span>
                <span class="block truncate text-sm font-medium">#1 EFT Player</span>
            </DropdownHeader>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Some Tab</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Logout</DropdownItem>
        </Dropdown>
        <NavUl>
            <NavLi href = "/">Home</NavLi>
            <NavLi href = "/games">Games</NavLi>
            <NavLi href = "/leaders">Leaderboards</NavLi>
            <NavLi href = "/profile">Profile</NavLi>
        </NavUl>
    </Navbar>
    <!-- Navbar END-->

    <!-- Content -->
    <slot></slot>
    <!-- Content END-->

    <!-- Footer -->
    <!-- Footer END-->
</div>