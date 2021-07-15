import React from "react";

class FlashCard extends React.Component {

    kanjis = [
        { english: 'genki', japanese: '元気' },
        { english: 'hito', japanese: '人' },
        { english: 'nihon', japanese: '日本' },
        { english: 'shiroi', japanese: '白い' },
        { english: 'aka', japanese: '赤' }
    ];

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            word: this.kanjis[Math.floor(Math.random() * this.kanjis.length)],
            check: '',
            correct: 0,
            incorrect: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.valInput.focus();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.value === this.state.word.english) {
            this.setState({ correct: this.state.correct + 1 });
        } else {
            this.setState({ incorrect: this.state.incorrect + 1 });
        }
        this.setState({
            word: this.kanjis[Math.floor(Math.random() * this.kanjis.length)],
            value: ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <p>{this.state.correct}/{this.state.incorrect}</p>
                <p>{this.state.word.japanese}</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={(input) => { this.valInput = input; }} value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default FlashCard;