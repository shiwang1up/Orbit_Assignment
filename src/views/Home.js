import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import typography from '../styles/typography';
import {fetchImageOfSize} from '../services/apiCalls';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../styles/globalStyles';
import { Animated } from 'react-native';

const scrollAnim = new Animated.Value(0);

const height = Math.round(typography.height);
const width = Math.round(typography.width);
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetchImageOfSize(width, height, pageNumber);
      if (Array.isArray(response)) {
        setImages([...images, ...response]);
      } else {
        setImages([...images, response]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [pageNumber, images, setLoading, setImages]);

  const handleRefresh = () => {
    if (!refreshing) {
      setRefreshing(true);
      setImages([]);
      setPageNumber(1);
      fetchImages();
      setRefreshing(false);
    }
  };

  const handleEndReached = () => {
    setPageNumber(pageNumber + 1);
    fetchImages();
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.activityIndicator}
        />
      ) : (
        <View>
          <FlatList
            data={images}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <TouchableOpacity>
                  <ImageBackground
                    source={{uri: item.uri}}
                    style={styles.imageBackground}>
                    <View style={styles.imageContent}>
                      <Text style={styles.title}>For You</Text>
                      <View style={styles.contentWrapper}>
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
                        </View>
                        <Text style={styles.caption}>Caption</Text>
                        <Text style={styles.caption}>{item.caption}</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.uri}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            scrollEventThrottle={1}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: 'black',
  },
  imageBackground: {
    opacity: 0.9,
    height: height,
  },
  imageContent: {
    padding: 20,
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
  contentWrapper: {
    marginBottom: 30,
  },
  actions: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    height: typography.height * 0.35,
    marginBottom: 10,
  },
  caption: {
    color: '#fff',
    fontSize: 16,
  },
});
