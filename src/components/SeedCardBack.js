function SeedCardBack(props){

    return(
        <div onClick={props.handleClick} id="card-back">
            <h2>{props.seed.common_name}</h2>
            <p>{props.seed.latin_name}</p>
            <p>{props.seed.info}</p>
            
        </div>
    )
}

export default SeedCardBack