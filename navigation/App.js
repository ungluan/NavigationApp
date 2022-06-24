import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen(props) {
  const {navigation} = props;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details', {
          itemId: '70820374',
          name: 'Ung Nguyen Truong Luan',
          person: {
            nickName: 'UngLuan',
            year: 2000
          }
        })}
      />
      <View style={{height: 32}} />
      <Button title="PopToTop" onPress={navigation.popToTop} />
    </View>
  );
}
function DetailScreen(props) {
  const {navigation, route} = props;
  const {itemId, name, person} = route.params
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Detail Screen of {itemId} and {name}</Text>
      <Text>Person: nickName: {person.nickName} year: {person.year}</Text>
      <Button title="Go back Home" onPress={()=>navigation.navigate('Home')} />
      <View style={{height: 32}} />
      <Button title="Go back" onPress={navigation.goBack} />
      <View style={{height: 32}} />
      <Button title="Push to Home" onPress={()=>navigation.push('Home')} />
      <View style={{height: 32}} />
      <Button title="Set Params" onPress={()=>{
        navigation.setParams({
          itemId: '70820374_Edited'
        })
      }} />
    </View>
  );
}

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
