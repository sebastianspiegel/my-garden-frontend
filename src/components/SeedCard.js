

function SeedCard(props){

    function handleClick() {
        
    }

    return(
        <div className="card" onClick={handleClick}>
            <h2>{props.seed.attributes.common_name}</h2>
            <p>{props.seed.attributes.latin_name}</p>
            <img src={props.seed.attributes.img} alt={props.seed.attributes.info} className="seed-avatar"/>
            <button>Remove</button>
        </div>
    )
}

export default SeedCard