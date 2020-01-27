import React, { Component } from "react"
import validator from "validator"

import Head from "../components/head"
import Layout from "../components/layout"

import {
    FaUser,
    FaEnvelope,
    FaExclamationTriangle,
    FaCheck,
} from "react-icons/fa"

import contactStyles from "./contact.module.scss"

class ContactPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            validForm: false,
            validEmail: true,
        }
    }

    handleChange = e => {
        this.setState(
            {
                [e.target.id]: e.target.value,
            },
            this.validateForm
        )
    }

    validateForm = () => {
        const { name, email, message } = this.state
        this.setState({
            validForm:
                name.length > 0 &&
                validator.isEmail(email) &&
                message.length > 0,
        })
    }

    validateEmail = () => {
        const { email } = this.state
        if (email.length > 0) {
            this.setState({
                validEmail: validator.isEmail(email),
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("handle submit")
    }

    removeNotification = () => {
        this.setState({ showNotification: false })
    }

    render() {
        const { name, email, message, validForm, validEmail } = this.state

        return (
            <>
                <Head title="Contact" />
                <Layout>
                    <h1 className="title is-1">dm sliding</h1>

                    {/* 
          revisit this twitter dm widget button when you can figure out a good
          way to tell when the button has loaded, otherwise you see the jumpiness of it
          defaulting to @coloradocolby and then turning into the loaded button widget
          NOTE: you will need to uncomment out the twitter script in gatsby-ssr.js
          */}
                    {/* <p className="m-b-md">
            <a
              href="https://twitter.com/messages/compose?recipient_id=4227576672"
              className="twitter-dm-button is-lowercase m-r-sm"
              data-screen-name="@coloradocolby"
            >
              @coloradocolby
            </a>{" "}
            on twitter or fill out the form below
          </p> */}
                    <p className="m-b-md">
                        <a href="https://twitter.com/messages/compose?recipient_id=4227576672">
                            @coloradocolby
                        </a>{" "}
                        on twitter or fill out the form below
                    </p>

                    <form
						name="contact"
						method="POST"
                        data-netlify="true"
                        className={contactStyles.form}
                    >
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <label className="label">name</label>
                                    <div className="control is-expanded has-icons-left">
                                        <input
                                            id="name"
                                            className="input"
                                            type="text"
                                            onChange={this.handleChange}
                                            value={name}
                                        />
                                        <span className="icon is-small is-left">
                                            <FaUser />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">email</label>
                                    <div className="control is-expanded has-icons-left has-icons-right">
                                        <input
                                            id="email"
                                            className={`input ${!validEmail &&
                                                "is-danger"}`}
                                            type="email"
                                            onChange={this.handleChange}
                                            onBlur={this.validateEmail}
                                            value={email}
                                        />
                                        <span className="icon is-small is-left">
                                            <FaEnvelope />
                                        </span>
                                        {!validEmail && (
                                            <span className="icon is-small is-right">
                                                <FaExclamationTriangle />
                                            </span>
                                        )}
                                    </div>
                                    <p
                                        className={`help ${
                                            !validEmail
                                                ? "is-danger"
                                                : "is-invisible"
                                        }`}
                                    >
                                        invalid email
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">message</label>
                            <div className="control">
                                <textarea
                                    id="message"
                                    className="textarea"
                                    onChange={this.handleChange}
                                    value={message}
                                ></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button
                                    className={`button is-primary ${validForm &&
                                        contactStyles.enabledButton}`}
                                    disabled={!validForm}
									type="submit"
                                >
                                    submit
                                </button>
                            </div>
                        </div>
                    </form>
                </Layout>
            </>
        )
    }
}

export default ContactPage
