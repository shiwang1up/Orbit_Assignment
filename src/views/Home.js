import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import typography from '../styles/typography';
import {fetchImageOfSize} from '../services/apiCalls';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PagerView from 'react-native-pager-view';

const height = Math.round(typography.height);
const width = Math.round(typography.width);

export default function Home() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetchImageOfSize(width, height);
      if (Array.isArray(response)) {
        setImages([...images, ...response]);
      } else {
        setImages([...images, response]);
      }
    } catch (error) {
      console.error(error);
    }
  }, [images, setImages]);

  const handlePageSelected = event => {
    setCurrentPage(event.nativeEvent.position);
    if (event.nativeEvent.position === images.length - 1) {
      fetchImages();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        orientation={'vertical'}
        onPageSelected={handlePageSelected}>
        {images.map((image, index) => (
          <View key={index} style={styles.page}>
            <ImageBackground
              source={{uri: image.uri}}
              style={styles.imageBackground}>
              <View style={styles.imageContent}>
                <Text style={styles.title}>For You</Text>
                <View style={styles.actionsContainer}>
                  <View style={styles.actions}>
                    <TouchableOpacity>
                      <Ionicons
                        name={'person-add-outline'}
                        size={34}
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                    <Ionicons
                      name={'chatbubbles-outline'}
                      size={34}
                      color={'#fff'}
                    />
                    <TouchableOpacity>
                      <Ionicons
                        name={'heart-outline'}
                        size={34}
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Ionicons
                        name={'share-social-outline'}
                        size={34}
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Ionicons
                        name={'paper-plane-outline'}
                        size={34}
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                  </View>
                  {/* </View> */}
                  <Text style={styles.caption}>Caption</Text>
                  <Text style={styles.caption}>{image.caption}</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </PagerView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: 'black',
  },
  imageBackground: {
    opacity: 0.8,
    height: height,
  },
  imageContent: {
    paddingHorizontal: 20,
    paddingVertical: 35,
    height: typography.height,
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  actionsContainer: {
    alignItems: 'flex-end',
  },

  actions: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    height: typography.height * 0.35,
  },
  caption: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'left',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
