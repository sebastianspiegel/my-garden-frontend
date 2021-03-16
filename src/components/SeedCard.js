

function ToyCard(props){

    return(
        <div className="card">
            <h2>{props.seed.common_name}</h2>
            <h4>{props.seed.latin_name}</h4>
            <img src={props.seed.img} className="seed-avatar"/>
            <button>Remove</button>
        </div>
    )
}

export default ToyCard