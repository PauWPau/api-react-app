import { useEffect, useState } from "react"

export default function Dog() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/20")
      .then((res) => res.json())
      .then((data) => setDogs(data.message))
      .catch((err) => console.error(err))
  }, [])

  return (
    <section>
      <h2>Perritos 🐶</h2>
      {dogs.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px" }}>
          {dogs.map((dog, index) => (
            <img key={index} src={dog} alt="dog" style={{ width: "100%", borderRadius: "10px" }} />
          ))}
        </div>
      ) : (
        <p>Cargando perritos...</p>
      )}
    </section>
  )
}

