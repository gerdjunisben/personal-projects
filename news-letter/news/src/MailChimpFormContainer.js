import React, {useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }

    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign up for the next Ben's Biannual News Letter</h3>
        <div>
          <input
            label="First Name"
            onChangeHandler={setFirstName}
            type="text"
            value={firstName}
            placeholder="Kevin"
            isRequired
          />

          <input
            label="Last Name"
            onChangeHandler={setLastName}
            type="text"
            value={lastName}
            placeholder="Lynch"
            isRequired
          />

          <input
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />

        </div>

        <button
          label="subscribe"
          type="submit"
          formValues={[email, firstName, lastName]}
        />
      </form>
    );
};

const MailchimpFormContainer = props => {
    const postUrl ="https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}";
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;
