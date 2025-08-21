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
    
    rock, rock - good
    paper, paper - good
    sci, sci

    condtion player wins 
    rock -- sci good, paper -- rock - good, sci -- paper - good

    cond cpu wins
    rock -- paper good,  sci -- rock - good, paper -- sci good


    rock, paper - paper, rock
    rock, sci - sci, rock
    paper, sci - sci, paper
    


    rock = 0
    paper = 1
    sci = 2


    function playGame

    have a check on how if human or computer has 5 points

    while loop humanscore is less than 5 or cpuScore is less than 5