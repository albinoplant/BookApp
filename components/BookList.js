import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';

import { searchVolume, setSearchInput } from './reducer';

class BookList extends Component {

    
    componentDidMount() {
            this.props.searchVolume(this.searchItem);
    }
    
    searchItem = () => (this.props.searchInput)

    renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.volumeInfo.title}</Text>
        </View>
    );
    render() {
        console.log(this.props)

        const {books} = this.props;
        return (
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.props.setSearchInput(text)}
                    value={this.props.searchInput}
                />
                <FlatList
                    styles={styles.container}
                    data={books}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    input: {
        paddingLeft: 5,
        height: 40,
        borderBottomColor: 'black',
        borderWidth: 1,
    }
});

const mapStateToProps = (state) => {
    let input = state.searchInput;
    if(state.books.items){
        let storedBooks = state.books.items.map(item => ({ key: item.id, ...item}));
        return {
            books: storedBooks,
            searchInput: input
        };
    }else{
        return{
        books:[],
        searchInput: input
        };
    };
};

const mapDispatchToProps = {
    searchVolume,
    setSearchInput
};

export default connect( mapStateToProps, mapDispatchToProps )(BookList);