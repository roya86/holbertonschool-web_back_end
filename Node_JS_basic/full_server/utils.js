import { promises as fs } from 'fs';

const readDatabase = (filePath) => fs.readFile(filePath, 'utf8')
  .then((data) => {
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
    const result = {};

    students.forEach((line) => {
      const parts = line.split(',');
      const firstname = parts[0];
      const field = parts[3];

      if (!result[field]) result[field] = [];
      result[field].push(firstname);
    });

    return result;
  });

export default readDatabase;
