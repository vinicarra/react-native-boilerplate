import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

import { exampleAction } from '../../actions/ExampleActions';
import { connect } from 'react-redux';

class ExamplePage extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={{ fontSize: 18 }}>This is a cool { this.props.boilerplate }</Text>
                <Button
                    onPress={ () => this.props.exampleAction() }
                    title="Go Redux!"
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        boilerplate: state.ExampleReducer.randomText
    }
}

export default connect(mapStateToProps, { exampleAction })(ExamplePage);