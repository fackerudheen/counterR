import {configureStore} from "@reduxjs/toolkit"
import countreSlice from './countreSlice'

export const store=configureStore(
    {
        reducer:{
counter:countreSlice
        }
    }
)