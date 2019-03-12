/**
***  Basic file management.
**/

const fs = require('fs');
const path = require('path');

path.basename(process.cwd());  // Gets name of directory user is in.

const filemanager = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },
  directoryExists: (filePath) => {
    try {
      return fs.statSunc (filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
}

module.exports = filemanager;
