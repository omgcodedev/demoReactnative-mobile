import { StyleSheet, View, Text, Image } from 'react-native';
import ModalComponent from '../../shared/modal';
import { BaselDetailPopupProps } from './types';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 36,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    letterSpacing: 7,
  },
  image: {
    marginVertical: 40,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  waitingDescription: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
});

const BaselDetailPopup = (props: BaselDetailPopupProps): JSX.Element => {
  return (
    <ModalComponent {...props}>
      <View style={styles.container}>
        <Text style={styles.title}>WAITING ROOM</Text>
        <Image
          source={require('../../../assets/waitingRoom.png')}
          style={styles.image}
        />
        <Text style={styles.description}>
          You are 5th in line to chat about this work of art.....
        </Text>
        <Text style={styles.waitingDescription}>Your Wait is 7 Mins</Text>
        <Text style={styles.waitingDescription}>
          There are 2 other people interested
        </Text>
      </View>
    </ModalComponent>
  );
};

export default BaselDetailPopup;
