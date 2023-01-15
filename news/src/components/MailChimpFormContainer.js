import React, {useEffect, useState} from 'react';
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
            FNAME: firstName,
            LNAME: lastName,
        });
    }

    useEffect(()=>{
      if(status==="success"){
        setFirstName('');
        setLastName('');
        setEmail('');
      }
    },[status])

    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>{status==="success"?"success":"Sign up for the next Ben's Biannual News Letter"}</h3>
        <div>
          <input
            onChange={(e)=>{
              setFirstName(e.target.value);
          }}
            type={"text"}
            placeholder="Kevin"
          />

          <input
            onChange={(e)=>{
              setLastName(e.target.value);
          }}
            type={"text"}
            placeholder="Lynch"
          />

          <input
            onChange={(e)=>{
              setEmail(e.target.value);
          }}
            type={"email"}
            placeholder="email"
          />

        </div>

        <button
          type="submit"
          
          formValues={[email, firstName, lastName]}
          className="subbutton"
        >Submit</button>
      </form>
    );
};

const MailchimpFormContainer = props => {
    const postUrl ="https://gmail.us21.list-manage.com/subscribe/post?u=8b68f4f8dbffc93164d18afe6&id=57abd3b75c";
    return (
        <div>
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
