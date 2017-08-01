class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;

    return this.sum(
      this.filterBiggerThan1000(
        this.assertNoNegatives(
          this.parseStringsToNumbers(
            this.split(
              this.parseStrSeperator(numbers)
            )
          )
        )
      )
    );
  }

  parseStrSeperator(rawStr) {
    let str = rawStr;
    let seperator = /,|\n/;

    if (rawStr.startsWith('//')) {
      const split = rawStr.split('\n');
      const firstLine = split[0];
      str = split[1];
      seperator = firstLine[2];
    }
    return { str, seperator };
  }

  split({ str, seperator }) {
    return str.split(seperator);
  }

  filterBiggerThan1000(numArr) {
    return numArr.filter((n) => n <= 1000);
  }

  parseStringsToNumbers(strArr) {
    return strArr.map((n) => Number(n));
  }

  assertNoNegatives(numArr) {
    let negatives = numArr.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives}`);
    }
    return numArr;
  }


  sum(numArr) {
    return numArr.reduce((a, b) => a + b);
  }
}

module.exports = {
  StringCalculator
}
