import React from "react";
const ContactForm = () => {
  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  };

  const formStyle = {
    width: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    // backgroundColor: "#f7f7f7",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center"
  };

  const headingStyle = {
    fontSize: "1rem",
    padding: "2rem"
  };

  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value
    };
    console.log(conFom);
  };
  return (
    <div style={centerStyle}>
      <form style={formStyle} onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" style={headingStyle} htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" style={headingStyle} htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" style={headingStyle} htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
