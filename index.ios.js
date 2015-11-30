/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    } = React;

var TableView = require('react-native-tableview');
var Section = TableView.Section;
var Item = TableView.Item;

var FooApp = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                <TableView style={styles.mytableview}
                           tableViewStyle={TableView.Consts.Style.Grouped}
                           tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
                           onPress={(event) => console.log(event)}>
                    <Section label="Section 1" arrow={true}>
                        <Item value="1" detail="Creator">Rich</Item>
                        <Item value="2">David</Item>
                        <Item>Stuart</Item>
                        <Item>John</Item>
                        <Item>Mike</Item>
                    </Section>
                    <Section label="Section 2" arrow={false}>
                        <Item selected={true}>ClojureScript</Item>
                        <Item>Ambly</Item>
                        <Item>Natal</Item>
                    </Section>
                </TableView>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    mytableview: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        flex: 1
    }
});

AppRegistry.registerComponent('FooApp', () => FooApp);
