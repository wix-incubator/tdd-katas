class StringCalculator {
  add(numbersString) {
    if (!numbersString) {
      return 0;
    }

    return this.sum(
      this.assertNoNegatives(
        this.filterOutGreaterThan1000(
          this.splitAndParse(numbersString)
        )
      )
    );
  }

  splitAndParse(numbersString) {
    let delimiter = /,|\n/;
    let rawString = numbersString;

    if (numbersString.startsWith('//')) {
      const indexOfNewLine = numbersString.indexOf('\n');
      delimiter = numbersString.slice(2, indexOfNewLine);
      rawString = numbersString.slice(indexOfNewLine);
    }

    const stringArray = rawString.split(delimiter);
    return stringArray.map(Number);
  }

  filterOutGreaterThan1000(numbers) {
    return numbers.filter((n) => n <= 1000);
  }

  assertNoNegatives(numbers) {
    const negatives = numbers.filter((i) => i < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives}`);
    }

    return numbers;
  }

  sum(numbers) {
    return numbers.reduce((accumulator, element) => accumulator + element);
  }
}

module.exports = {
  StringCalculator
};
