import { Component, createRef } from "react";
import { gsap } from 'gsap';

export class ListItem extends Component {
    listItem = createRef();
    img = createRef();
    componentDidMount() {
        let listItem = this.listItem.current;
        let imgItem = this.img.current;

        let timeLine = gsap.timeline();
        let itemTansition = gsap.fromTo(listItem, {
            opacity: 0,
            y: 100,
            },
            {
                opacity: 1,
                y: 0,
                ease: 'easyInOut',
                duration: 1,
            })
        timeLine.add(itemTansition)
        let imgTransition = gsap.fromTo(imgItem, {
            opacity: 0,
        }, {
            opacity: 1,
            ease: 'linear',
            duration: 2 ,
        })
        timeLine.add(imgTransition)

    }


    render() {
        const { item: {
            title,
            text,
            description,
            photo,
            author,
            id
        }, onRemove } = this.props;
        return (
            <li ref={this.listItem}>
                <h3>{title}</h3>
                <span>{author}</span>
                <button onClick={() => onRemove(id)}>Remove news</button>
                <p>{text}</p>
                <img ref={this.img} src={photo} alt={description} />
                <p>{description}</p>
            </li>
        )
    }
}