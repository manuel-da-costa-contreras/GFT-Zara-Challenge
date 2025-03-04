const { fs } = require("fs");

const srcFolders = fs
  .readdirSync("./src", { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [srcFolders.map((folder) => [folder, `./src/${folder}`])],
        extensions: [".ts", ".tsx"],
      },
    },
  },
  rules: {
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: `+(${srcFolders.join("|")})/**`,
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "never",
      },
    ],

    // ban some imports
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["**/dtos", "!common/dtos"],
            message: "Please keep dtos into common/dtos folder.",
          },
          {
            group: [
              "**/utils/*",
              "**/shared/*",
              "**/constants/*",
              "common/dtos/*",
              "**/data/*",
              "**/types/*",
              "**/hocs/*",
              "**/hooks/*",
              "!**/hooks/*.d",
            ],
            message: "Please import directly from the index.",
          },
        ],
      },
    ],
  },
};
