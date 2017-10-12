# ReactTestingTutorial
This project is a tutorial using a React app powering a sudoku puzzle to teach about testing components, state, and redux.

## Setup

```
git clone https://github.com/dgoldstein1/ReactTestingTutorial.git
npm install
npm start
npm test --watch
```

You should be taken to a nice new screen with a sudoku puzzle:
![with a sudoku puzzle](https://github.com/dgoldstein1/ReactTestingTutorial/blob/master/src/Images/Screen%20Shot%202017-10-12%20at%202.00.46%20AM.png)

# What you need to do!

There are two main components used in sudoku-- `Puzzle` and `Square`. There are two parts to your job.

There are five problems total, broken into testing *render* (problems 1-2) and *state management* (problems 3-4). Problem 5 focuses on test driven development and requires that you finish off non-testing code after you tests are completed. 

## Writing the Tests

Try writing the tests for These components in `Puzzle.test.js` and `Square.test.js`. There should be about ten tests total by the time you finish.

## Finishing the Code

In order to finish the project, you will have to finish the stubbed out method `_handleSubmit` in `Puzzle.js`. This is a perfect opportunity to try TDD! You've already written your test for what should happen if a user clicks submit, now develop against that by finishing the method :)

Be warned, I've structured the data in a way that makes it tricky to check if it's completed, you may need to import `lodash` or other javascript libraries to simplify.

If you get really stuck, the code is available on the `completed-code` branch.





