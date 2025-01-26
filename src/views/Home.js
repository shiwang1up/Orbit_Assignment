import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  View,
  FlatList,
  PanResponder,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import typography from '../styles/typography';
import {fetchImageOfSize} from '../services/apiCalls';

export default function Home() {
  const height = Math.round(typography.height);
  const width = Math.round(typography.width);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const {dy} = gestureState;
      setScrollPosition(scrollPosition + dy / 3);
    },
    onPanResponderRelease: () => {
      const resistance = Math.abs(scrollPosition) / (height * 2);
      if (scrollPosition > height / 2) {
        setScrollPosition(
          height / 2 + (scrollPosition - height / 2) / (1 + resistance),
        );
      } else if (scrollPosition < -height / 2) {
        setScrollPosition(
          -height / 2 - (height / 2 + scrollPosition) / (1 + resistance),
        );
      }
    },
  });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
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
  };

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
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <View {...panResponder.panHandlers}>
          <FlatList
            data={images}
            renderItem={({item}) => (
              <View style={{height: height, width: width}}>
                <ImageBackground
                  source={{uri: item.uri}}
                  style={{width: width, height: height}}>
                  <TouchableOpacity>
                    <View style={{padding: 20, justifyContent:'space-between',borderWidth:2,}}>
                      <Text style={{color: '#fff', fontSize: 18}}>For You</Text>
                      <Text style={{color: '#fff', fontSize: 18}}>
                        {item.caption}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            )}
            keyExtractor={item => item.uri}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            scrollEventThrottle={16}
            contentContainerStyle={{
              transform: [{translateY: scrollPosition}],
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
