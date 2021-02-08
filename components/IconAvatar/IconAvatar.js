import "tailwindcss/tailwind.css"
import styles from "./IconAvatar.module.css"

export const IconeAvatar = ({ team }) => {
  const { people } = team
  console.log(team)
  return (
    <div className={styles.content}>
      {people.map(({ name }, index) => (
        <div key={index} className={styles.box}>
          <img className="inline object-cover w-16 h-16 mr-2 rounded-full" src="/img/astro.jpg" alt="Profile image" />
          <h2 style={{ color: "white" }}>{name}</h2>
        </div>
      ))}
    </div>
  )
}
