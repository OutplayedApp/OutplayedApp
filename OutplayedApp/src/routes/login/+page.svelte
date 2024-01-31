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
                <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Login to your account</h3>
                <Label class="space-y-2">
                    <span>Email</span>
                    <Input type="email" name="email" placeholder="name@company.com" required />
                </Label>
                <Label class="space-y-2">
                    <span>Password</span>
                    <Input type="password" name="password" placeholder="•••••" required />
                </Label>
                <div class="flex items-start">
                    <Checkbox>Remember me</Checkbox>
                </div>
                <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</a>
                <Button type="submit" class="w-full1">Login</Button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
            </form>
        </div>
    </Register>
</Section>