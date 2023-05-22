import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStackNavigation } from '../../hooks/navigation';
import { Routes } from '../../navigation/routes';
import ProfilePic from '../../assets/icons/profilePicExample.svg';
import PurchaseHistory from '../../assets/icons/purchaseHistory.svg';
import ArtMarket from '../../assets/icons/artMarket.svg';
import Donate from '../../assets/icons/donate.svg';
import LockIcon from '../../assets/icons/lock.svg';
import InfoIcon from '../../assets/icons/infoIcon.svg';

const Purchase = () => {
  const navigation = useStackNavigation();

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>My Purchases</Text>
          <View style={styles.iconsContainer}>
            <InfoIcon />
            <LockIcon />
          </View>
        </View>
        <View style={styles.mainImageContainer}>
          <Image
            style={styles.mainImage}
            source={require('../../assets/detailImage.png')}
          />
        </View>
        <View>
          <Text style={styles.authorText}>Henri Matisse</Text>
          <Text style={styles.authorDescription}>
            Nature Morte Aux Mimosas sur fond noir, 1944 oil on canvas 21 1/2 x
            29 inches (54.6 x 73.7 cm) © 2020 succession H. Matisse / Artists
            Rights Society ( ARS), New York
          </Text>
        </View>
        <View style={styles.viewAllButton}>
          <ProfilePic />
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.SELECT_PROVENANCE_PRO)}
          >
            <Text style={styles.viewAllText}>Sell my Work/Chat with a Pro</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.iconContainer}>
            <ArtMarket />
            <Text style={styles.iconText}>Art Market Comparable</Text>
          </View>
          <View style={styles.iconContainer}>
            <PurchaseHistory />
            <View>
              <Text style={styles.iconText}>Purchase history</Text>
              <View style={styles.line} />
              <View style={styles.purchaseDetails}>
                <Text style={styles.purchaseDetailsText}>
                  Purchased on 12/10/2022
                </Text>
                <Text style={styles.purchaseDetailsText}>From Acquavella</Text>
                <Text style={styles.purchaseDetailsText}>
                  Purchase price $20,000
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.iconContainer}>
            <Donate />
            <Text style={styles.iconText}>Donate to Artist/Foundation</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginRight: 18,
  },
  mainText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
    color: '#333333',
  },
  secondaryText: {
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 21,
    color: '#333333',
    marginLeft: 8,
  },
  mainImageContainer: {
    width: 335,
    height: 210,
    marginVertical: 16,
    borderRadius: 10,
  },
  mainImage: {
    borderRadius: 10,
  },
  iconsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
  },
  authorText: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    color: '#000000',
    marginBottom: 5,
  },
  authorDescription: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 23.2,
    color: '#333333',
  },
  viewAllButton: {
    display: 'flex',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: '#b26c77',
    shadowColor: 'rgba(138, 24, 42, 0.08)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 25,
    shadowOpacity: 1,
    height: 75,
    marginVertical: 30,
  },
  viewAllText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 15,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 22,
  },
  iconText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#111827',
    marginLeft: 21,
  },
  purchaseDetails: {
    marginLeft: 21,
  },
  line: {
    marginLeft: 21,
    marginTop: 10,
    height: 1,
    backgroundColor: '#dfdfdf',
  },
  purchaseDetailsText: {
    marginTop: 7,
  },
});
