import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import typography from '../styles/typography';
import {trendingHashtags} from '../constants/constants';
import {topSearches} from '../constants/constants';
import {topCommunities} from '../constants/constants';
import {topNomads} from '../constants/constants';
import PagerView from 'react-native-pager-view';

const height = typography.height;
const width = typography.width;
const isPortrait = height > width;
export default function Search() {
  const handlePageSelected = event => {
    const currentPage = event.nativeEvent.position;
    console.log(`Page ${currentPage} selected`);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Discover the world</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />

        <View style={styles.topSearchContainer}>
          <PagerView
            style={styles.topSearchPagerView}
            initialPage={0}
            orientation={'horizontal'}
            onPageSelected={handlePageSelected}>
            {topSearches.map((item, index) => (
              <View key={index} style={styles.cardTop}>
                <Image
                  source={{uri: item.image}}
                  style={styles.topSearchImage}
                />
                <View style={styles.bannerWrapper}>
                  <Text style={styles.topSearchText}>
                    # Top searches of the day
                  </Text>
                  <Text style={styles.topSearchTitle}>{item.title}</Text>
                </View>
              </View>
            ))}
          </PagerView>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>Trending hashtags</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <FlatList
            horizontal
            data={trendingHashtags}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.card}>
                <Image source={{uri: item.image}} style={styles.cardImage} />
                <Text style={styles.trendingText}>{item.title}</Text>
                <Text style={styles.trendingCounts}>{item.posts}</Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>Top community</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <FlatList
            horizontal
            data={topCommunities}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.card}>
                <Image source={{uri: item.image}} style={styles.cardImage} />
                <Text style={styles.topCommunityTitle}>{item.title}</Text>
                <Text style={styles.topCommunityPlace}>{item.place}</Text>
                <Text style={styles.topCommunityCount}>
                  {item.totalPosts} posts/day
                </Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>Top nomads</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <FlatList
            horizontal
            data={topNomads}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.card}>
                <Image source={{uri: item.image}} style={styles.avatar} />
                <View style={styles.nomadWrapper}>
                  <Text style={styles.nomadTitle}>{item.title}</Text>
                  <Text style={styles.nomadFollower}>
                    {item.follower} followers
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: isPortrait ? 30 : 20,
  },
  bannerWrapper: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: typography.fontSizeExtraLarge,
    fontWeight: typography.fontWeightBold,
    marginHorizontal: 16,
    color: '#5f797d',
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: isPortrait ? 12 : 10,
    margin: isPortrait ? 16 : 10,
    fontSize: typography.fontSizeSmall,
    borderWidth: 1,
    borderColor: '#cdcdcd',
  },
  topSearchContainer: {
    marginHorizontal: isPortrait ? 16 : 10,
    marginBottom: isPortrait ? 16 : 10,
  },
  topSearchImage: {
    width: '100%',
    height: isPortrait ? 250 : 200,
    borderRadius: 12,
  },
  nomadWrapper: {
    alignItems: 'center',
  },
  topSearchText: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: '#fff',
    fontSize: typography.fontSizeMidMedium,
    fontWeight: typography.fontWeightBold,
  },
  topSearchPagerView: {
    flex: 1,
    width: '100%',
    height: 250,
  },
  topSearchTitle: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    color: '#fff',
    fontSize: typography.fontSizeHuge,
    fontWeight: typography.fontWeightBold,
    opacity: 0.8,
  },
  trendingText: {
    position: 'absolute',
    bottom: 16,
    left: 5,
    color: '#fff',
    fontSize: typography.fontSizeSmall,
    fontWeight: typography.fontWeightBold,
  },
  trendingCounts: {
    position: 'absolute',
    bottom: 16,
    right: 5,
    color: '#fff',
    fontSize: typography.fontSizeExtraSmall,
    fontWeight: typography.fontWeightBold,
  },
  topCommunityTitle: {
    position: 'absolute',
    bottom: 36,
    left: 5,
    color: '#fff',
    fontSize: typography.fontSizeLarge,
    fontWeight: typography.fontWeightRegular,
  },
  topCommunityPlace: {
    position: 'absolute',
    bottom: 6,
    opacity: 0.9,
    left: 5,
    color: '#fff',
    fontSize: typography.fontSizeExtraLarge,
    fontWeight: typography.fontWeightBold,
  },
  topCommunityCount: {
    position: 'absolute',
    top: 16,
    right: 5,
    color: '#fff',
    fontSize: typography.fontSizeExtraSmall,
    fontWeight: typography.fontWeightBold,
  },
  sectionContainer: {
    marginBottom: 16,
    paddingVertical: 10,
  },
  headingWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  seeAll: {
    right: 16,
    top: 0,
    color: '#5f797d',
    fontSize: typography.fontSizeSmall,
  },
  card: {
    marginHorizontal: isPortrait ? 8 : 5,
    width: isPortrait ? 150 : 120,
  },

  cardTop: {
    marginHorizontal: isPortrait ? 8 : 5,
    width: isPortrait ? 410 : 300,
  },
  cardImage: {
    width: '100%',
    height: isPortrait ? 150 : 120,
    borderRadius: 8,
  },

  nomadTitle: {
    color: '#5f797d',
    fontWeight: typography.fontWeightBold,
    fontSize: typography.fontSizeSmall,
    marginTop: 10,
  },
  nomadFollower: {
    color: '#5f797d',
    fontSize: typography.fontSizeSmall,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 999,
    marginHorizontal: 8,
  },
});
