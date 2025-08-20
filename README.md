# rock_paper_scissors
make a rock paper scissors game so player can play against cpu

<!-- assign rock to value of 0
assinn paper to value of 1
assign scissors to value of 2 -->

function that gets random computer choice
    line using math.random floor to get a value of 0, 1 or 2

    check for if value = 0 return value of rock

    check for value = 1 return value of paper

    check for value = 2 return value of scissors


function to that gets players choice
ask user for input

play round function 
compare choices 
check if equal - which return a tie
check conditons 
    player - rock -- cpu paper
    player - rock -- cpu scissors
    player - paper -- scissors
    
    rock, rock
    paper, paper
    sci, sci

    condtion player wins 
    rock -- sci, paper -- rock, sci -- paper
    cond cpu wins
    rock -- paper,  sci -- rock, paper -- sci


    rock, paper - paper, rock
    rock, sci - sci, rock
    paper, sci - sci, paper
    