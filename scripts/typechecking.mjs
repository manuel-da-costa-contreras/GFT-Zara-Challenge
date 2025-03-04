#!/usr/bin/env zx

$.verbose = true;

const response = await nothrow($`npx tsc -p tsconfig.json --noEmit`);

if (response.exitCode !== 0) {
  const srcErrors = [];
  let currentLine = "";

  for (const line of response.stdout.split("\n")) {
    if (line.startsWith(" ")) {
      if (currentLine) {
        currentLine += `\n${line}`;
      }
    } else if (line.startsWith("src/")) {
      if (currentLine) {
        srcErrors.push(currentLine);
      }
      currentLine = line;
    } else {
      if (currentLine) {
        srcErrors.push(currentLine);
        currentLine = "";
      }
    }
  }

  if (srcErrors.length > 0) {
    for (const error of srcErrors) {
      console.log(error);
    }
    process.exit(response.exitCode);
  }
}
