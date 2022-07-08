import { StyleSheet, ImageBackground, View, Text } from 'react-native'

const SplachScreen = () => {
  return (
    <View style={styles.splashScreenContainer}>
        <ImageBackground style={styles.background} source={require('../assets/images/img2.png')}></ImageBackground>
        <Text style={{color: "orange", fontSize: 22}}>SoloStudio</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    splashScreenContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
    },
    background:{
        height: 120,
        width: 120
    }
})

export default SplachScreen