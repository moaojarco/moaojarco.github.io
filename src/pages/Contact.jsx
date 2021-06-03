import styled from "styled-components";
import Nav from "../components/Nav";
import React from "react";
import HomeButton from "../components/HomeButton";

const ContactContainer = styled.div`
  width: 100%;
  height: 80vh;
`;

const ContactWrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`;

const ContactTitle = styled.h1`
  font-size: 1.75rem;
  color: #333a51;
`;

const Form = styled.form`
  max-width: 980px;
  margin: 0 auto;
  padding: 5rem;
  border: 3px dotted #333a51;

  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  color: #333a51;
`;

const FormInput = styled.input`
  padding: 1rem;
  font-size: 1rem;
  margin: 20px 0;
`;

const FormInputMessage = styled.textarea`
  padding: 1rem;
  margin: 10px 0;
`;

const FormButton = styled.button`
  max-width: 180px;
  text-decoration: none;
  border: 1px solid #504e4e;
  padding: 10px;
  transition: all 500ms ease;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f13d3d;
    color: #fff;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit() {
    console.table(name, email, title, message);
  }

  return (
    <ContactContainer>
      <ContactWrapper>
        <Flex>
          <ContactTitle>Contact 📩</ContactTitle>
          <HomeButton />
        </Flex>
        <Form
          name="contact"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormLabel>Nome</FormLabel>
          <FormInput
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>E-mail</FormLabel>
          <FormInput
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Title Message</FormLabel>
          <FormInput
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormLabel>Message</FormLabel>
          <FormInputMessage
            type="text"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <FormButton onClick={handleSubmit}>Submit</FormButton>
        </Form>
        <Nav />
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
