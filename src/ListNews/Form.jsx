import { Component } from "react";
import faker from '@faker-js/faker'
import { getBase64 } from "./utils";

export class Form extends Component {
    
    state = {
        item: {
            title: '',
            author: '',
            description: '',
            photo: ''
        },
        valida: false
    }
    validate = () => {
        for (let key in this.state.item) {
            if (!this.state.item[key]) {
                return false
            }
        }
        return true
    }

    handleSubmit = (e) => {
        
        e.preventDefault();

        if(!this.validate()) {
            this.setState({
                valida: true
            })
            
            return
        } 
        this.setState({
            valida: false
        })
        const news = this.state.item;
        const ListItem = {
            id: faker.datatype.uuid,
            ...news,
        }
        this.props.onAddListItem(ListItem);
        this.setState({
            item: {
                title: '',
                author: '',
                description: '',
                photo: ''
            }
            
        })
        
    }

    handleChangeText = (e) => {
        const input = e.currentTarget;
        const { value, name } = input;

        this.setState({
            item: {
                ...this.state.item,
                [name]: value
            }
        })
    }

    handleChangePhoto = (e) => {
        const file = e.currentTarget.files[0];
        getBase64(file, (base64) => {
            this.setState({
                item: {

                    photo: base64
                }
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit} action="" >
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input value={this.state.item.title} onChange={this.handleChangeText} id="title" name="title"/>
                        { this.state.valida && 
                            <span style={{'color': 'red'}}>Это поле ОЧЕНЬ НАМ НУЖНО</span>                
                            }
                    </div>
                    <div>
                        <label htmlFor="author">Author: </label>
                        <input type="text" value={this.state.item.author} onChange={this.handleChangeText} id="author" name="author"/>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <textarea type="text" value={this.state.item.description} onChange={this.handleChangeText} id="description" name="description"/>
                    </div>
                    <div>
                        <label htmlFor="photo">Photo: </label>
                        {console.log()}
                        {
                            this.state?.item?.photo?.length > 0 && (

                                <img width={350} src={this.state.item.photo} alt="" />
                            )
                        }

                        <input type="file" accept=".jpeg,.png" onChange={this.handleChangePhoto} id="description" />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}