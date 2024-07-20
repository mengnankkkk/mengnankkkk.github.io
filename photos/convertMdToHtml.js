const fs = require('fs-extra');
const marked = require('marked');
const path = require('path');

// 配置你的Markdown文件目录和HTML文件目录
const mdDir = path.join(__dirname, 'md');
const htmlDir = path.join(__dirname, 'html');

async function convertMdToHtml() {
  try {
    const files = await fs.readdir(mdDir);

    for (const file of files) {
      if (path.extname(file) === '.md') {
        const filePath = path.join(mdDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const htmlContent = marked(content);
        const htmlFileName = file.replace('.md', '.html');
        const htmlFilePath = path.join(htmlDir, htmlFileName);

        await fs.outputFile(htmlFilePath, htmlContent);
        console.log(`Converted ${file} to ${htmlFileName}`);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

convertMdToHtml();
