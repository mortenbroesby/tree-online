import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';

// Function to replace placeholders in files
const populatePlaceholder = (placeholder: string, value: string, directory: string) => {
  console.log(`Replacing all occurrences of '${placeholder}' with '${value}'...`);
  const files = fs.readdirSync(directory);

  files.forEach((file: string) => {
    const filePath = path.join(directory, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      populatePlaceholder(placeholder, value, filePath);
    } else {
      const content = fs.readFileSync(filePath, 'utf8');
      const updatedContent = content.split(placeholder).join(value);
      fs.writeFileSync(filePath, updatedContent, 'utf8');
    }
  });
};

// Get the latest commit SHA dynamically and extract the short SHA
const GITHUB_SHA = execSync('git rev-parse HEAD').toString().trim();
const CI_COMMIT_SHORT_SHA = execSync('git rev-parse --short HEAD').toString().trim();

// Read repository URL from package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('package.json not found.');
  process.exit(1);
}

const packageJson = fs.readJsonSync(packageJsonPath);
const repositoryUrl = packageJson.repository?.url;

if (!repositoryUrl || !/^(https|git)(:\/\/|@)github.com[:/](.*?)(\.git)?$/.test(repositoryUrl)) {
  console.error('Repository URL in package.json is not a valid GitHub repository URL.');
  process.exit(1);
}

const GITHUB_REPOSITORY = repositoryUrl.replace(/^(https|git)(:\/\/|@)github.com[:/]?/, '').replace(/\.git$/, '');

if (!GITHUB_SHA || !GITHUB_REPOSITORY) {
  console.error('Failed to retrieve GITHUB_SHA or GITHUB_REPOSITORY.');
  process.exit(1);
}

console.log('Injecting variables into the build output...');

// Replace placeholders with appropriate values
const buildDirectory = path.join(process.cwd(), 'dist');
const githubCiTimestamp = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');

populatePlaceholder('%%%GITHUB_CI_TIMESTAMP%%%', githubCiTimestamp, buildDirectory);
populatePlaceholder('%%%CI_COMMIT_SHORT_SHA%%%', CI_COMMIT_SHORT_SHA, buildDirectory);
populatePlaceholder('%%%CI_PROJECT_URL%%%', `https://github.com/${GITHUB_REPOSITORY}`, buildDirectory);
