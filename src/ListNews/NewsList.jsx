import { Component, createRef } from "react";
import { ListItem } from "./ListItem";

export class NewsList extends Component {

    
    render() {
        const { onRemove, dataList } = this.props
        const NewsList = dataList.map((listItem) => (
            <ListItem
                key={listItem.id}
                onRemove={onRemove}
                item={listItem}
            />
        ))
        return (
            <div>
                <ul>
                    { NewsList }
                </ul>
            </div>
        )
    }
}