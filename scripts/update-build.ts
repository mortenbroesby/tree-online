import { readFileSync, writeFileSync, writeFile } from 'fs';

const filePath = './package.json';

const packageJson = JSON.parse(readFileSync(filePath).toString());

packageJson.buildDate = new Date().getTime();

writeFileSync(filePath, JSON.stringify(packageJson, null, 2));

const jsonData = {
  buildDate: packageJson.buildDate,
};

const jsonContent = JSON.stringify(jsonData);

writeFile('./public/meta.json', jsonContent, 'utf8', function(error) {
  if (error) {
    console.log(
      'An error occured while saving build date and time to meta.json',
    );
    return console.log(error);
  }

  console.log('Latest build date and time updated in meta.json file');
});
