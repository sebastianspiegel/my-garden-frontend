function SeedCardFront(props){

    return(
        <div onClick={props.handleClick}>
            <h2>{props.seed.seed.attributes.common_name}</h2>
            <p>{props.seed.seed.attributes.latin_name}</p>
            <img src={props.seed.seed.attributes.img} alt={props.seed.seed.attributes.common_name} className="seed-avatar"/>
            
        </div>
    )
}

export default SeedCardFront 