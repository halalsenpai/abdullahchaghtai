const https = require('https');
const fs = require('fs');
const path = require('path');

const icons = {
  'react': '61DAFB',
  'nextdotjs': '000000',
  'typescript': '3178C6',
  'tailwindcss': '06B6D4',
  'redux': '764ABC',
  'nodedotjs': '339933',
  'express': '000000',
  'mongodb': '47A248',
  'postgresql': '4169E1',
  'redis': 'DC382D',
  'docker': '2496ED',
  'amazonwebservices': '232F3E',
  'git': 'F05032',
  'jenkins': 'D24939',
  'jira': '0052CC'
};

const iconDir = path.join(__dirname, '..', 'public', 'icons');

if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir, { recursive: true });
}

Object.entries(icons).forEach(([name, color]) => {
  const fileNameMap = {
    'nextdotjs': 'nextjs',
    'nodedotjs': 'nodejs',
    'tailwindcss': 'tailwind',
    'amazonwebservices': 'aws'
  };

  const url = `https://cdn.simpleicons.org/${name}/${color}`;
  const fileName = fileNameMap[name] || name;
  const filePath = path.join(iconDir, `${fileName}.svg`);

  https.get(url, (response) => {
    const file = fs.createWriteStream(filePath);
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${fileName}.svg`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${fileName}.svg:`, err);
  });
}); 