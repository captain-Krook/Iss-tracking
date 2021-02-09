import React from "react"
import ReactMapGL, { Marker } from "react-map-gl"
import Image from "next/image"
import styles from "./map.module.css"
import useSWR from "swr"

const token = process.env.NEXT_PUBLIC_TOKEN_MAP

const MapView = ({ issPosition }) => {
  const { data } = useSWR(process.env.NEXT_PUBLIC_END_POINT, {
    refreshInterval: 500,
    initialData: issPosition,
  })

  const { longitude, latitude } = data.iss_position

  return (
    <>
      <ReactMapGL
        mapboxApiAccessToken={token}
        width="100vw"
        latitude={Number(latitude)}
        longitude={Number(longitude)}
        zoom={2}
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        scrollZoomDisabled={true}
        captureScroll={true}
        scrollZoom={false}
        dragPan={false}
      >
        <div className={styles.contentInfos}>
          <h1 className={styles.title}>INFOS ISS</h1>
          <div className={styles.tracking}>
            <span>LAT : {latitude}</span>
            <span>LONG : {longitude}</span>
          </div>
        </div>

        <Marker latitude={Number(latitude)} longitude={Number(longitude)}>
          <div className={styles.ripple1}></div>
          <div className={styles.ripple2}></div>
          <div className={styles.ripple3}></div>
          <Image src="/satellite-station.png" alt="iss" width={100} height={100} />
        </Marker>
      </ReactMapGL>
    </>
  )
}

export async function getStaticProps() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const issPosition = await fetcher(process.env.NEXT_PUBLIC_END_POINT, fetcher, {
    refreshInterval: 500,
  })

  return { props: { issPosition: issPosition } }
}

export default React.memo(MapView)
