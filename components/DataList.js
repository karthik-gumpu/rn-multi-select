import React from 'react';
import { StyleSheet, Text, View, FlatList, CheckBox } from 'react-native';
import {
  Header,
  ListItem,
  Button,
  Icon,
} from 'react-native-elements';

class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [], 
      selectedItems: []
    };

    for (let i = 1; i <= 10; i++) {
      this.state.list.push(this.createRandomItem());
    }
  }
  
  createItem = (index, randomStatus) => {
    return { 
      id: index, 
      name: `Item ${index}`, 
      details: `Status: ${randomStatus}`
    };
  }

  createRandomItem = () => {
    const int = parseInt((Math.random() * 100) + '', 10);
    const randomStatus = Math.random() >= 0.3 ? "normal" : "alarm";
    return this.createItem(int, randomStatus);
  }

  onSelect = (selectedIndex) => {
    const index = this.state.selectedItems.indexOf(selectedIndex);
    const updatedSelectedItemsList = [...this.state.selectedItems];
    if (index === -1) {
      this.setState({
        selectedItems: [...updatedSelectedItemsList, selectedIndex]
      })
    }
    else {
      updatedSelectedItemsList.splice(index, 1);
      this.setState({
        selectedItems: updatedSelectedItemsList,
      });
    }
  }

  isSelected = (selectedIndex) => {
    return this.state.selectedItems.indexOf(selectedIndex) !==-1;
  }

  onDelete = () => {
    const updatedList = [...this.state.list];
    this.state.selectedItems.forEach((index) => {
      updatedList.splice(index, 1);
    });
    this.setState({
      list: updatedList, 
      selectedItems: [] 
    });
  } 

  onCancel = () => { 
    this.setState({ selectedItems: []})
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.list.map((item, index) => (
            <ListItem
              key={index}
              title={item.name}
              subtitle={`${item.details}`}
              chevron
              leftElement={
                <CheckBox
                  onValueChange={e => this.onSelect(index)}
                  value={this.isSelected(index)}
                />
              }
            />
          ))
        }
        {
          this.state.selectedItems.length ? (
              <View style={styles.footer}>
                <View style={{padding: 5}}><Text> {this.state.selectedItems.length} selected items </Text></View>
                <View style={{ flex:1 , flexDirection: 'row-reverse'}}>
                  <Button icon={<Icon name="menu" />} type="clear"/> 
                  <Button
                    icon={<Icon name="clear" />}
                    onPress={this.onCancel}
                    type="clear"
                  />
                  <Button
                    icon={<Icon name="delete" />}
                    onPress={this.onDelete}
                    type="clear"
                  />
                </View>
            </View>
          ): null
        }  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    position: 'absolute',
    backgroundColor: '#fff',
    height: 60,
    left: 0,
    right: 0,
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    elevation: 20
  },
});
export default DataList;
