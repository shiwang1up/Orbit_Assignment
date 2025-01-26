import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import PagerView from 'react-native-pager-view';
import typography from './styles/typography';

const height = Math.round(typography.height);
const width = Math.round(typography.width);

const TestPagerView = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(`https://picsum.photos/${width}/${height}`);
      const imageUrl = response.url;
      setImages(prevImages => [...prevImages, {uri: imageUrl}]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handlePageSelected = event => {
    if (event.nativeEvent.position === images.length - 1) {
      fetchImages();
    }
  };

  return (
    <View style={styles.container}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        orientation={'horizontal'}
        onPageSelected={handlePageSelected}>
        {images.map((image, index) => (
          <View key={index} style={styles.page}>
            <Image source={{uri: image.uri}} style={styles.image} />
          </View>
        ))}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagerView: {
    flex: 1,
    width: '100%',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default TestPagerView;
