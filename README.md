# TDD Katas

> Do not push to this repo, create a pull request instead

## Usage
Copy the `template` provided here, change the name in `package.json`, and run `npm i`.

To run the tests, run `npm run test`.

For a true TDD experience: use [wallaby.js](https://wallabyjs.com/) with the included `wallaby.js` file.

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
8. A single char delimiter can be defined on the first line (e.g. //# for a ‘#’ as the delimiter)
9. A multi char delimiter can be defined on the first line (e.g. //[###] for ‘###’ as the delimiter)
