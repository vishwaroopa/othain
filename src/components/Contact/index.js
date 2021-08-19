import React from 'react'
//import Swal from 'sweetalert2'
//import swal from 'sweetalert';

//swal("Hello world!");
class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            name: '',
            email: '',
            subject: ''
        };
    }
    // saves the user's name entered to state
    nameChange = (event) => {
        this.setState({ name: event.target.value })
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
    subjectChange = (event) => {
        this.setState({ subject: event.target.value })
    }
    //onSubmit of email form
    handleSubmit = (event) => {
        event.preventDefault();

        //This templateId is created in EmailJS.com
        const templateId = 'template_50ndavb';

        //This is a custom method from EmailJS that takes the information 
        //from the form and sends the email with the information gathered 
        //and formats the email based on the templateID provided.
        this.sendFeedback(templateId, {
            message: this.state.feedback,
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject
        }
        )

    }

    //Custom EmailJS method
    sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'service_sx3mkzo', templateId,
            variables
        ).then(res => {
            alert("Email successfully sent");

        })
            // Email Failed to send Error alert
            .catch(err => {
                alert("Email Error:");
                console.error('Email Error:', err)
            })
    }

    render() {
        return (
            <div>
                <div id='contacts'>
                    <div className='col-md-12'>
                        <iframe frameborder="0" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3236222837354!2d78.38882757669889!3d17.444217998136647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915e148b1e5f%3A0x46546dd9b6691d!2sMavin+Infotech!5e0!3m2!1sen!2sin!4v1413445956436"></iframe>
                    </div>
                    <div className='container'>

                        <div className='col-md-6'>
                            <div className='row'>
                                <div className='section-title'>
                                    <h1>Get In Touch</h1>
                                    <h4>
                                        Please fill out the form below to send us an email and we will
                                        get back to you as soon as possible.
                </h4>
                                </div>
                                <form name='sentMessage' onSubmit={this.handleSubmit} >
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    id='name'
                                                    name='name'
                                                    className='form-control'
                                                    placeholder='Your Name'
                                                    required
                                                    onChange={this.nameChange}
                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group'>
                                                <input
                                                    type='email'
                                                    id='email'
                                                    name='email'
                                                    className='form-control'
                                                    placeholder='Your E-mail Address'
                                                    required
                                                    onChange={this.emailChange}
                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    id='subject'
                                                    name='subject'
                                                    className='form-control'
                                                    placeholder='Subject'
                                                    required
                                                    onChange={this.subjectChange}
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
                                            placeholder='Message'
                                            required
                                            onChange={this.messageChange}
                                        ></textarea>
                                        <p className='help-block text-danger'></p>
                                    </div>
                                    <div id='success'></div>
                                    <button type='submit' className='btn btn-custom btn-lg'>
                                        Send Message
                </button>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-5 col-md-offset-1 contact-info'>
                            <h1>We'd Love To Hear From You</h1>
                            <h4>India Office and Development Center:</h4>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-map-marker'></i>   Block # 304 & 305, Bhanu Arcade, Opp. Hi-Tech theater, Madhapur, Hyderabad-500081, Telangana, India.
                                    </span>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-phone'></i> +91-40-40056734<br />

                                    </span>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-fax'></i> +91-40-40056734<br />
                                    </span>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-envelope-o'></i>  info@mavininfotech.com
                                    </span>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-phone'></i> D-U-N-S # 828400320
                                    </span>
                                </p>
                            </div>
                            <p className='dashed-item'></p>
                            <h4>Bangalore Office and Development Center:</h4>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-map-marker'></i>   CoWrks, RMZ Ecoworld, Building 6A, The Bay, Outer Ring Road, Bellandur, Bengaluru-560103, Karnataka, India.
                                    </span>
                                </p>
                            </div>
                            <p className='dashed-item'></p>
                            <h4> Sales & Support:</h4>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        Augustine R.
                                    </span>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-phone'></i> +91-9963-197111<br />

                                    </span>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-fax'></i> +1 (312) 265 6214<br />
                                    </span>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-envelope-o'></i>  augustine@mavininfotech.com
                                    </span>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-envelope-o'></i> jessica@mavininfotech.com
                                    </span>
                                </p>
                            </div>
                            <p className='dashed-item'></p>
                            <h4> Australia Office:</h4>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        Garfield Vijay (Project Manager)
                                    </span>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-map-marker'></i> 10 Anderson ct Endeavour hills Vic-3802.<br />

                                    </span>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-fax'></i> +61 448278886<br />
                                    </span>
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-envelope-o'></i>  vijay.garfield@mavininfotech.com
                                    </span>
                                </p>
                            </div>

                            <h3>Links</h3>
                            <div className='row conatct-page' id="contact">
                                <div className='social'>
                                    <ul>
                                        <li>
                                            <a href='https://www.facebook.com/pages/Mavin-Infotech/135556656509121' target='_blank'>
                                                <i className='fa fa-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://twitter.com/intent/tweet?text=Web+development+company+%7C+Software+application+development&url=http%3A%2F%2Fwww.mavininfotech.com%2F%23.UoMVYpaX7Y8.twitter&related=' target='_blank'>
                                                <i className='fa fa-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='http://in.linkedin.com/in/mavininfotech' target='_blank'>
                                                <i className='fa fa-youtube'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Email