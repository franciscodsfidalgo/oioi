import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import React, { Component } from "react";
import { DropTarget } from 'react-drag-drop-container';
import { Emoji } from 'emoji-mart';
import { connect } from 'react-redux';
import { LogIn, SignUp } from '../../actions/authActions';
import Hash from 'object-hash';

class EmojiPassBoard extends Component {
    constructor(props) {
        super(props);
        this.onClickLogIn = this.onClickLogIn.bind(this);
        this.onClickSignUp = this.onClickSignUp.bind(this);
        this.state = {
            email: '',
            password: '',
            userName: '',
            passBoard: ''

        }
    }

    onClickLogIn() {
        this.props.LogIn(this.state);
    }

    onClickSignUp() {
        this.props.SignUp(this.state);
    }

    handleDrop = (e) => {
        e.stopPropagation();
        if (this.props.wrong === null) {
            e.containerElem.style.visibility = "hidden";
        }
    }

    onClickReset = (e) => {
        this.props.resetPassBoard();
    }

    componentDidUpdate() {
        let passBoardComplete = 0;
        let passBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.props.passBoard.map(item => {
            if (typeof item === 'object') {
                passBoardComplete++;
            }

            if (passBoardComplete === 3 && this.state.email === '') {
                for (let i = 0; i < 9; i++) {
                    if (typeof this.props.passBoard[i] === 'object') {
                        passBoard[i] = this.props.passBoard[i];
                    }
                }
                this.setState({
                    email: Hash(this.props.emojis) + '@email.email',
                    password: Hash(this.props.passBoard),
                    userName: this.props.emojis,
                    passBoard: passBoard
                });
            };
        }
        )
    }

    render() {
        let { passBoard, authError } = this.props;
        return (
            <div>
                <div className='row justify-content-center'>
                    <DropTarget dropData={0} targetKey={1} onHit={this.handleDrop}>
                        <div className="box">
                            <div className="dot">
                                {typeof passBoard[0] === 'object' && <Emoji emoji={passBoard[0].emoji} size={40} />}
                            </div>
                        </div>
                    </DropTarget>
                    <DropTarget dropData={1} targetKey={1} onHit={this.handleDrop}>
                        <div className="box">
                            <div className="dot">
                                {typeof passBoard[1] === 'object' && <Emoji emoji={passBoard[1].emoji} size={40} />}
                            </div>
                        </div>
                    </DropTarget>
                    <DropTarget dropData={2} targetKey={1} onHit={this.handleDrop}>
                        <div className="box">
                            <div className="dot">
                                {typeof passBoard[2] === 'object' && <Emoji emoji={passBoard[2].emoji} size={40} />}
                            </div>
                        </div>
                    </DropTarget>
                </div>
                <div className='row justify-content-center'>
                    <DropTarget dropData={3} targetKey={1} onHit={this.handleDrop}>
                        <div className="box">
                            <div className="dot">
                                {typeof passBoard[3] === 'object' && <Emoji emoji={passBoard[3].emoji} size={40} />}
                            </div>
                        </div>
                    </DropTarget>
                    <DropTarget dropData={4} targetKey={1} onHit={this.handleDrop}>
                        <div className="box">
                            <div className="dot">
                                {typeof passBoard[4] === 'object' && <Emoji emoji={passBoard[4].emoji} size={40} />}
                            </div>
                        </div>
                    </DropTarget>
                    <DropTarget dropData={5} targetKey={1} onHit={this.handleDrop}>
                        <div className="box">
                            <div className="dot">
                                {typeof passBoard[5] === 'object' && <Emoji emoji={passBoard[5].emoji} size={40} />}
                            </div>
                        </div>
                    </DropTarget>
                </div>
                <div className='row justify-content-center'>

                    <DropTarget dropData={6} targetKey={1} onHit={this.handleDrop}>
                        <div className="box">
                            <div className="dot">
                                {typeof passBoard[6] === 'object' && <Emoji emoji={passBoard[6].emoji} size={40} />}
                            </div>
                        </div>
                    </DropTarget>
                    <DropTarget dropData={7} targetKey={1} onHit={this.handleDrop}>
                        <div className="box">
                            <div className="dot">
                                {typeof passBoard[7] === 'object' && <Emoji emoji={passBoard[7].emoji} size={40} />}
                            </div>
                        </div>
                    </DropTarget>
                    <DropTarget dropData={8} targetKey={1} onHit={this.handleDrop}>
                        <div className="box">
                            <div className="dot">
                                {typeof passBoard[8] === 'object' && <Emoji emoji={passBoard[8].emoji} size={40} />}
                            </div>
                        </div>
                    </DropTarget>
                </div>
                <div className='row justify-content-center'>
                    <button onClick={this.onClickLogIn}>Log In</button>
                    <button onClick={this.onClickSignUp}>Sign Up</button>
                </div>
                <div className='row justify-content-center red-text center'>
                    {authError ? <p>{authError}</p> : null}
                </div>
                <style jsx>{`
                    .box {
                    width: 80px;
                    height: 80px;
                    margin: 10px;
                    padding: 5px;
                    }
                    .dot {
                    height: 40px;
                    width: 40px;
                    background-color: #bbb;
                    border-radius: 50%;
                    text-align: center;
                    margin: 15px;
                    }
                    `}
                </style>
            </div>
        );
    }
}

const mapDispatchToProps = (dispacth) => {
    return {
        LogIn: (creds) => dispacth(LogIn(creds)),
        SignUp: (creds) => dispacth(SignUp(creds))
    }
}

const mapStateToProps = state => {
    return {
        authError: state.authR.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiPassBoard);
