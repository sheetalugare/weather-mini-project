import { Button, Grid, Stack } from '@mui/material';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { MuiButton } from '../mui-button/MuiButton';
import MuiTextField from '../mui-text-field/MuiTextField';
import styles from './WeatherPage.module.css';

const WeatherPage = () => {

    const [city, setCity] = useState('')
    const [country, setCountry] = useState('india')
    const [isError, setIsError] = useState(false)
    const [fetchedWeather, setFetchedWeather] = useState<any>(null)

    const apiKey = 'f56f24967aaf51182d1d4df628297c6d'

    const getWetherDetails = (cityName: any) => {
        if (!cityName) return
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
        axios.get(apiURL).then((res) => {
            setFetchedWeather(res.data)
            setIsError(false)
        }).catch((err: any) => {
            setIsError(true)
        })
    }

    const onSubmit = (city: string, country: string) => {
        getWetherDetails(city)
    }

    const epocToUtcConvertor = (time: any) => {
        const d = new Date(time);
        d.setUTCSeconds(time);
        return moment(d).format('HH:MM:ss A')
    }

    console.log(fetchedWeather, 'fetchedWeather')
    return (
        <Stack rowGap={7} alignItems={'center'} className={styles['weather-app-container']} >
            <div className={styles['weather-app-text']} >Weather App</div>
            <Stack direction={'row'} columnGap={2} >
                <MuiTextField value={city} onChange={(event: any) => setCity(event.target.value)} />
                <MuiTextField value={country} onChange={(event: any) => setCountry(event.target.value)} />
                <MuiButton size={'small'} onClick={() => onSubmit(city, country)} >Submit</MuiButton>
            </Stack>
            {isError && <span style={{ color: "red", fontSize: '20px' }}>please check your city spelling</span>}
            <Stack rowGap={2} direction={'column'} className={styles['weather-details']} >
                <Stack direction={'column'} >
                    <span className={styles['weather-place']} >{fetchedWeather?.name} , IN Weather</span>
                    <span className={styles['weather-time']} >As of {moment(new Date()).format('HH:MM:SS A')}</span>
                </Stack>
                <Stack className={styles['temperature']} alignItems={'center'} >
                    {fetchedWeather?.main?.temp ? (Number(fetchedWeather?.main?.temp) - 273.15).toFixed(0) : ''}deg
                </Stack>
                <Stack className={styles['weather-haze']}>Haze</Stack>
            </Stack>
            <Grid container rowGap={3} columnGap={3} justifyContent={'space-between'}
                className={styles['other-details']} >
                <Grid item md={4} lg={4} xl={4} className={styles['grid-items']} >
                    <span className={styles['grid-items-span-1']} >High/Low</span>
                    <span className={styles['grid-items-span-2']} >
                        {fetchedWeather?.main?.temp_max ? (Number(fetchedWeather?.main?.temp_max) - 273.15).toFixed(0) : ''}/
                        {fetchedWeather?.main?.temp_min ? (Number(fetchedWeather?.main?.temp_min) - 273.15).toFixed(0) : ''}
                    </span>
                </Grid>
                <Grid item md={5} lg={5} xl={5} className={styles['grid-items']} >
                    <span className={styles['grid-items-span-1']} >Wind</span>
                    <span className={styles['grid-items-span-2']} >
                        {fetchedWeather?.wind?.speed ? fetchedWeather?.wind?.speed : ''}km/hr
                    </span>
                </Grid>
                <Grid item md={4} lg={4} xl={4} className={styles['grid-items']} >
                    <span className={styles['grid-items-span-1']} >Humidity</span>
                    <span className={styles['grid-items-span-2']} >{fetchedWeather?.main?.humidity ? fetchedWeather?.main?.humidity : ''}deg</span>
                </Grid>
                <Grid item md={5} lg={5} xl={5} className={styles['grid-items']} >
                    <span className={styles['grid-items-span-1']} >Wind Direction</span>
                    <span className={styles['grid-items-span-2']} >{fetchedWeather?.wind?.deg ? fetchedWeather?.wind?.deg : ''}deg</span>
                </Grid>
                <Grid item md={4} lg={4} xl={4} className={styles['grid-items']} >
                    <span className={styles['grid-items-span-1']} >Pressure</span>
                    <span className={styles['grid-items-span-2']} >
                        {fetchedWeather?.main?.pressure ? fetchedWeather?.main?.pressure : ''}hPa
                    </span>
                </Grid>
                <Grid item md={5} lg={5} xl={5} className={styles['grid-items']} >
                    <span className={styles['grid-items-span-1']} >Sunrise</span>
                    <span className={styles['grid-items-span-2']} >
                        {fetchedWeather?.sys?.sunset ? epocToUtcConvertor(fetchedWeather?.sys?.sunset) : ''}
                    </span>
                </Grid>
                <Grid item md={4} lg={4} xl={4} className={styles['grid-items']} >
                    <span className={styles['grid-items-span-1']} >Visibility</span>
                    <span className={styles['grid-items-span-2']} >
                        {fetchedWeather?.visibility ? `${Number(fetchedWeather?.visibility) / 1000} km` : ''}
                    </span>
                </Grid>
                <Grid item md={5} lg={5} xl={5} className={styles['grid-items']} >
                    <span className={styles['grid-items-span-1']} >Sunset</span>
                    <span className={styles['grid-items-span-2']} >
                        {fetchedWeather?.sys?.sunrise ? epocToUtcConvertor(fetchedWeather?.sys?.sunrise) : ''}
                    </span>
                </Grid>
            </Grid>
        </Stack >
    )
}

export default WeatherPage;