import { StyleSheet, View, Text, Image } from 'react-native';
import { ProvenanceProListElementProps } from './types';
import Clip from '../../../assets/icons/clipGrey.svg';
import List from '../../../assets/icons/listGrey.svg';
import Message from '../../../assets/icons/messageGrey.svg';
import Zoom from '../../../assets/icons/zoomGrey.svg';
import Verified from '../../../assets/icons/verified.svg';
import Star from '../../../assets/icons/star.svg';

const ProvenanceProListElement = ({
  icon,
  name,
  profession,
  isVerified,
}: ProvenanceProListElementProps) => {
  return (
    <View style={[styles.container, styles.flex]}>
      <View style={[styles.flex, styles.avatarContainer]}>
        <Image style={styles.avatar} source={icon} />
        <View>
          <View style={[styles.flex, styles.titleContainer]}>
            <Text style={styles.title}>{name}</Text>
            {isVerified && <Verified />}
          </View>
          <Text style={styles.description}>{profession}</Text>
          <View style={[styles.flex, { justifyContent: 'flex-start' }]}>
            <Text style={styles.description}>Reviews</Text>
            <Star style={styles.star} width={10} height={10} />
            <Star style={styles.star} width={10} height={10} />
            <Star style={styles.star} width={10} height={10} />
          </View>
        </View>
      </View>
      <View style={[styles.flex, styles.iconContainer]}>
        <Clip />
        <List />
        <Message />
        <Zoom />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
  },
  avatarContainer: {
    width: '50%',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    width: '30%',
  },
  flex: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  titleContainer: { justifyContent: 'flex-start', marginBottom: 5 },
  title: {
    marginRight: 7,
    fontSize: 16,
    fontWeight: '500',
  },
  description: {
    fontSize: 10,
    fontWeight: '400',
  },
  star: {
    marginHorizontal: 2.5,
  },
});

export default ProvenanceProListElement;
