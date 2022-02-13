import { Component } from "react";
import { NewsList } from "./NewsList";
import {data} from "../data";
import { Form } from "./Form";

export class Page extends Component {
    state = {
        items: data,
        isEditing: false
    }
    addNews = (news) => {
        this.setState({
            items: [
                news, ...this.state.items
            ]
        })
    }
    removeHandler = (id) => {
        const findIndex = this.state.items.findIndex(el => el.id === id)
        this.setState({
            items: data.splice(findIndex, 1)
        })
    }
    render() {
        
        return (
            <>
                <button onClick={() => this.setState({ isEditing: !this.state.isEditing })}>
                    {this.state.isEditing ? 'Cancel' : 'Add news'}
                </button>
                { this.state.isEditing && 
                    <Form onAddListItem={this.addNews}/>
                }
                <NewsList onRemove={this.removeHandler} dataList={this.state.items}/>
            </>
            
        )
    }
}