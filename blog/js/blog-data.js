const axios = require('axios');

const owner = 'wellingtondellamura';
const repo = 'wellingtondellamura.github.io';

async function getFoldersRecursive(path = '') {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const response = await axios.get(url);
  
  if (response.status !== 200) {
    return [];
  }
  
  const folders = [];
  
  for (const item of response.data) {
    if (item.type === 'dir') {
      folders.push(item.path);
      folders.push(...await getFoldersRecursive(item.path));
    }
  }
  
  return folders;
}

