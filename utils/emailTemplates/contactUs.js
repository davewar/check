import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

let year = new Date().getFullYear();

const img2 =
  "https://res.cloudinary.com/dls21lwle/image/upload/v1737915348/Capture_1_uwh8ci.jpg";

export const Email = ({ name, tel, email, comment }) => {
  return (
    <Html>
      <Head />
      <Preview>Website Contact Email Received</Preview>
      <Body style={main}>
        <Container>
          {/* <Section style={logo}>
            <Img src={`${baseUrl}/public/logo.svg`} />
          </Section> */}

          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#42719b",
                  }}
                >
                  CHECKING THE GATE
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#03294b",
                  }}
                >
                  A new contact request received.
                </Heading>

                <Text style={paragraph}>
                  <b>Name: </b>
                  {name}
                </Text>
                <Text
                  style={{
                    ...paragraph,
                    marginTop: -5,
                    color: "#03294b",
                    fontWeight: "bold",
                  }}
                >
                  <b>Email: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Telephone Number: </b>
                  {tel}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Comments: </b>
                  {comment}
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img style={image} width={620} src={img2} />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            Warwicker Brickwork Limited | Copyright &copy; {year} | {"  "}All
            rights Reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
