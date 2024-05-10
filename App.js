import { StyleSheet,  View, ScrollView } from 'react-native';
import LongText from './components/long_text';

export default function App() {
  return (
<ScrollView style={scrollView}>
    <View style={styles.container}>

    <LongText/>
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
