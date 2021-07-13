import React, {useEffect, useState} from 'react'
import classes from './Clock.module.css'

export type PropsType = {
    mode?: "analog" | "digital" | undefined
}

const Clock: React.FC<PropsType> = (props: PropsType) => {
    const [date, setDate] = useState(new Date())
    const {mode} = props

    useEffect(() => {
        const inetrvalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(inetrvalID)
        }
    }, [])


    /*const secondsString = get2digitsString(date.getSeconds())
    const minutesString = get2digitsString(date.getMinutes())
    const hoursString = get2digitsString(date.getMinutes())*/
    if (mode === "digital") {
        return <DigitalClockView date={date}/>
    }

    return (
        <AnalogClockView date={date}/>
    )
}

export default Clock

export type DigitalClockViewPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<DigitalClockViewPropsType> = (props: DigitalClockViewPropsType) => {
    const {date} = props
    const get2digitsString = (num: number) => num < 10 ? "0" + num : num;
    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    )
}

export const AnalogClockView: React.FC<DigitalClockViewPropsType> = (props: DigitalClockViewPropsType) => {
    const {date} = props
    console.log(date)
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return (
        <div className={classes.clock}>
            {/*<h1>Analog Clock</h1>*/}
            <div className={classes.analogClock}>
                <div className={`${classes.dial} ${classes.seconds}`} style={secondsStyle}/>
                <div className={`${classes.dial} ${classes.minutes}`} style={minutesStyle}/>
                <div className={`${classes.dial} ${classes.hours}`} style={hoursStyle}/>
            </div>
        </div>
    )
}
