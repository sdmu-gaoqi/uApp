import React, { useState, useEffect } from 'react'
import { useApp } from '../../stores/initialState/context'
import { useLocation } from 'react-router-dom'
import {
    1
} from '../../hooks'

const Test = (props) => {
    const [store] = useApp()
    console.log(store, "store", useParams())
    return (
        <>
        </>
    )
}

export default Test