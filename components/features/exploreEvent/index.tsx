import { StyleSheet, View, Image, Text } from 'react-native';
import { ExploreEventsProps } from './types';
import Dots from '../../../assets/icons/dots.svg';
import Location from '../../../assets/icons/location.svg';

const ExploreEvent = ({
  icon,
  title,
  date,
  location,
}: ExploreEventsProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={icon}/>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View>
          {date && <Text style={styles.date}>{date}</Text>}
          <View style={styles.locationContainer}>
            <Location />
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
      </View>
      <Dots style={styles.dots} />
    </View>
  );
};

export default ExploreEvent;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 16,
    paddingLeft: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f3f3f3',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 14,
    maxWidth: 136,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#9ca3af',
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 9,
  },
  location: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '500',
    marginLeft: 6,
  },
  dots: {
    position: 'absolute',
    bottom: 12,
    right: 12,
  },
});
