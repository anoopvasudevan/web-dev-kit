const HTMLTemplate = [
  `<!DOCTYPE html>\n`,
  `<html lang="en">\n`,
  `  <head>\n`,
  `    <meta charset="UTF-8" />\n`,
  `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n`,
  `    <title>Document</title>\n`,
  `  </head>\n`,
  `  <body>\n`,
  `  </body>\n`,
  `</html>\n`,
];

const HTMLTags = {
  css: {
    templateIndex: 5,
    tag: `    <link rel="stylesheet" href="./style.css" />\n`,
  },
  js: {
    templateIndex: 8,
    tag: `    <script src="script.js"></script>\n`,
  },
};

exports.HTMLTemplate = HTMLTemplate;
exports.HTMLTags = HTMLTags;
