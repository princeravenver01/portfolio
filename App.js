import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Portfolio</Text>
      
      <View style={styles.section}>
        <Text style={styles.title}>About Me</Text>
        <Text>I am a student learning React Native.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Projects</Text>
        <Text>• Project 1: Mobile App</Text>
        <Text>• Project 2: Calculator App</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
