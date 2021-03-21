export default function NewSeedForm(props){



    return(
        <form onSubmit={this.handleSubmit}>
                    Common Name: <input type="text" name="common_name" value={this.state.common_name} onChange={this.handleChange}/><br/>
                    Latin Name: <input type="text" name="latin_name" value={this.state.latin_name} onChange={this.handleChange}/><br/>
                    Image: <input type="text" name="img" value={this.state.img} onChange={this.handleChange}/><br/>
                    Information: <input type="text" name="info" value={this.state.info} onChange={this.handleChange}/><br/>
                    <input type="submit" />
        </form>
    )
}