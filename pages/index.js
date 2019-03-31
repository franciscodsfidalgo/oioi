import React, { Component } from "react";
import Layout_nopostbar from "../components/layout_nopostbar";
import { Picker } from 'emoji-mart';
import _ from 'lodash';
import EmojiUserName from "../components/login/emojiUserName";
import EmojiPassBoard from "../components/login/emojiPassBoard";
import 'emoji-mart/css/emoji-mart.css'
import Hash from 'object-hash';
import Head from "next/head";
import { connect } from 'react-redux';
import Router from 'next/router'



class Index extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSkinChange = this.onSkinChange.bind(this);
    this.updatePassBoard = this.updatePassBoard.bind(this);
    this.notWrong = this.notWrong.bind(this);
    this.resetEmoji = this.resetEmoji.bind(this);
    this.state = {
      emojis: [
        { id: 0, emoji: {}, },
        { id: 1, emoji: {}, },
        { id: 2, emoji: {}, }
      ],
      emojiToPick: 0,
      passBoard: [0],
      wrong: null,
      skinColor: 1,
    };
  }

  onChange(e) {
    let temp = this.state.emojis.slice();
    let temp2 = this.state.emojiToPick;
    temp2++;
    let j = 0;
    for (let i = 0; i < 3; i++) {
      if (Hash(temp[i].emoji) === Hash(e)) {
        j++;
      }
    }
    if (j === 0) {
      temp[this.state.emojiToPick].emoji = e;
      this.setState({
        emojis: temp,
        emojiToPick: temp2++
      });
    }
  }

  onSkinChange(e) {
    this.setState({ skinColor: e });
  }

  updatePassBoard(target, emoji) {
    let temp = this.state.passBoard.slice();
    if (typeof temp[target] !== 'object') {
      temp[target] = emoji;
      this.setState({ passBoard: temp });
      this.setState({ wrong: null })
    }
    else { this.setState({ wrong: true }) }
  }

  notWrong() {
    this.setState({ wrong: null });
  }

  resetEmoji() {
    this.setState({
      emojis: [
        { id: 0, emoji: {}, },
        { id: 1, emoji: {}, },
        { id: 2, emoji: {}, }
      ],
      emojiToPick: 0,
      passBoard: [0],
      wrong: null,
    });
  }

  render() {
    let picker = <Picker skin={this.state.skinColor} onSkinChange={this.onSkinChange} showSkinTones='true' exclude={['recent']} title='Pick your emoji…' emoji='point_up' onSelect={this.onChange} />
    if (this.state.emojiToPick === 3) {
      console.log('passboard', this.state.passBoard);
      picker = <EmojiPassBoard resetPassBoard={this.resetEmoji} passBoard={this.state.passBoard} wrong={this.state.wrong} notWrong={this.notWrong} emojis={this.state.emojis} />
    }
    let emo = '';
    if (this.state.emojiToPick !== 0) { emo = <EmojiUserName functionUpdate={this.updatePassBoard} emojis={this.state.emojis} passBoard={this.state.passBoard} resetEmojis={this.resetEmoji} /> }

    if(!this.props.auth){
      Router.push('/posts')
    }

    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Lancfessions</title>
          <link
            rel="stylesheet"
            href="https://bootswatch.com/4/united/bootstrap.min.css"
          />
        </Head>
        <div className='container-flex'>
          <div className='row lighten-2'>
            <p className="login text-center p-2">Pick 3 emojis to create your username</p>
          </div>
          <div >
            {emo}
          </div>
          <div className='row lighten-2'>
            <p className="login text-center p-2">Position the emojis in the grid as a password</p>
          </div>
          <div className='row justify-content-center' >
            {picker}
          </div>
        </div>
        <style jsx>{`
                .login {
                width: 100%;
                height: 100%;
                background-color: #cbcbcb;
                padding: 5%;
                align: 'center';
                border: 5%;
                align-items: 'center';
                }
                .container-flex {
                padding: 2%;
                }
                p {
                  color: #353535;
                  margin-bottom: 0;
                }
          
                a {
                  color: #595959;
                }
          
                name {
                  height: 100%; 
                }
          
                #__next {
                  height: 100%;
                }
          
                .nono {
                  height: 100%; 
                  display: -webkit-flex;
                  align-self: center;
                  justify-content: center;
                }
          
                body {
                  height: 100%; 
                }
          
                .customFlex {
                  flex: 1;
                }
              `}
        </style>
      </div >
      )
  }
}

const mapStateToProps = state => {
  return {
      auth: state.firebase.auth.isEmpty
  }
}

export default connect(mapStateToProps)(Index);
