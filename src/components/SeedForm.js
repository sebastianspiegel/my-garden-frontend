import React from 'react'

class SeedForm extends React.Component {

    state = {
        common_name: "",
        latin_name: "",
        img: "",
        info: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const requestObj = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ seed: this.state }),
        };

        fetch("http://localhost:3000/seeds", requestObj)
        .then((res) => res.json())
        .then((seed) => {
            console.log(seed)
        });

        this.setState({
            common_name: "",
            latin_name: "",
            img: "",
            info: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Common Name: <input type="text" name="common_name" value={this.state.common_name} onChange={this.handleChange}/><br/>
                    Latin Name: <input type="text" name="latin_name" value={this.state.latin_name} onChange={this.handleChange}/><br/>
                    Image: <input type="text" name="img" value={this.state.img} onChange={this.handleChange}/><br/>
                    Information: <input type="text" name="info" value={this.state.info} onChange={this.handleChange}/><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default SeedForm 