import React from "react";
import {
  Button,
  SectionList,
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Constants } from "expo";
import contacts, { compareNames } from "./contacts";
import Row from "./Row";
import ContactList from "./ContactList";
import AddContactForm from "./AddContactForm";
export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
    showForm: false
  };
  toggleContacts = () => {
    this.setState(prevState => ({
      showContacts: !prevState.showContacts
    }));
  };
  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  };

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }));
  };

  //renderItem = ({ item }) => <Row {...item} />;

  render() {
    if (this.state.showForm) return <AddContactForm />;

    return (
      <View style={styles.container}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <Button title="Add Contact" onPress={this.toggleForm} />
        {this.state.showContacts && (
          <ContactList contacts={this.state.contacts} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight
  }
});
