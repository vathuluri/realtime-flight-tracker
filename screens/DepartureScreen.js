import React, { useEffect } from 'react'
import { Container, Text } from 'native-base'
import { StyleSheet } from 'react-native'

export default DepartureScreen = ({ navigation }) => {
  const Departures = channelData
    ? channelData.map((item, index) => {
        return (
          <ListCards
            key={index}
            text={`${item.origin} - ${item.destination} (${item.iataId})`}
            icon="ios-airplane"
            action={() =>
              navigation.navigate('PopModal', {
                iataId: item.iataId,
                action: 'arrival',
              })
            }
          />
        )
      })
    : []

  useEffect(() => {
    console.log('Depature Mounted')
  }, [])

  return (
    <Container style={styles.container}>
      <Container style={styles.container}>
        <Content>{Departures}</Content>
      </Container>
    </Container>
  )
}

DepartureScreen.navigationOptions = {
  title: 'Departures from London',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'center',
  },
})
