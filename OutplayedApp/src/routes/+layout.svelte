<script>
    import "../app.css";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
    import Logo from "$lib/assets/logo.svg";
</script>

<div class = "container">
    <!-- Navbar -->
    <NavBrand href = "/">
        <!-- display logo.svg from the images directory-->
        <img src={Logo} class="me-3 h-6 sm:h-9" alt="Outplayed" width = "100" height = "100">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-black light:text-white">Outplayed</span>
    </NavBrand>
    <!-- Navbar END-->

    <!-- Content -->
    <slot></slot>
    <!-- Content END-->

    <!-- Footer -->
    <!-- Footer END-->
</div>