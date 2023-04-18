<script lang="ts">
    import ClockSpinner from "../spinner/ClockSpinner.svelte";
    import {onDestroy, onMount} from "svelte";
    import sky2 from "../../lib/images/sky2.png";
    let name = 'sky background'

    let gameEnd = false;
    let matching = true;

    let deploying = true;
    let deployTime = 5;
    let startTime = 0;
    let endTime = 0;
    let timeElapsed = 0;
    let timerInterval;
    let playerTime;
    let playerWin = false;
    let winTime = 0;
    let delta;

    // Game information
    let board = [];
    let tracked = [false, false, false, false, false, false, false, false, false, false];

    function deploy() {
        timerInterval = setInterval(() => {
            deployTime--;
            console.log(deployTime);
            if (deployTime === 0) {
                console.log("Deploy End");
                clearInterval(timerInterval);
                deploying = false;
                matching = false;
                startTime = Date.now();
                inGame();
            }
        }, 1000);
    }

    function inGame() {
        startTime = new Date().getTime();
        console.log("In Game");
        createBoard();
        console.log(board)
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeElapsed = new Date().getTime() - startTime;
            if (timeElapsed >= 30000) {
                clearInterval(timerInterval);
            }
        }, 10);
    }

    function handleInput(event) {
        if(gameEnd) return;
        // useless function rn
    }

    function boxClick(index) {
        if (gameEnd) return;
        if (board[index] === 1) {
            tracked[board[index]-1] = true;
            board[index] = "";
            console.log(tracked);
            return;
        }
        console.log(index);
        if(tracked[board[index]-2]){
            tracked[board[index]-1] = true;
            board[index] = "";
            console.log(tracked);
        }
        checkWin();
    }

    function checkWin(){
        let win =  tracked.every((item) => item === true);
        if (!win) return;
        // random number 1000-30000
        winTime = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)/1000;
        endTime = Date.now();
        playerTime = (endTime - startTime)/1000;
        gameEnd = true;
        if(playerTime <= winTime){
            playerWin = true;
            console.log(playerTime);
            console.log(winTime);
            console.log("You Win");
            delta = (playerTime - winTime).toFixed(3);
            return;
        }
        console.log(playerTime);
        console.log(winTime);
        delta = (playerTime - winTime).toFixed(3);
        console.log("You Lose");
        return;
    }

    function createBoard() {
        let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var m = b.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = b[m];
            b[m] = b[i];
            b[i] = t;
        }
        board = b
    }

    function restartGame(){
        gameEnd = false;
        matching = false;
        deploying = true;
        deployTime = 5;
        startTime = 0;
        endTime = 0;
        timeElapsed = 0;
        playerTime = 0;
        playerWin = false;
        winTime = 0;
        delta = 0;
        board = [];
        tracked = [false, false, false, false, false, false, false, false, false, false];
        clearInterval(timerInterval);
        deploy();
    }

    let MM;
    let MMtime = 0;
    onMount(() => {
        document.addEventListener('keydown', handleInput);
        clearInterval(MM);
        MM = setInterval(() => {
            MMtime += 10;
            let rand = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            console.log(rand);
            if(!(rand % 4)){
                clearInterval(MM);
                matching = false;
                deploy();
            }
        }, 1000);
    });

    onDestroy(() => {
        // document.removeEventListener('keydown', handleInput);
        if (MM != null){
            clearInterval(MM);
        }
        if (timerInterval != null){
            clearInterval(timerInterval);
        }
    });

</script>

<div class=" h-[calc(100vh-48px)] w-full flex items-center justify-center overflow-hidden">
    <img class="fixed object-cover h-[calc(100vh-48px)] w-full" src={sky2} alt="{name}"/>


    <div class="fixed container w-auto bg-gray-100 p-8 rounded-lg">
        {#if gameEnd}
            <div class=endingGrid>
                <div class="result inline-grid">
                    {#if playerWin}
                        <b>You Win!</b>
                    {:else}
                        <b>You Lose!</b>
                    {/if}
                </div>
                <div class="result"><b>Your Time:</b></div>
                <div class="result">{playerTime} seconds</div>
                <div class="result"><b>Opponent Time:</b></div>
                <div class="result">{winTime} seconds</div>
                <div class="result"><b>Delta:</b></div>
                <div class="result">
                    {#if playerWin}
                        {delta} seconds
                    {:else}
                        +{delta} seconds
                    {/if}
                </div>
                <div class="inline-grid container w-auto bg-gray-100 rounded-lg">
                    <button class="bg-[#456275] hover:bg-[#263344] text-white font-bold py-2 px-4 rounded" on:click={() => restartGame()}>
                        Play Again
                    </button>
                </div>
            </div>
        {:else if matching}
            <div class="mmGrid">
                <div class="gameTitle mmGridItem">
                    Looking for opponent...
                </div>
                <div class=mmGridItem>
                    <ClockSpinner/>
                </div>
            </div>
        {:else}
            <div class=gameTitle>
                Click 1-10 as fast as possible!<br/>
            </div>
            {#if deploying}
                <div class="grid font-bold color-[#263344]">
                    {deployTime}
                </div>
            {:else}
                <div class=grid>
                    {#each board as item, index}
                        {#if index === 9}
                            <div>
                            </div>
                        {/if}
                        {#if item !== ""}
                            <div class=showItem>
                                <button on:click={() => boxClick(index)}>
                                        {item}
                                </button>
                            </div>
                        {:else}
                            <div class=hideItem>
                            </div>
                        {/if}
                    {/each}
                </div>
                <div class=test>
                    <p>{(timeElapsed / 1000).toFixed(2)} seconds</p>
                </div>
            {/if}
        {/if}
    </div>

</div>

<style>
    .grid {
        display: grid;
        justify-content: center;
        grid-template-columns: auto auto auto;
        grid-gap: 5px;
    }

    .showItem {
        display: inline-grid;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: #263344;
        color: white;
        text-justify: auto;
    }
    .hideItem {
        display: inline-grid;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        text-justify: auto;
    }

    .endingGrid{
        display: grid;
        justify-content: center;
        grid-template-rows: repeat(7, auto);
    }

    .result{
        display: grid;
        justify-content: center;
    }

    .gameTitle{
        font-weight: bold;
        color: #263344;
    }

    .mmGrid{
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(1, auto);
    }

    .mmGridItem{
        display: inline-grid;
        justify-content: center;
        padding-bottom: 25px;
    }

    .test {
        display: flex;
        justify-content: center;
    }
</style>