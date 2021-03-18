function SeedCardFront(props){

    return(
        <div onClick={props.handleClick}>
            <h2>{props.seed.common_name}</h2>
            <p>{props.seed.latin_name}</p>
            <img src={props.seed.img} alt={props.seed.common_name} className="seed-avatar"/>
        </div>
    )
}

export default SeedCardFront 