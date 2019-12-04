import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text } from 'native-base'
import { ListCards } from '../components/ListCards'
import { arrival as channelData } from '../constants/RawData'
import { Container, Text, Content } from 'native-base'

export default ArrivalScreen = ({ navigation }) => {
  const Arrivals = channelData
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
            rotate
          />
        )
      })
    : []

  useEffect(() => {
    console.log('Arrival Mounted')
  }, [])

  return (
    <Container style={styles.container}>
      <Content>{Arrivals}</Content>
    </Container>
  )
}

ArrivalScreen.navigationOptions = {
  title: 'Arrivals to London',
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
