import { StyleSheet, View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useStackNavigation } from '../../hooks/navigation';
import { Routes } from '../../navigation/routes';
import Arrow from '../../assets/icons/arrow.svg';
import ProvenanceProListElement from '../../components/features/provenanceProListElement';

const testData = [
  {
    icon: require('../../assets/socialFeed.png'),
    name: 'Jen',
    profession: 'Impressionist/Modern',
    isVerified: true,
  },
  {
    icon: require('../../assets/socialFeed.png'),
    name: 'Kevin',
    profession: 'Generalist',
    isVerified: false,
  },
  {
    icon: require('../../assets/socialFeed.png'),
    name: 'Morgan',
    profession: 'Generalist',
    isVerified: false,
  },
  {
    icon: require('../../assets/socialFeed.png'),
    name: 'Jen',
    profession: 'Digital Art',
    isVerified: true,
  },
  {
    icon: require('../../assets/socialFeed.png'),
    name: 'Jen',
    profession: 'Impressionist/Modern',
    isVerified: false,
  },
  {
    icon: require('../../assets/socialFeed.png'),
    name: 'Jen',
    profession: 'Impressionist/Modern',
    isVerified: true,
  },
  {
    icon: require('../../assets/socialFeed.png'),
    name: 'Jen',
    profession: 'Impressionist/Modern',
    isVerified: true,
  },
  {
    icon: require('../../assets/socialFeed.png'),
    name: 'Jen',
    profession: 'Impressionist/Modern',
    isVerified: true,
  },
];

const SelectProvenancePro = () => {
  const navigation = useStackNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.PURCHASE)}
          >
            <Arrow />
          </TouchableOpacity>
          <Text style={styles.headerText}>Select a Provenance Pro</Text>
        </View>
        <View style={styles.listContainer}>
          {testData.map((value) => (
            <ProvenanceProListElement key={value.name} {...value} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    borderBottomColor: '#f3f3f3',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 18,
  },
  listContainer: {
    height: '100%',
    paddingHorizontal: 20,
  },
});

export default SelectProvenancePro;
