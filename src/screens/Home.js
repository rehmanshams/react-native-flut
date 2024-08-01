import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {downArrow, homeLocationIcon, homeShareIcon} from '../utils/icons';
import {Svg} from 'react-native-svg';
import BottomNav from '../components/BottomNav';

const Home = () => {
  const [likeButton, setLikeButton] = useState(false);

  const eventData = [
    {
      date: 'Thu, Apr 19 · 20.00 PM',
      title: 'The Kooks',
      location: 'Razzmatazz',
      image: require('../../assets/kooksHomeImage.png'),
    },
    {
      date: 'Thu, Apr 19 · 20.00 PM',
      title: 'The Kooks',
      location: 'Razzmatazz',
      image: require('../../assets/kooksHomeImage.png'),
    },
    {
      date: 'Thu, Apr 19 · 20.00 PM',
      title: 'The Kooks',
      location: 'Razzmatazz',
      image: require('../../assets/kooksHomeImage.png'),
    },
    {
      date: 'Thu, Apr 19 · 20.00 PM',
      title: 'The Kooks',
      location: 'Razzmatazz',
      image: require('../../assets/kooksHomeImage.png'),
    },
  ];

  return (
    <View style={{flex: 1, height: '100%', justifyContent: 'space-between'}}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.findEventsText}>Find events in</Text>
          <View style={styles.locationContainer}>
            {homeLocationIcon}
            <Text style={styles.cityText}>Barcelona</Text>
            {downArrow}
          </View>
          <Text style={styles.popularText}>Popular in Barcelona</Text>
          <Image
            source={require('../../assets/homePageHeaderImage.png')}
            style={styles.headerImage}
          />
        </View>
        <View style={styles.eventHighlightContainer}>
          <Text style={styles.eventDateText}>Mon, Apr 18 · 21:00 PM</Text>
          <Text style={styles.eventTitleText}>La Rosalia</Text>
          <View style={styles.eventLocationContainer}>
            {homeLocationIcon}
            <Text style={styles.eventLocationText}>
              Palau Sant Jordi, Barcelona
            </Text>
          </View>
        </View>
        <View style={styles.eventListContainer}>
          {eventData.map((event, index) => (
            <View key={index} style={styles.eventItem}>
              <View style={styles.eventDetailsContainer}>
                <Image source={event.image} style={styles.eventImage} />
                <View style={styles.eventTextContainer}>
                  <Text style={styles.eventDateText}>{event.date}</Text>
                  <Text style={styles.eventTitleText}>{event.title}</Text>
                  <View style={styles.eventLocationContainer}>
                    {homeLocationIcon}
                    <Text style={styles.eventLocationText}>
                      {event.location}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.eventActionsContainer}>
                <TouchableOpacity onPress={() => setLikeButton(!likeButton)}>
                  <Svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill={likeButton ? 'red' : 'white'}>
                    {/* SVG path and other elements here */}
                  </Svg>
                </TouchableOpacity>
                {homeShareIcon}
              </View>
            </View>
          ))}
        </View>
      </View>
      <BottomNav />
    </View>
  );
};

const styles = {
  headerContainer: {
    paddingHorizontal: 16,
  },
  findEventsText: {
    color: 'black',
    paddingTop: 24,
    fontSize: 12,
  },
  locationContainer: {
    paddingTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  popularText: {
    color: 'black',
    paddingTop: 20,
    fontSize: 16,
  },
  headerImage: {
    marginTop: 30,
    width: '100%',
  },
  eventHighlightContainer: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  eventDateText: {
    color: 'black',
    fontSize: 12,
  },
  eventTitleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  eventLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventLocationText: {
    color: 'black',
    fontSize: 12,
  },
  eventListContainer: {
    marginTop: 20,
  },
  eventItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  eventDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventImage: {
    borderRadius: 8,
    width: 50,
    height: 50,
  },
  eventTextContainer: {
    marginLeft: 10,
  },
  eventActionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default Home;
