const $container = document.getElementById('container')
let finalStory = []
let story = null

// Creating the landing or launch page where the user will select a story.

let launchPage = `
<div class='header'>
    <h1><a href="index.html">Mad Libs</a></h1>
    <hr>
    <p>Choose a Story</p>
</div>
<div id='story-buttons' class='buttons'>
    <button id='story-1'>Story 1</button>
    <button id='story-2'>Story 2</button>
    <button id='story-3'>Story 3</button>
</div>
`

// First Page that loads is the Launch Page
$container.innerHTML = launchPage

const $storyButtons = document.getElementById('story-buttons')

// header and Footer for the form section
    let formHeader = `
    <div class='header'>
        <h1><a href="index.html">Mad Libs</a></h1>
        <hr>
        <p>Please provide the following words.</p>
    </div>
    <form class='buttons' id="form">`

    let formFooter = `
    <input type="submit" class="submit" value="Read Story">`

    // Creating the input field based on teh arrays in stories.js
function submitForm() {
    
    let input = []
    let inputs = []
    for (let i = 0; i < story.words.length; i++) {
        input = `<input type="text" name="${story.words[i]}" placeholder="${story.words[i]}">`
        inputs.push(input)
        
    }
    $container.innerHTML = formHeader + inputs.join(' ') + formFooter

    //creating an event listener for submitting the form
    const $form = document.getElementById('form')
    $form.addEventListener('submit', function(event) {
        event.preventDefault()
        let answer = null
        for (let i = 0; i < 7; i++) {
            story.words[`${story.words[i]}`] = $form.children[i].value
        }
        console.log(story.words['Verb 1'])
        finalStory = story.output(story.words)
        final()
    })
    
}

// Adding event listeners to each button and changing to the selected story's form page
for (let i = 0; i <3; i++) {
    $storyButtons.children[i].textContent = stories[i].title
    $storyButtons.children[i].addEventListener('click', function () {
        if (event.target.textContent === 'Mission Statement') {
            story = stories[0]
            submitForm()
        }
        else if (event.target.textContent === 'Lunch Room!') {
            story = stories[1]
            submitForm()
        }
        else if (event.target.textContent === 'Weather Report') {
            story = stories[2]
            submitForm()
        }
    })

}
function final() {
    $container.innerHTML = `
    <div class='header'>
        <h1><a href="index.html">Mad Libs</a></h1>
        <hr>
        <p>Choose a Story</p>
    </div>
    <div class="final-story">
    ${finalStory}
    </div>
    <div class='buttons'>
    <button id='reset'>Create Another Story</button>
    </div>`
    const $reset = document.getElementById('reset')
    $reset.addEventListener('click', function () {
        location.reload()
    })
}

