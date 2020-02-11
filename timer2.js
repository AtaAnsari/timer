const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  } else if (key === "b") {
    process.stdout.write('\x07')
  } else if (key > 0 && key <= 9){
    console.log(`setting timer for ${key} seconds...`)
    let time = Number(key) * 1000
    setTimeout(() => {
      process.stdout.write('\x07')
    }, time);
  }

});

console.log('after callback');

