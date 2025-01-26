const loremWords = [
  'lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'sed',
  'do',
  'eiusmod',
  'tempor',
  'incididunt',
  'ut',
  'labore',
  'et',
  'dolore',
  'magna',
  'aliqua',
  'enim',
  'ad',
  'minim',
  'veniam',
  'quis',
  'nostrud',
  'exercitation',
  'ullamco',
  'laboris',
  'nisi',
  'ut',
  'aliquip',
  'ex',
  'ea',
  'commodo',
  'consequat',
  'duis',
  'aute',
  'irure',
  'dolor',
  'in',
  'reprehenderit',
  'in',
  'voluptate',
  'velit',
  'esse',
  'cillum',
  'dolore',
  'eu',
  'fugiat',
  'nulla',
  'pariatur',
  'excepteur',
  'sint',
  'occaecat',
  'cupidatat',
  'non',
  'proident',
  'sunt',
  'in',
  'culpa',
  'qui',
  'officia',
  'deserunt',
  'mollit',
  'anim',
  'id',
  'est',
  'laborum',
];

const fetchImage = async url => {
  try {
    const response = await fetch(url);
    const uri = response.url;
    return uri;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const generateParagraph = () => {
  const sentences = [];
  for (let i = 0; i < Math.floor(Math.random() * 2) + 5; i++) {
    const sentence = [];
    for (let j = 0; j < Math.floor(Math.random() * 2) + 5; j++) {
      sentence.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
    }
    sentences.push(sentence.join(' '));
  }
  return sentences.join(' ');
};

const fetchImageOfSize = async (width, height) => {
  const url = `https://picsum.photos/${width}/${height}`;
  const uri = await fetchImage(url);
  const caption = generateParagraph();
  return {uri, caption};
};
export {fetchImage, fetchImageOfSize};
