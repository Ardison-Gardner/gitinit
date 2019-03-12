/**
***  Command-line user interaction.
**/

const inquirer = require('inquirer');
const files = require('./files');

const inquire = {

  askGithubCredentials: () => {  // Creates the prompt to ask for Github credentials.
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'You see a wizard. He motions you over with his staff. When you approach, he asks, \'What is your Github username\': ',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Speak, and quickly, you fool!';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: '\'Good! Now speak to me your password: \'',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return '\'You think my time is yours to waste? Speak!\'';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
}

module.exports = inquire;
