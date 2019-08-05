import React, { Component } from "react";
import Navbar from "./Nav";
import Header from "./Header";
import Image from "./Image";

function shuffle(obj) {
    let array = [];
    const entries = Object.entries(obj);
    for (const [key, value] of entries) {
        array.push({value});
    }
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

class ReactContainer extends Component {
    state = {
        score: 0,
        topScore: 0,
        demonstrate: "",
        message: "Click an image to begin!",
        img: {
            1: {
                id: 1,
                clicked: false,
                url: "/assets/images/beth.jpeg"
            },
            2: {
                id: 2,
                clicked: false,
                url: "/assets/images/birdperson.jpeg"
            },
            3: {
                id: 3,
                clicked: false,
                url: "/assets/images/evilmorty.jpeg"
            },
            4: {
                id: 4,
                clicked: false,
                url: "/assets/images/gianthead.jpeg"
            },
            5: {
                id: 5,
                clicked: false,
                url: "/assets/images/goldenfold.jpeg"
            },
            6: {
                id: 6,
                clicked: false,
                url: "/assets/images/jerry.jpeg"
            },
            7: {
                id: 7,
                clicked: false,
                url: "/assets/images/jussica.jpeg"
            },
            8: {
                id: 8,
                clicked: false,
                url: "/assets/images/meeseek.jpeg"
            },
            9: {
                id: 9,
                clicked: false,
                url: "/assets/images/morty.jpeg"
            },
            10: {
                id: 10,
                clicked: false,
                url: "/assets/images/mr.jpeg"
            },
            11: {
                id: 11,
                clicked: false,
                url: "/assets/images/rick.jpeg"
            },
            12: {
                id: 12,
                clicked: false,
                url: "/assets/images/summer.jpeg"
            }
        },
        images: []
    }

    handleOnClick = event => {
        const id = event.target.id;

        // include if clicked is already true
        if (this.state.score === 12 ) {
            let obj = this.state.img;
            for (var key in obj) {
                obj[key].clicked = false;
            }
            this.setState({
                img: obj,
                demonstrate: "correct",
                message: "You won the game!",
                topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore,
                images: shuffle(this.state.img)
            });
            this.setState({ score: 0 });
            setTimeout(() => {
                this.setState({ demonstrate: "" })
            }, 400);
        } else if (this.state.img[id].clicked) {
            let obj = this.state.img;
            for (var ele in obj) {
                obj[ele].clicked = false;
            }
            this.setState({
                img: obj, 
                demonstrate: "incorrect",
                message: "You are incorrect!",
                topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore,
                images: shuffle(this.state.img)
            });
            this.setState({ score: 0 });
            setTimeout(() => {
                this.setState({ demonstrate: "" })
            }, 400);
        } else {
            let obj = this.state.img;
            obj[id].clicked = true;
            this.setState({
                img: obj,
                score: this.state.score + 1,
                demonstrate: "correct",
                message: "You are correct!",
                images: shuffle(this.state.img)
            });
            setTimeout(() => {
                this.setState({ demonstrate: "" })
            }, 400);
        }

        // append img into an array again and shuffle the position, then append it to "this.state.images"
    };

    componentDidMount() {
        this.setState({images: shuffle(this.state.img)});
    };

    render() {
        return(
            <div>
                <Navbar score={this.state.score} topScore={this.state.topScore} demonstrate={this.state.demonstrate} message={this.state.message}/>
                <Header />
                <Image results={this.state.images} handleOnClick={this.handleOnClick}/>
            </div>
        );
    }
}

export default ReactContainer;