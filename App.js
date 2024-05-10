import { StyleSheet, Button, View, ScrollView } from 'react-native';
import LongText from './components/long_text';

export default function App() {
  return (
<ScrollView style={styles.scrollView}>
    <View style={styles.container}>
   
    <Button
  title="Login page"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
    />
    {/* <LongText/> */}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  scrollView: {
    marginHorizontal: 20,
  },
});
