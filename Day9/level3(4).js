const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = {
  count: function () {
    return ages.length;
  },
  sum: function () {
    return ages.reduce((acc, curr) => acc + curr, 0);
  },
  min: function () {
    return Math.min(...ages);
  },
  max: function () {
    return Math.max(...ages);
  },
  range: function () {
    return this.max() - this.min();
  },
  mean: function () {
    return this.sum() / this.count();
  },
  median: function () {
    const sortedAges = ages.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedAges.length / 2);
    if (sortedAges.length % 2 === 0) {
      return (sortedAges[middle - 1] + sortedAges[middle]) / 2;
    } else {
      return sortedAges[middle];
    }
  },
  mode: function () {
    const freqMap = new Map();
    ages.forEach(age => {
      const freq = freqMap.get(age) || 0;
      freqMap.set(age, freq + 1);
    });
    let maxFreq = 0;
    let modeValue = null;
    for (const [value, freq] of freqMap.entries()) {
      if (freq > maxFreq) {
        maxFreq = freq;
        modeValue = value;
      }
    }
    return { mode: modeValue, count: maxFreq };
  },
  var: function () {
    const mean = this.mean();
    const squaredDifferences = ages.map(age => Math.pow(age - mean, 2));
    return squaredDifferences.reduce((acc, curr) => acc + curr, 0) / ages.length;
  },
  std: function () {
    return Math.sqrt(this.var());
  },
  freqDist: function () {
    const freqMap = new Map();
    ages.forEach(age => {
      const freq = freqMap.get(age) || 0;
      freqMap.set(age, freq + 1);
    });
    return Array.from(freqMap).sort((a, b) => b[1] - a[1]);
  },
  percentile: function (percentile) {
    const sortedAges = ages.slice().sort((a, b) => a - b);
    const index = Math.ceil((percentile / 100) * sortedAges.length) - 1;
    return sortedAges[index];
  },
  describe: function () {
    return {
      Count: this.count(),
      Sum: this.sum(),
      Min: this.min(),
      Max: this.max(),
      Range: this.range(),
      Mean: this.mean(),
      Median: this.median(),
      Mode: this.mode(),
      Variance: this.var(),
      'Standard Deviation': this.std(),
      'Frequency Distribution': this.freqDist(),
    };
  },
};

// Ejemplo de uso
console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ', statistics.freqDist());
console.log(statistics.describe());
