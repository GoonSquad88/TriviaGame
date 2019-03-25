# TriviaGame

So the way i approached this assignment is that what i did in the last assignment and put my questions in an array. Then put each question in an object with key-values of question, then the question, "answers" and the choices, and the correct answer with a key "answer" and a value with the correct answer.

Then I created a function to pretty much work the whole logic of the trivia game.

Problems that I came across:
    1. my results is not displaying the "Unasnwered questions". It's giving me a "NaN" error. I don't know if I'm referencing the length of the array or the objects right. And why the radio buttons are displaying in the results page is beyond me.
    
    2. I tried to create a function to go through my array and then go through each object to find the "answer" key and its value to see if the question was either right, wrong, or unanswered. However, I was unsuccessful. I know there is a way to because I feel like creating a function to go through the array and check for the right answer is the best way to do it and prevent DRY coding. But I found out "$.each" function and have it go through the objects and look for the right answer.