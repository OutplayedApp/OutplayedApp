<script>
    import { onMount } from 'svelte';
    import words from './utils/words.js';
    import sky from "$lib/images/sky2.png"
	  let name = 'sky background'
  
    let currentWord = '';
    let userInput = '';
    let wordsTyped = 0;
    let startTime = 0;
    let timeElapsed = 0;
    let timerInterval;
  
    function startGame() {
        currentWord = getRandomWord();
        userInput = '';
        wordsTyped = 0;
        startTime = new Date().getTime();
        timeElapsed = 0;
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeElapsed = new Date().getTime() - startTime;
            if (timeElapsed >= 30000) { // Stop game after 1 minute
                clearInterval(timerInterval);
                const score = `Your score is ${wordsTyped} words typed in ${(timeElapsed / 1000).toFixed(2)} seconds.`;
                alert(`Game over! ${score}`);
                userInput = '';
            }
        }, 10);
    }
  
    function getRandomWord() {
      const index = Math.floor(Math.random() * words.length);
      return words[index];
    }
  
    function handleInput(event) {
        if (!timerInterval) {
            return; // Game is over, do nothing
        }

        const input = event.target.value;
        if (input === currentWord) {
            wordsTyped++;
            currentWord = getRandomWord();
            userInput = '';
        } else if (currentWord.startsWith(input)) {
            userInput = input;
        }
    }
  
    function handleKeyPress(event) {
      if (event.code === 'Space') {
        event.preventDefault();
        if (!timerInterval) {
          startGame();
        }
      }
    }
  
    onMount(() => {
      document.addEventListener('keydown', handleKeyPress);
    });
  </script>
  
  <style>
    .container {
      max-width: 600px;
      margin: auto;
      text-align: center;
    }
  
    .word {
      font-size: 36px;
      font-weight: bold;
      margin-top: 20px;
    }
  
    .input {
      font-size: 24px;
      padding: 10px;
      margin-top: 10px;
      width: 100%;
    }
  
    .stats {
      font-size: 18px;
      margin-top: 20px;
    }

    .stats {
    font-size: 18px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    }

    .stats p + p {
    margin-top: 10px;
    }
  </style>

<div class=" h-[calc(100vh-48px)] w-full flex items-center justify-center overflow-hidden">
	
	
  <img class="fixed object-cover h-[calc(100vh-48px)] w-full" src={sky} alt="{name}"/>

	
	<div class="fixed container">
    {#if !timerInterval}
      <button on:click={startGame}>Start</button>
    {:else}
      <div class="word">{currentWord}</div>
      <input type="text" class="input" bind:value={userInput} on:input={handleInput} autofocus />
      <div class="stats">
        <p>Words typed: {wordsTyped}</p>
        <p>Time elapsed: {(timeElapsed / 1000).toFixed(2)} seconds</p>
      </div>
    {/if}
  </div>

	

</div>
  
  