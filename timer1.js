const timer = function() {
  let timesRequested = process.argv.slice(2, process.argv.length).sort((x, y) => {
    return x - y;
  })
  let timesRequestedAdjusted = timesRequested.map(x => x * 1000)
  timesRequestedAdjusted.forEach(time => {
    if (time > 0 && typeof time === "number") {
      setTimeout(() => {
        process.stdout.write('\x07')
      }, time);
    }
  })

};

timer()

