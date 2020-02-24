/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends React.Component {
  state = {
    pokemon: [],
    showPokemon: undefined
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })
  }

  handlePress = (poke) => {
    this.setState({
      showPokemon: poke
    })
  }

  renderPokemon = () => {
    return this.state.pokemon.map(poke => {
      return (
        <TouchableHighlight 
          onPress={() => this.handlePress(poke)}
          style={styles.pokeCard}>
          <View> 
            <Image
              style={{width: 50, height: 50}}
              source={{ uri: poke.sprites.front }}
            />
            <Text>{poke.name} </Text>
          </View>
        </TouchableHighlight>
      )
    })
  }

  renderShow = () => {
    const {showPokemon} = this.state
    return <View>
      <Router >
        <Route path='home' component={Dashboard} />
      </Router >
        <Image
          style={{width: 50, height: 50}}
          source={{ uri: showPokemon.sprites.front }}
        />
        <Text>{showPokemon.name} </Text>
        <Text> weight: {showPokemon.weight} </Text>
        <Text> height: {showPokemon.height} </Text>
    </View>
  }


  render() {
    return (
      <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
           {this.state.showPokemon ? this.renderShow() : this.renderPokemon()}
        </ScrollView>
      </SafeAreaView>
    </View>
      )
  }
}


const styles = StyleSheet.create({
  pokeCard: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    padding: 20
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
