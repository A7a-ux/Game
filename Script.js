const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

// Define the story scenes
const scenes = {
    start: {
        text: "It's a sunny afternoon, and Ahmad is planning a surprise for Shilan to show how much he cares for her, even from afar. He wants to send her a beautiful bouquet, but he can't decide which flowers to choose.",
        choices: [
            { text: "Choose Peonies", nextScene: "peonies" },
            { text: "Choose Magnolias", nextScene: "magnolias" },
            { text: "Choose Orchids", nextScene: "orchids" }
        ]
    },
    peonies: {
        text: "Ahmad sends a bouquet of peonies. Shilan receives the flowers with a smile and texts, 'Peonies! How did you know they're one of my favorites?'",
        choices: [
            { text: "Continue", nextScene: "chicken" }
        ]
    },
    magnolias: {
        text: "Ahmad sends a bouquet of magnolias. Shilan is pleasantly surprised and giggles, thinking about their exotic and unique love story.",
        choices: [
            { text: "Continue", nextScene: "chicken" }
        ]
    },
    orchids: {
        text: "Ahmad sends a bouquet of orchids. Shilan is thrilled and immediately sets them on her desk, admiring their beauty.",
        choices: [
            { text: "Continue", nextScene: "chicken" }
        ]
    },
    chicken: {
        text: "Later, Shilan is out for a walk in the park when she stumbles upon a lost chicken looking rather confused. She can't help but think it's adorable.",
        choices: [
            { text: "Take it home and care for it", nextScene: "takeChicken" },
            { text: "Try to find its owner", nextScene: "findOwner" },
            { text: "Leave it and continue her walk", nextScene: "leaveChicken" }
        ]
    },
    takeChicken: {
        text: "Shilan takes the chicken home, names it 'Clucky,' and sends a picture to Ahmad. Ahmad replies, 'Looks like you've found a new friend! Maybe Clucky can join our next video call?'",
        choices: [
            { text: "Continue", nextScene: "kitten" }
        ]
    },
    findOwner: {
        text: "Shilan asks around and finds the chicken's owner, a friendly old man. He thanks her with a smile and hands her a small bouquet of wildflowers as a token of gratitude.",
        choices: [
            { text: "Continue", nextScene: "kitten" }
        ]
    },
    leaveChicken: {
        text: "Shilan decides to leave the chicken and continue her walk, but as she strolls away, the chicken follows her all the way home! She ends up with a feathery companion and texts Ahmad, 'Looks like I've been adopted by a chicken!'",
        choices: [
            { text: "Continue", nextScene: "kitten" }
        ]
    },
    kitten: {
        text: "That evening, Ahmad wants to send Shilan a virtual gift. He knows she loves brown kittens, so he decides to surprise her with a kitten-themed video.",
        choices: [
            { text: "A kitten playing with yarn", nextScene: "yarnKitten" },
            { text: "A kitten napping in a flower pot", nextScene: "nappingKitten" },
            { text: "A kitten attempting to catch its own tail", nextScene: "tailKitten" }
        ]
    },
    yarnKitten: {
        text: "The video of the kitten playing with yarn is irresistibly cute. Shilan watches it on repeat and texts Ahmad, 'This kitten is me whenever I'm trying to get something done but end up getting distracted!'",
        choices: [
            { text: "End of Adventure", nextScene: "end" }
        ]
    },
    nappingKitten: {
        text: "The video of the kitten napping in a flower pot makes Shilan smile. She replies, 'This is so adorable! It reminds me of how peaceful life can be with the right person by your side... or on the other side of a screen!'",
        choices: [
            { text: "End of Adventure", nextScene: "end" }
        ]
    },
    tailKitten: {
        text: "The video of the kitten chasing its tail is hilarious. Shilan laughs out loud and texts Ahmad, 'This is exactly how I feel trying to make sense of things sometimes! You're the best at cheering me up.'",
        choices: [
            { text: "End of Adventure", nextScene: "end" }
        ]
    },
    end: {
        text: "No matter which choices were made, the day was filled with love, laughter, and a deeper connection between Ahmad and Shilan. The distance may be great, but their love is greater. Thank you for playing!",
        choices: []
    }
};

// Start the story at the beginning
function startStory() {
    showScene("start");
}

// Show the current scene based on the user's choice
function showScene(sceneKey) {
    const scene = scenes[sceneKey];
    storyElement.innerText = scene.text;
    choicesElement.innerHTML = ""; // Clear previous choices

    // Create buttons for each choice
    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => showScene(choice.nextScene);
        choicesElement.appendChild(button);
    });
}

// Start the game
startStory();
