import Link from "next/link"

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "black",
        margin: "auto",
        height: "15em",
        width: "50em",
        marginTop: "10em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 2px 15px -5px #000000",
      }}
    >
      <Link href="/mapIss/map">
        <h1 style={{ color: "white", cursor: "pointer" }}>ISS TRACKING</h1>
      </Link>
    </div>
  )
}
