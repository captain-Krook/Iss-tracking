import "tailwindcss/tailwind.css"
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl"
import Image from "next/image"
import useSWR from "swr"
import { IconeAvatar } from ".././../components/IconAvatar/IconAvatar"

const token = "pk.eyJ1IjoiYmVucmFtIiwiYSI6ImNra3JlZjdndDBueXEyeHBmazE4OTk2aTcifQ.V4b7Nc7nSktfN73tLpHqLA"

const MapView = ({ issPosition, team }) => {
  const { data } = useSWR("http://api.open-notify.org/iss-now.json", {
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
        <IconeAvatar team={team} />
        {data.iss_position.latitude}
        <Marker latitude={Number(latitude)} longitude={Number(longitude)}>
          <Image src="/satellite-station.png" alt="iss" width={100} height={100} />
        </Marker>
      </ReactMapGL>
    </>
  )
}

export async function getStaticProps() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const issProps = await fetcher("http://api.open-notify.org/iss-now.json", fetcher, { refreshInterval: 500 })
  const getIssTeam = await fetch("http://api.open-notify.org/astros.json")

  const issTeam = await getIssTeam.json()

  return { props: { issPosition: issProps, team: issTeam } }
}

export default MapView
