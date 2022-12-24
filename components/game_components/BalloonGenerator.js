import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Balloon from './Balloon'

const BalloonGenerator = () => {

    useEffect(() => {
        setInterval(() => {
            return <Balloon />
        },2000)
    },[])
}

export default BalloonGenerator