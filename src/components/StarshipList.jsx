function StarshipList({ starships }) {
    return (
    <>
        <div>
            <h3>Starships</h3>
            <ul>
                {starships.map((ship, index) => (
                    <li key={index}>
                        <h2>{ship.name}</h2>
                        <p>Model: {ship.model}</p>
                        <p>Manufacturer: {ship.manufacturer}</p>
                        <p>Cost: {ship.cost_in_credits} credits</p>
                    </li>
                ))}
            </ul>
        </div>
    </>
    );
  } 
export default StarshipList;