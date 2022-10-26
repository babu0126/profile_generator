const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  if (answer) {
    rl.question(`What is your name?`, (name) => {
      console.log(`Thank you ${name}!`);
      if (name) {
        rl.question(`What do you listen to while doing that?`, (music) => {
          if (music) {
            console.log(`Thank you for sharing!`);
            rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (meal) => {
              console.log(`${meal} is great! I love it too!`);
              if (meal) {
                rl.question(`What's your favourite thing to eat for ${meal}?`, (food) => {
                  if (food) {
                    rl.question(`Which sport is your absolute favourite?`, (sport) => {
                      if(sport){
                        rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (power) => {
                          if (power) rl.close();
                        });
                    }
                  });
                }
              });
              }
            });
          }
        });
      }
    });
  }
});
  rl.on('close', () => {
    console.log(`We are at the end of the program`);
});