# TDD Katas

> Do not push to this repo, create a pull request instead

## Usage
Test files should be named ending with `.spec.js` and put under `test` or `spec` folder.
Source files should be put under `src` folder.

To run the tests, run `npm run test`.

For a true TDD experience: use [wallaby.js](https://wallabyjs.com/) with the included `wallaby.js` file.

## The Three Rules of TDD

1. You are not allowed to write any production code unless it is to make a failing unit test pass.
2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

Which means the workflow is:

1. Write a failing test. Stop writing the test as soon as it fails.
2. Write the minimal production code required for the test to pass. Stop writing any code once the test passes.
3. Refactor the test code and the production code without altering the functionality. All tests should pass.

# Katas

## String Calculator
Made popular by [Roy Osherove](http://osherove.com/tdd-kata-1/). Write a method that, given a delimited string, returns the sum of the values.

1. An empty string returns zero
2. A single number returns the value
3. Two numbers, comma delimited, returns the sum
4. Two numbers, newline delimited, returns the sum
5. Three numbers, delimited either way, returns the sum
6. Negative numbers throw an exception
7. Numbers greater than 1000 are ignored
8. A single char delimiter can be defined on the first line (e.g. //#\n1#2 for a ‘#’ as the delimiter)
9. A multi char delimiter can be defined on the first line (e.g. //###\n1###2 for ‘###’ as the delimiter)
