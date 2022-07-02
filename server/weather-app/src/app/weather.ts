export interface Weather {
    latitude: number
    longitude: number
    elevation: number
    generationtime_ms: number
    utc_offset_seconds: number
    daily: Daily
    daily_units: DailyUnits
}

export interface Daily {
    time: string[]
    temperature_2m_min: number[]
    temperature_2m_max: number[]
}

export interface DailyUnits {
    temperature_2m_min: string
    time: string
    temperature_2m_max: string
}
