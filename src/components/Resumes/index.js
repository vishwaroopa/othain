import React from 'react'
//import Swal from 'sweetalert2'
import axios from "axios";
class Resumes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            name: '',
            name2: '',
            email: '',
            number: '',
            resume: '',
            mailSent: false,
            error: null
        };
    }
    // saves the user's name entered to state
    nameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    name2Change = (event) => {
        this.setState({ name2: event.target.value })
    }
    // saves the user's email entered to state
    emailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    // saves the user's message entered to state
    messageChange = (event) => {
        this.setState({ feedback: event.target.value })
    }
    // saves the user's message entered to state
    resumeChange = (event) => {
        this.setState({ resume: event.target.value })
    }
    numberChange = (event) => {
        this.setState({ number: event.target.value })
    }
    //onSubmit of email form
    handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'post',
            url: 'https://admin.mavininfotech.com/api/resume.php',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: this.state
        })
            .then(result => {
                console.log(result.data)
                this.setState({
                    mailSent: result.data.sent,
                })
                console.log(this.state)
            })
            .catch(error => this.setState({
                error: error.message
            }));

    }
    render() {
        return (
            <div>
                <div id='contacts'>

                    <div className='container'>

                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='section-title'>
                                    <h1>SUBMIT RESUME</h1>

                                </div>
                                <form name='sentMessage' onSubmit={this.handleSubmit} >
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    id='name'
                                                    name='name'
                                                    className='form-control'
                                                    placeholder='First Name'
                                                    required
                                                    onChange={this.nameChange}
                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    id='email'
                                                    name='name2'
                                                    className='form-control'
                                                    placeholder='Last Name'
                                                    required
                                                    onChange={this.name2Change}
                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type='email'
                                                    id='email'
                                                    name='email'
                                                    className='form-control'
                                                    placeholder='Email Address'
                                                    required
                                                    onChange={this.emailChange}
                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    id='number'
                                                    name='number'
                                                    className='form-control'
                                                    placeholder='Contact Number'
                                                    required
                                                    onChange={this.numberChange}
                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <textarea
                                            name='message'
                                            id='message'
                                            className='form-control'
                                            rows='4'
                                            placeholder='Im good at'
                                            required
                                            onChange={this.messageChange}
                                        ></textarea>
                                        <p className='help-block text-danger'></p>
                                    </div>
                                    <div className='form-group'>
                                        Upload Resume<input
                                            type="file"
                                            name='resume'
                                            id='resume'
                                            className='form-control'
                                            rows='4'
                                            placeholder='Upload Resume'
                                            required
                                            onChange={this.resumeChange}
                                        />
                                        <p className='help-block text-danger'></p>
                                    </div>
                                    <button type='submit' className='btn btn-custom btn-lg'>
                                        Save Appication
                </button>
                                    <div>
                                        {this.state.mailSent &&
                                            <div id='success'>Thank you for submitting resume with us.</div>
                                        }
                                    </div>
                                </form><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resumes
