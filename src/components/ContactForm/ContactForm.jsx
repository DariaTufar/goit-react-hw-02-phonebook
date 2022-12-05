import React, { Component } from 'react';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    contactUpdate = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.addContact({
            name: this.state.name,
            number: this.state.number,
        });
        
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form> 
                <label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />
                </label>
                <label>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        />
                </label>
                <button type='submit'> Add contact</button>
            </form>
        )
    }
}