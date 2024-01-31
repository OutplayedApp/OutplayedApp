<script lang="ts">
    import { Section, Register } from "flowbite-svelte-blocks";
    import { Button, Checkbox, Label, Input } from "flowbite-svelte";
    import Logo from '$lib/images/logo.svg';
</script>
    
<Section name="login">
    <Register href="/">
        <svelte:fragment slot="top">
            <img class="w-8 h-8 mr-2" src={Logo} alt="logo" />
            Outplayed
        </svelte:fragment>
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form class="flex flex-col space-y-6" action="/">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Create Account</h3>
                <Label class="space-y-2">
                    <span>Name</span>
                    <Input type="text" name="name" placeholder="John Doe" required />
                </Label>
                <Label class="space-y-2">
                    <span>Username</span>
                    <Input type="text" name="username" placeholder="JohnDoe12" required />
                </Label>
                <Label class="space-y-2">
                    <span>Email</span>
                    <Input type="email" name="email" placeholder="name@company.com" required />
                </Label>
                <Label class="space-y-2">
                    <span>Password</span>
                    <Input type="password" name="password" placeholder="•••••" required />
                </Label>
                <Button type="submit" class="w-full1">Sign in</Button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                </p>
            </form>
        </div>
    </Register>
</Section>