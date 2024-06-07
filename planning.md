Create computer's choice
    - create an integer variable initialized with 0 called cpuChoice
    - randomize a number between 0 and 3
    - when the number is 0 cpChoice = rock
    - when the number is 1 cpuChoice = paper
    - when the number is 2 cpuChoice = scissors

Get user's choice 
    create a string variable initialized with "" called userChoice
    Ask user "what do you want to do?"
    Store user input in userChoice
    transform userChoice to lower case

Check for a winner
    create a string variable initialized with "" called winner
    compare userChoice and cpuChoice
    when userChoice = rock and cpuChoice = paper, store in winner = 0
    when userChoice = paper and cpuChoice = scissors, store in winner = 0
    when userChoice = scissors and cpuChoice = rock, store in winner = 0
    when userChoice = paper and cpuChoice = rock, store in winner = 1
    when userChoice = scissors and cpuChoice = paper, store in winner = 1
    when userChoice = rock and cpuChoice = scissors, store in winner = 1
    when winner equals 1 display "YOU WIN" otherwise display "YOU LOSE"

Count score and ask to play again
    create an integer variable called userScore and init with 0
    create an integer variable called cpuScore and init with 0
    create a boolean variable called continue and init with True
    create an integeer variable called round and init with 1
    As long as the player want to continue, display userScore, cpuScore and round, ask get user's choice, create cpu choice and
    check for a winner, when the winner is the user increment userScore, otherwise increment cpuScore


---- UI ----

Make a menu, with 4 options ft2-ft3-ft5-about

make a IG UI

Make a replay menu 
