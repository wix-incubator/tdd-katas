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
Made popular by [Roy Osherove](http://osherove.com/tdd-kata-1/).

#### Before you start:
* *Try not to read ahead.*
* *Do one task at a time. The trick is to learn to work incrementally.*
* *Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata*

This kata is one of the simplest and best ways to practice step-by-step fluent tdd, and provides an easy way to get proficient in a language.

Write a function `add` under a module `StringCalculator` that, given a delimited string, returns the sum of the values.

1. An empty string returns zero
2. A single number returns the value
3. Two numbers, comma delimited, returns the sum
4. Two numbers, newline delimited, returns the sum
5. Three numbers, delimited either way, returns the sum
6. Negative numbers throw an exception
7. Numbers greater than 1000 are ignored
8. A single char delimiter can be defined on the first line starting with `//` (e.g. //#\n1#2 for a ‘#’ as the delimiter)
9. A multi char delimiter can be defined on the first line starting with `//` (e.g. //###\n1###2 for ‘###’ as the delimiter)

## Prime Factors
Made popular by [Uncle Bob](http://butunclebob.com/ArticleS.UncleBob.ThePrimeFactorsKata).

This kata demonstrates the [`transformation priority premise`](https://en.wikipedia.org/wiki/Transformation_Priority_Premise).

Write a function `generate` under a module `PrimeFactors` that, given an integer, returns the list
containing the prime factors in numerical sequence.

* 1 should return `[]`
* 2 should return `[2]`
* 3 should return `[3]`
* 4 should return `[2,2]`
* 5 should return `[5]`
* 6 should return `[2,3]`
* 7 should return `[7]`
* 8 should return `[2,2,2]`
* 9 should return `[3,3]`
* 4620 should return `[2,2,3,5,7,11]`
