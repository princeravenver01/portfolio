import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [currentView, setCurrentView] = useState('Home');

  const openLink = (url) => {
    Linking.openURL(url).catch(() => {});
  };

  const renderHome = () => (
    <LinearGradient colors={['#0a0a0a', '#171717']} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content}>
          
          <View style={styles.headerContainer}>
            <View style={styles.avatarGlow}>
              <Image 
                source={require('./assets/mypic.jpg')} 
                style={styles.avatar} 
              />
            </View>
            <Text style={styles.name}>Prince Raven Go</Text>
            <Text style={styles.title}>Full Stack Developer</Text>
            
            <View style={styles.socialRow}>
              <TouchableOpacity onPress={() => openLink('https://github.com/princeravenver01/')} style={styles.socialIcon}>
                <Ionicons name="logo-github" size={20} color="#a3a3a3" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink('https://linkedin.com')} style={styles.socialIcon}>
                <Ionicons name="logo-linkedin" size={20} color="#a3a3a3" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink('https://twitter.com')} style={styles.socialIcon}>
                <Ionicons name="logo-twitter" size={20} color="#a3a3a3" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.aboutContainer}>
            <Text style={styles.sectionTitle}>About Me</Text>
            <Text style={styles.aboutText}>
              I am a passionate Full Stack Developer and an IT Specialist in Databases certified by Certiport. I specialize in building scalable web and mobile applications, with deep expertise in managing complex data structures and backend infrastructure.
            </Text>
          </View>

          <View style={styles.skillsContainer}>
            <Text style={styles.sectionTitle}>Core Expertise</Text>
            <View style={styles.skillRow}>
              <TouchableOpacity style={styles.skillPill}>
                <LinearGradient colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.02)']} style={styles.skillGradient}>
                  <Text style={styles.skillText}>Java</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.skillPill}>
                <LinearGradient colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.02)']} style={styles.skillGradient}>
                  <Text style={styles.skillText}>Python</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.skillRow}>
              <TouchableOpacity style={styles.skillPill}>
                <LinearGradient colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.02)']} style={styles.skillGradient}>
                  <Text style={styles.skillText}>Flutter</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.skillPill}>
                <LinearGradient colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.02)']} style={styles.skillGradient}>
                  <Text style={styles.skillText}>Databases</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <TouchableOpacity onPress={() => setCurrentView('Projects')} style={styles.statCardContainer}>
              <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.01)']} style={styles.statCard}>
                <Ionicons name="folder-open-outline" size={24} color="#a3a3a3" style={styles.statIcon} />
                <Text style={styles.statTitle}>Projects</Text>
                <View style={styles.statNumberContainer}>
                  <Text style={[styles.statNumber, {color: '#eab308'}]}>12</Text>
                  <Text style={styles.statLabel}> repositories</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => setCurrentView('Skills')} style={styles.statCardContainer}>
              <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.01)']} style={styles.statCard}>
                <Ionicons name="code-slash-outline" size={24} color="#a3a3a3" style={styles.statIcon} />
                <Text style={styles.statTitle}>Skills</Text>
                <View style={styles.statNumberContainer}>
                  <Text style={[styles.statNumber, {color: '#eab308'}]}>8</Text>
                  <Text style={styles.statLabel}> technologies</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.experienceContainer}>
            <Text style={styles.sectionTitle}>Latest Certification</Text>
            <View style={styles.timelineItem}>
              <View style={styles.timelineDot}></View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineRole}>IT Specialist - Databases</Text>
                <Text style={styles.timelineCompany}>Certiport Certification • 2024</Text>
              </View>
            </View>
          </View>

          <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.02)']} style={styles.infoContainer} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
            <Text style={styles.infoTitle}>Connect</Text>
            
            <View style={styles.infoRow}>
              <View style={styles.infoDetails}>
                <TouchableOpacity onPress={() => openLink('tel:+639922640428')} style={styles.infoLine}>
                  <Ionicons name="call-outline" size={18} color="#eab308" style={styles.iconMargin} />
                  <Text style={styles.infoText}>+63 992 264 0428</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => openLink('mailto:princeravenver16go@gmail.com')} style={styles.infoLine}>
                  <Ionicons name="mail-outline" size={18} color="#eab308" style={styles.iconMargin} />
                  <Text style={styles.infoText}>princeravenver16go@gmail.com</Text>
                </TouchableOpacity>
                
                <View style={styles.infoLine}>
                  <Ionicons name="location-outline" size={18} color="#eab308" style={styles.iconMargin} />
                  <Text style={styles.infoText}>Tagum City, Philippines</Text>
                </View>
              </View>
            </View>
          </LinearGradient>

          <TouchableOpacity style={styles.actionBtnContainer} onPress={() => openLink('https://github.com/princeravenver01/')}>
            <LinearGradient colors={['#eab308', '#ca8a04']} style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>Download Resume</Text>
              <Ionicons name="download-outline" size={18} color="#000" />
            </LinearGradient>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );

  const renderProjects = () => (
    <LinearGradient colors={['#0a0a0a', '#171717']} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.pageHeader}>
          <TouchableOpacity onPress={() => setCurrentView('Home')} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={24} color="#e5e5e5" />
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Projects</Text>
        </View>
        <ScrollView contentContainerStyle={styles.listContent}>
          
          {[
            {name: 'portfolio', desc: 'Laboratory activity portfolio design and implementation.', lang: 'JavaScript', url: 'https://github.com/princeravenver01/portfolio'},
            {name: 'pridens_merchant_backend', desc: 'Backend systems for merchant management.', lang: 'Node.js', url: 'https://github.com/princeravenver01/pridens_merchant_backend'},
            {name: 'tribute_grace_app', desc: 'Mobile application interface and core logic.', lang: 'Dart', url: 'https://github.com/princeravenver01/tribute_grace_app'},
            {name: 'commuterswift', desc: 'Transit routing and commuter assistance tool.', lang: 'Dart', url: 'https://github.com/princeravenver01/commuterswift'},
            {name: 'rmg_project', desc: 'Web-based management dashboard project.', lang: 'PHP', url: 'https://github.com/princeravenver01/rmg_project'}
          ].map((repo, idx) => (
            <TouchableOpacity key={idx} onPress={() => openLink(repo.url)} style={styles.listItem}>
              <View style={styles.listInner}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={styles.itemTitle}>{repo.name}</Text>
                  <Ionicons name="open-outline" size={16} color="#eab308" />
                </View>
                <Text style={styles.itemDesc}>{repo.desc}</Text>
                <View style={{marginTop: 15, alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, backgroundColor: 'rgba(234,179,8,0.1)', borderWidth: 1, borderColor: 'rgba(234,179,8,0.3)'}}>
                  <Text style={{color: '#eab308', fontSize: 11, fontWeight: '600', textTransform: 'uppercase'}}>{repo.lang}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );

  const renderSkills = () => (
    <LinearGradient colors={['#0a0a0a', '#171717']} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.pageHeader}>
          <TouchableOpacity onPress={() => setCurrentView('Home')} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={24} color="#e5e5e5" />
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Skills</Text>
        </View>
        <ScrollView contentContainerStyle={styles.listContent}>
          
          <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.01)']} style={styles.skillBox}>
            <Text style={styles.skillBoxTitle}>Languages</Text>
            <Text style={styles.skillBoxText}>• Java{'\n'}• Python{'\n'}• JavaScript (React / Node)</Text>
          </LinearGradient>
          
          <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.01)']} style={styles.skillBox}>
            <Text style={styles.skillBoxTitle}>Mobile Development</Text>
            <Text style={styles.skillBoxText}>• Flutter{'\n'}• React Native{'\n'}• Expo SDK</Text>
          </LinearGradient>

          <LinearGradient colors={['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.01)']} style={styles.skillBox}>
            <Text style={styles.skillBoxTitle}>Database & Backend</Text>
            <Text style={styles.skillBoxText}>• Certiport IT Specialist - Databases{'\n'}• Relational Databases (SQL){'\n'}• NoSQL (MongoDB)</Text>
          </LinearGradient>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );

  if (currentView === 'Projects') return renderProjects();
  if (currentView === 'Skills') return renderSkills();
  return renderHome();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingTop: 50,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#a3a3a3',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 2,
    alignSelf: 'flex-start',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  avatarGlow: {
    padding: 4,
    borderRadius: 70,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(234, 179, 8, 0.4)',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 26,
    fontWeight: '300',
    color: '#ffffff',
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    fontSize: 13,
    color: '#a3a3a3',
    letterSpacing: 3,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  socialRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    gap: 20,
  },
  socialIcon: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  aboutContainer: {
    width: '100%',
    marginBottom: 40,
  },
  aboutText: {
    color: '#d4d4d4',
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '300',
    letterSpacing: 0.5,
  },
  skillsContainer: {
    width: '100%',
    marginBottom: 40,
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  skillPill: {
    width: '48%',
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  skillGradient: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  skillText: {
    color: '#e5e5e5',
    fontWeight: '400',
    fontSize: 13,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  statCardContainer: {
    width: '48%',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  statCard: {
    padding: 24,
    height: 140,
    justifyContent: 'space-between',
  },
  statIcon: {
    marginBottom: 10,
  },
  statTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#a3a3a3',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  statNumberContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  statNumber: {
    fontSize: 34,
    fontWeight: '300',
    color: '#ffffff',
  },
  statLabel: {
    fontSize: 11,
    color: '#737373',
    marginLeft: 6,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  experienceContainer: {
    width: '100%',
    marginBottom: 40,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#eab308',
    marginTop: 6,
    marginRight: 15,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 20,
    borderLeftWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    paddingLeft: 20,
    marginLeft: -20,
  },
  timelineRole: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '400',
    letterSpacing: 1,
    marginBottom: 4,
  },
  timelineCompany: {
    color: '#a3a3a3',
    fontSize: 13,
    fontWeight: '300',
  },
  infoContainer: {
    borderRadius: 24,
    width: '100%',
    padding: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    marginBottom: 40,
  },
  infoTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 25,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoDetails: {
    flex: 1,
  },
  infoLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconMargin: {
    marginRight: 15,
  },
  infoText: {
    color: '#d4d4d4',
    fontSize: 14,
    fontWeight: '300',
    letterSpacing: 0.5,
  },
  actionBtnContainer: {
    width: '100%',
    marginBottom: 40,
  },
  actionBtn: {
    flexDirection: 'row',
    paddingVertical: 18,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#eab308',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  actionBtnText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginRight: 10,
  },
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnText: {
    color: '#e5e5e5',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: '#ffffff',
    marginLeft: 30,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  listContent: {
    padding: 24,
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    overflow: 'hidden',
  },
  listInner: {
    padding: 24,
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 10,
    letterSpacing: 1,
  },
  itemDesc: {
    fontSize: 14,
    color: '#a3a3a3',
    lineHeight: 24,
    fontWeight: '300',
  },
  skillBox: {
    padding: 30,
    borderRadius: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  skillBoxTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#e5e5e5',
    marginBottom: 15,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  skillBoxText: {
    fontSize: 15,
    color: '#a3a3a3',
    lineHeight: 30,
    fontWeight: '300',
    letterSpacing: 0.5,
  }
});
