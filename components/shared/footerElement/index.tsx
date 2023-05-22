import { StyleSheet, View, Text } from 'react-native';
import { FooterElementProps } from './types';

const FooterElement = ({
  children,
  title,
  showTitle,
}: FooterElementProps): JSX.Element => {
  return (
    <View>
      <View style={styles.container}>
        {children}
        {showTitle && <View style={styles.line} />}
      </View>
      {showTitle && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default FooterElement;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  line: {
    marginVertical: 5,
    width: '70%',
    height: 1.5,
    backgroundColor: '#8a182a',
  },
  title: {
    color: '#8a182a',
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 10,
    fontWeight: '400'
  },
});
