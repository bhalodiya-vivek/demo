import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';

import {HOME_1, HOME_2, HOME_3, HOME_4} from '../../../assets/images';
import {COLORS} from '../../../theme/Colors';

const carouselWidth = Dimensions.get('screen').width - 8;

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = useMemo(
    () => [
      {
        id: 0,
        image: HOME_1,
      },
      {
        id: 1,
        image: HOME_2,
      },
      {
        id: 2,
        image: HOME_3,
      },
    ],
    [],
  );

  const getCurrentIndex = useCallback(() => {
    return currentIndex + 1 + '/' + carouselImages.length;
  }, [currentIndex, carouselImages]);

  const renderCarousel = useCallback(
    (data: any) => {
      const {item} = data;
      return (
        <View style={styles.carouselImageContainer}>
          <View>
            <Image
              source={item.image}
              resizeMode="cover"
              style={styles.carouselImage}
            />
          </View>
          <View style={styles.imageCounters}>
            <Text style={styles.carouselCounters}>{getCurrentIndex()}</Text>
          </View>
        </View>
      );
    },
    [currentIndex],
  );

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: COLORS.APP.BACKGROUND_COLOR},
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.carouselContainer}>
          <FlatList
            data={carouselImages}
            keyExtractor={item => item.id.toString()}
            renderItem={renderCarousel}
            pagingEnabled
            onMomentumScrollEnd={e => {
              const index = Math.round(
                e.nativeEvent.contentOffset.x / carouselWidth,
              );
              setCurrentIndex(index);
            }}
            style={{flexGrow: 0}}
            bounces
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {[0, 1, 2].map((item, index) => (
            <View key={index} style={styles.cardContainer}>
              <View style={styles.card}>
                <Image source={HOME_4} style={styles.cardImage} />
                <View style={[styles.labelSection, styles.row]}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.titleDescription} numberOfLines={2}>
                      React Native Demo
                    </Text>
                  </View>
                  <View style={styles.labelContainer}>
                    <Text style={styles.price}>Price</Text>
                    <Text style={styles.priceDescription} numberOfLines={2}>
                      $1,553
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    marginTop: 20,
    height: 246,
  },
  carouselImageContainer: {
    height: 246,
    width: carouselWidth,
    marginHorizontal: 4,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imageCounters: {
    position: 'absolute',
    end: 10,
    top: 15,
    paddingVertical: 5,
    paddingHorizontal: 9,
    backgroundColor: COLORS.HOME.CAROUSEL_COUNTER_BACKGROUND_COLOR,
    borderRadius: 8,
  },
  carouselCounters: {
    fontSize: 12,
    color: COLORS.HOME.CAROUSEL_COUNTER_COLOR,
  },
  cardContainer: {
    marginHorizontal: 8,
    marginVertical: 40,
    width: carouselWidth / 2,
  },
  card: {
    height: 300,
    borderRadius: 20,
    padding: 20,
    backgroundColor: COLORS.HOME.CARD_BACKGROUND_COLOR,
  },
  cardImage: {
    width: '100%',
    height: '80%',
    borderRadius: 20,
  },
  labelSection: {
    flex: 1,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelContainer: {
    width: '50%',
  },
  title: {
    color: COLORS.HOME.LABEL_COLOR,
    fontWeight: '600',
    marginBottom: 4,
  },
  titleDescription: {
    color: COLORS.HOME.LABEL_COLOR,
    fontWeight: 'bold',
    fontSize: 12,
  },
  price: {
    textAlign: 'right',
    color: COLORS.HOME.LABEL_COLOR,
    fontWeight: '600',
    marginBottom: 4,
  },
  priceDescription: {
    textAlign: 'right',
    color: COLORS.HOME.LABEL_COLOR,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
