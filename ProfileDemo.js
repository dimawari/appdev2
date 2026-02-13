import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';

export default function App() {
  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        contentContainerStyle={[
          styles.container,
          { minHeight: screenHeight } // ensure it fills screen
        ]}
      >
        <View style={styles.centerContainer}>
          <Text style={styles.greeting}>Hi! 👋</Text>

          <View style={styles.profileCard}>
            <Text style={styles.sectionTitle}>Student Information</Text>
            <View style={styles.divider} />

            <Text style={styles.label}>Course & Section</Text>
            <Text style={styles.value}>
              Bachelor of Science in Information Systems 3
            </Text>

            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Evangeline Anggana</Text>

            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>20</Text>

            <Text style={styles.label}>Favorite Hobby</Text>
            <Text style={styles.value}>Watching Anime 🎌</Text>

            <Text style={styles.sectionTitle}>Pet Peeves in Class</Text>
            <View style={styles.divider} />

            <View style={styles.petPeeveItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.petPeeveText}>
                Feeling “VIP” attitude (needs constant reminders, always late, no
                sense of urgency)
              </Text>
            </View>

            <View style={styles.petPeeveItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.petPeeveText}>
                Unnecessary comments / unsolicited advice
              </Text>
            </View>

            <View style={styles.petPeeveItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.petPeeveText}>
                Additional burden instead of helping out
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EAF2FF',
  },
  container: {
    padding: 24,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center', // vertically center
  },
  greeting: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1E3A8A',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2563EB',
    marginTop: 10,
    marginBottom: 6,
  },
  divider: {
    height: 2,
    backgroundColor: '#DBEAFE',
    marginBottom: 12,
    borderRadius: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#111827',
    marginBottom: 6,
  },
  petPeeveItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 22,
    lineHeight: 22,
    marginRight: 8,
    color: '#2563EB',
  },
  petPeeveText: {
    flex: 1,
    fontSize: 15,
    color: '#1F2937',
    lineHeight: 22,
  },
});
