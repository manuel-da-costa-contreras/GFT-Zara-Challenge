export default {
  "src/**/*.{js,jsx,ts,tsx,css,json,md,less}": ["prettier --write"],
  "src/**/*.{js,jsx,ts,tsx}": ["eslint --fix"],
  "src/**/*.less": ["stylelint"],
  "src/**/*.{ts,tsx}": [() => "npm run typechecking"],
};
