/**
*** Main index.
**/

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const filemanager = require('./lib/files');
const inquire  = require('./lib/inquirer');

clear();  //Clears the console
console.log(
  chalk.bgRed.black(
    figlet.textSync('Greg Gardner\'s Ginit', { horizontalLayout: 'full' })
  )
);

if (filemanager.directoryExists('.git')) {  //Runs a check to ensure folder isn't already git repo.
  console.log(chalk.yellow.bgRed.bold('What are you doing? This is already a git repository!'));
  process.exit();
}

const run = async () => {
  const credentials = await inquire.askGithubCredentials();
  console.log(credentials);
}

run();
