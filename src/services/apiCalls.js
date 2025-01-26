// import lorem from 'lorem-ipsum';

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

const fetchImageOfSize = async (width, height) => {
  const url = `https://picsum.photos/${width}/${height}`;
  const uri = await fetchImage(url);
  const caption = 'lorem.generateParagraphs';
  return {uri, caption};
};

export {fetchImage, fetchImageOfSize};
