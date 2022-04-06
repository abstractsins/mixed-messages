const Jokes = {
    1: ['Why did the scarecrow win a Nobel Prize?','...because it was out standing in its field!'],    
    2: ['Why do cows have hooves instead of feet?','...because they lac-tose!'],    
    3: ['What do you call a bear left out in the rain?','...a drizzly bear!'],    
    4: ['What do you call a bear who lost his dentures?','...a gummy bear!'],
    5: ['What did the mommy cow say to the baby cow?','...it\'s pasture bed time!'],    
    6: ['How do farmers count their herd?','...with a cow-culator!'],
    7: ['What did the mom buffalo say to the baby buffalo when he went off to college?','...bye son!']    
}
const nJokes = Object.keys(Jokes).length;
const randoNum = Math.ceil(Math.random()*nJokes);
const joke = Jokes[randoNum];
const jokeQ = joke[0];
const jokeA = joke[1];

// CALLS
console.log(`\nJoke: #${randoNum}\n`);
function tellJoke(){
    console.log(jokeQ+'\n')
    setTimeout(()=>console.log(jokeA+'\n'), 4000)
}
tellJoke();