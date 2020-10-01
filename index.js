#!/usr/bin/env node

const { writeFile } = require("fs/promises");
const program = require("caporal");

const { HTMLTemplate, HTMLTags } = require("./templates");

const argValidator = (arg) => {
  if (arg) {
    arg = arg.toLowerCase();

    if (arg !== "css" && arg !== "js")
      throw new Error("Ivalid argument. Expecting 'css' or 'js'");
    else return arg;
  }
};

program
  .version("0.0.1")
  .help(
    `A simple CLI tool to generate HTML, CSS & JS starter files for a new web development project.\n
    Execute 'devkit' for HTML, CSS & JS files.\n 
    Or, specify arguments to generate only HTML + JS or HTML + CSS kit`
  )
  .argument(
    "[fileType1]",
    `Type of file to be generated - 'css' or 'js'`,
    argValidator
  )
  .argument(
    "[fileType2]",
    `Type of file to be generated - 'css' or 'js'`,
    argValidator
  )
  .action(async ({ fileType1, fileType2 }) => {
    fileType1 = fileType1 && fileType1.toLowerCase();
    fileType2 = fileType2 && fileType2.toLowerCase();

    if (!fileType1 && !fileType2) {
      fileType1 = "css";
      fileType2 = "js";
    }

    if (fileType1)
      HTMLTemplate.splice(
        HTMLTags[fileType1].templateIndex,
        0,
        HTMLTags[fileType1].tag
      );

    if (fileType2 && fileType2 !== fileType1)
      HTMLTemplate.splice(
        HTMLTags[fileType2].templateIndex,
        0,
        HTMLTags[fileType2].tag
      );

    // write HTML file
    try {
      await writeFile("index.html", HTMLTemplate.join(""));

      if (fileType1 === "css" || fileType2 === "css")
        await writeFile("style.css", "");

      if (fileType1 === "js" || fileType2 === "js")
        await writeFile("script.js", "");
    } catch (err) {
      console.log(err);
    }
  });

program.parse(process.argv);
