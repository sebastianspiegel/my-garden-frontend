function SeedCardBack(props){

    return(
        <div onClick={props.handleClick}>
            <h2>{props.seed.seed.attributes.common_name}</h2>
            <p>{props.seed.seed.attributes.latin_name}</p>
            <p>{props.seed.seed.attributes.info}</p>
            
        </div>
    )
}

export default SeedCardBack