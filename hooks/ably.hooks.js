import { useState, useEffect } from 'react'
import { ably } from '../env'

//set CHANNEL_SCOPE  channel
const CHANNEL_NAME =
  '[product:ably-flightradar24/heathrow-flights]flights:airport:LHR'
export const useAblyChannel = (channel, dependencies) => {
  const [onMessage, setOnMessage] = useState('Please wait..')

  const [isLoading, setLoading] = useState(true)
  //fetch channel data
  const [channelData, setChannelData] = useState(null)

  useEffect(() => {
    //add ably connection here

    console.log('Ran Use Effects', channel)
    // know the current state of the application
    ably.connection.on(function(stateChange) {
      console.log('New connection state is ' + stateChange.current)
      setOnMessage(stateChange.current)
      setLoading(true)
    })
    // use the channel scope in the application
    const useChannel = ably.channels.get(`${CHANNEL_NAME}:${channel}`)
    useChannel.subscribe(message => {
      if (message.data.length > 0) {
        setOnMessage('Loading Data...')
        setLoading(false)
        setChannelData(message.data)
      }
    })
  }, dependencies)

  return [isLoading, onMessage, channelData]
}
