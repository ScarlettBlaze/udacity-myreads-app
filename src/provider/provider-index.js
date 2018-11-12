import React, {Component} from 'react';
export const InContext = React.createContext();


export default class providerIndex extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            alreadyRead: []
        }
    }
    render() {
        return (
            <InContext.Provider value={{...this.state}}>
                {this.props.children}
            </InContext.Provider>
        )
    }
}