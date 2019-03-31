import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import React, { Component } from "react";
import { Emoji } from 'emoji-mart';
import { DragDropContainer } from 'react-drag-drop-container';

class EmojiUserName extends Component {
    handleDrop = (e) => {
        this.props.functionUpdate(e.dropData, e.dragData, e);
    };

    onClick = (e) => {
        this.props.resetEmojis(e);
    }

    render() {
        return (
            <div>
                <div className='row justify-content-center'>
                    <DragDropContainer
                        targetKey={1}
                        dragData={this.props.emojis[0]}
                        onDrop={this.handleDrop}
                    >
                        <div className='box'>
                            {this.props.emojis[0].emoji && <Emoji emoji={String(this.props.emojis[0].emoji.colons)} size={40} />}
                        </div>
                    </DragDropContainer>
                    <DragDropContainer
                        targetKey={1}
                        dragData={this.props.emojis[1]}
                        onDrop={this.handleDrop}
                    >
                        <div className='box'>
                            {this.props.emojis[1].emoji && <Emoji emoji={String(this.props.emojis[1].emoji.colons)} size={40} />}
                        </div>
                    </DragDropContainer>
                    <DragDropContainer
                        targetKey={1}
                        dragData={this.props.emojis[2]}
                        onDrop={this.handleDrop}
                    >
                        <div className='box'>
                            {this.props.emojis[2].emoji && <Emoji emoji={String(this.props.emojis[2].emoji.colons)} size={40} />}
                        </div>
                    </DragDropContainer>
                </div>
                <div className='row justify-content-center'>
                    <button onClick={this.onClick}>Reset</button>
                </div>
                <style jsx>{`
                 .box {
                    text-align: center;
                    border: 1px;
                    border-radius: 1px;
                    width: 50px;
                    height: 50px;
                    margin: 10px;
                    padding: 5px;
                    `}
                </style>
            </div>
        )
    }
}

export default EmojiUserName;
