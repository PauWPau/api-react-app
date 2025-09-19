import { useEffect, useState } from "react"

export default function Crypto() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1")
      .then((res) => res.json())
      .then((data) => setCoins(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <section>
      <h2>Top 20 Criptomonedas</h2>
      {coins.length > 0 ? (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id} style={{ marginBottom: "20px" }}>
              <img src={coin.image} alt={coin.name} width={40} style={{ verticalAlign: "middle" }} />
              <strong> {coin.name} ({coin.symbol.toUpperCase()})</strong>
              <p>💰 Precio: USD {coin.current_price.toLocaleString()}</p>
              <p>📊 Market Cap: USD {coin.market_cap.toLocaleString()}</p>
              <p>
                📈 Cambio 24h:{" "}
                <span style={{ color: coin.price_change_percentage_24h > 0 ? "green" : "red" }}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando criptos...</p>
      )}
    </section>
  )
}

