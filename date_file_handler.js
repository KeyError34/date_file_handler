import fs from 'fs';
import moment from 'moment';
import 'dotenv/config';

const fileName = process.env.FILENAME || 'default.txt';

const currentDate = moment();
const formattedDate1 = currentDate.format('DD-MM-YYYY');
const formattedDate2 = currentDate.format('MMM Do YY');
const formattedDate3 = currentDate.format('dddd');

const content = `Current date and time in different formats:
1. Format DD-MM-YYYY: ${formattedDate1}
2. Format MMM Do YY: ${formattedDate2}
3. Format dddd: ${formattedDate3}`;

const writeAndReadFile = () => {
  fs.writeFile(fileName, content, (writeErr) => {
    if (writeErr) {
      return console.error(`Error writing file: ${writeErr}`);
    }

    console.log(`Data successfully written to file: ${fileName}`);
    fs.readFile(fileName, 'utf8', (readErr, data) => {
      if (readErr) {
        return console.error(`Error reading file: ${readErr}`);
      }
      console.log(`File contents:\n ${data}`);
    });
  });
};
writeAndReadFile();
