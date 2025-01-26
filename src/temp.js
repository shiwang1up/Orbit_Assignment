import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import typography from '../styles/typography';
import {fetchImageOfSize} from '../services/apiCalls';

export default function Home() {
  const height = Math.round(typography.height);
  const width = Math.round(typography.width);
  const [loading, setLoading] = useState(true);
  const [imageUris, setImageUris] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchImageOfSize(width, height).then(uri => {
      setImageUris([uri]);
      setLoading(false);
    });
  }, [width, height]);

  const handleEndReached = () => {
    if (!refreshing) {
      setRefreshing(true);
      fetchImageOfSize(width, height).then(uri => {
        setImageUris([...imageUris, uri]);
        setRefreshing(false);
      });
    }
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
        <FlatList
          data={imageUris}
          renderItem={({item}) => (
            <ImageBackground
              source={{uri: item}}
              style={{flex: 1, width: '100%', height: '100%'}}>
              <TouchableOpacity>
                <Text>Homeiesssssssssssssssssssssssss</Text>
              </TouchableOpacity>
            </ImageBackground>
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          refreshing={refreshing}
          onRefresh={handleEndReached}
        />
      )}
    </SafeAreaView>
  );
}


/**
 * 
 * import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import typography from '../styles/typography';
import {fetchImageOfSize} from '../services/apiCalls';

export default function Home() {
  const height = Math.round(typography.height);
  const width = Math.round(typography.width);
  const [loading, setLoading] = useState(true);
  const [imageUris, setImageUris] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchImageOfSize(width, height).then(uri => {
      setImageUris(uri);
      setLoading(false);
    });
  }, [width, height]);

  const handleEndReached = () => {
    if (!refreshing) {
      setRefreshing(true);
      fetchImageOfSize(width, height).then(uri => {
        setImageUris([...imageUris, uri]);
        setRefreshing(false);
      });
    }
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
        <FlatList
          data={imageUris}
          renderItem={({item}) => (
            <ImageBackground
              source={{uri: item}}
              style={{flex: 1, width: '100%', height: '100%'}}>
              <TouchableOpacity>
                <Text>Homeiesssssssssssssssssssssssss</Text>
              </TouchableOpacity>
            </ImageBackground>
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          refreshing={refreshing}
          onRefresh={handleEndReached}
        />
      )}
    </SafeAreaView>
  );
}

 * 
 */