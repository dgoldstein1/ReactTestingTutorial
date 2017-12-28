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

There are 5 problems total, making up 13 tests.

# Rendering (Problems 1-2)

Write two small test suites testing that the correct elements are rendered.
## Problem 1

Go to `ReactTestingTutorial/src/Components/Square.test.js`, line `20`. Use enzyme `html()` (i.e. `wrapper.html().includes(...)`) function to assert that the Square component renders an `<input/>` tag.

## Problem 2

Go to `ReactTestingTutorial/src/Components/Puzzle.test.js` line `28`. Use the `.html()` function again like in problem 2 to assert that the Puzzle component renders a submit button, grid layout, and 80 `<inpu>` boxes in html.


# Util / Internal Methods (Problems 3-4)

Now we are going to switch to more logic-based testing instead of merely asserting against html output. 


## Problem 3

Go to `ReactTestingTutorial/src/Components/Square.test.js` line `27`.

Here we will be testing `_handleValueChanged()` in the Square component. I've extracted the method using enzyme's `wrapper.instance()` and assigned it to a local variable `_handleValueChanged` which can be called like any other local function. I've also passed a function which saves the callback value in the mocked component to `callBackValue` (see line `37`). Then when you call the method `_handleValueChanged()` in the test suite, it should

a) save the value passed to the callback function to `callBackValu`

b) return the value itself. 

(see `ReactTestingTutorial/src/Components/Square.js` if this confuses you).

For the first test, assert that calling `_handleValueChanged(an integer [1-9])` a) returns that number as a string and b) calls the callback with the expected value.

i.e., Test on line `40` would start

```
let number = '9';
let output = _handleValueChanged(number);
expect(output).toBe(...);
expect(callBackValue).toBe(...);
```

Then, do the same for negative tests.

i.e. Test on line `45` should be 

```
let number = 'XXX';
let output = _handleValueChanged(number);
expect(output).toBe(...);
expect(callBackValue).toBe(...);
```

## Problem 4

`ReactTestingTutorial/src/Components/Puzzle.test.js` line `60`.

Here you are testing the function in `Puzzle.js` `_handleNewValue()`. This function is the callback function for the function tested in problem 3. What happens in the code is when a user enters a value into a Square, `_hanleValueChanged()` validates the input and then calls `_handleNewValue()` which dispatches an action and updates the Redux Store. `Puzzle.js` then detects the change in store and displays the updated values for each `Square.js`.

To test this function, you have to assert that the correct action is called in Redux. To get you started I've commented out how to extract `_handleNewValue()`. To run assertions against it, simply assert that the dispatched value / type is expected, i.e.

```
expect(dispatchResult.type).toBe(...);
expect(dispatchResult.id).toBe(...);
expect(dispatchResult.newValue).toBe(...); 
```

# Test Driven Development (Problem 5)

Go to `Puzzle.test.js`

In order to finish the project, you will have to finish the stubbed out method `_handleSubmit` in `Puzzle.js`. This is a perfect opportunity to try Test drive development! Your job is to 

a) Write the test for what *should* happen when `_handleSubmit()` is called.

b) Write the actual function `_handleSubmit()`. This is what happens when a user clicks the submit button.

Note -- if the above tests were beginner level, this problem is upper intermediate. I've structured the data in a way that makes it tricky to check if it's completed, you may need to import `lodash` or other javascript libraries to simplify, although my solution does not use any dependencies.

If you get really stuck, the code is available on the `completed-code` branch. As a hint, look at how the row and col cell IDs translate to the IDs of the grid.

## Authors

* **David Goldstein** - [See More Work](https://david-goldstein.updog.co/#)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
