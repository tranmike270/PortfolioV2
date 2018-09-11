import React, {Component} from 'react';
import {ListItem} from '../../../components';
import {TheList} from '../../../utils/List';
/**
 * @return {*} Container
 */
class WordWall extends Component {
    /**
     * function to set states
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.state = {
            phrasesList: TheList,
            indexOfShown: [],
            iAmIndexShown: 0,
        };
    };
    /**
     * Function that starts word animations
     */
    componentDidMount() {
        this.alternateWords();
        this.alternate = setInterval(
            () => this.alternateWords(),
            7000);
    };

    /**
     * Function to clear intervals
     */
    componentWillUnmount() {
        clearInterval(this.alternate);
    };

    /**
     * Function to repeat change word position
     */
    alternateWords() {
        const list = this.state.phrasesList;
        const shownIndexes = this.state.indexOfShown;
        console.log(list.length);
        for (let i = 0; i < shownIndexes.length; i++) {
            list[shownIndexes[i]].shown = false;
        };

        const newShown = [];
        for (let j = 0; j <= 30; j++) {
            let newIndex = Math.floor((Math.random() * (list.length-1)) + 0);
            newShown.push(newIndex);
            list[newIndex].shown = true;
        };

        this.setState({
            phrasesList: list,
            indexOfShown: newShown,
        });
    };

    /**
     * @return {*} Container
     */
    render() {
        const wordList = this.state.phrasesList;
        const List = wordList.map((item, index) => {

            let randomTop = Math.floor((Math.random() * 110) - 10);
            let randomLeft = Math.floor((Math.random() * 110) - 10);

            return (
                <ListItem key = {index} fontFamily = {item.fontFamily} show = {wordList[index].shown} listItem = {item} classes = {"phrase-"} top={`${randomTop}%`} left={`${randomLeft}%`}/>
            );
        });
        return (
            <div className={'col-md-12 about-display-body words'}>
                <div className={'words-container'}>
                    <ul>
                        {List}
                    </ul>
                </div>
            </div>
        );
    }
};

export default WordWall;
