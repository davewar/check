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

interface YelpRecentLoginEmailProps {
  name: string;
  email: string;
  tel: string;
  comment: string;
}

// npm run emails  ---  you can then amend the email live and see on localhost
// Eg
// http://localhost:3001/preview/index

const img2 =
  "https://res.cloudinary.com/dls21lwle/image/upload/v1742491162/100_png_ogonmj.png";

export const YelpRecentLoginEmail = ({
  name,
  tel,
  email,
  comment,
}: YelpRecentLoginEmailProps) => {
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
                    color: "#7b25be",
                  }}
                >
                  WARWICKER BRICKWORK LIMITED
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#7b25be",
                  }}
                >
                  A new client contact request received.
                </Heading>

                <Text style={paragraph}>
                  <b>Name: </b>
                  {name}
                </Text>
                <Text
                  style={{
                    ...paragraph,
                    marginTop: -5,
                    // color: "#03294b",
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

YelpRecentLoginEmail.PreviewProps = {
  userFirstName: "Alan",
  loginDate: new Date("September 7, 2022, 10:58 am"),
  loginDevice: "Chrome on Mac OS X",
  loginLocation: "Upland, California, United States",
  loginIp: "47.149.53.167",
  name: "Dave",
  email: "test@Test.com",
  tel: "01322 4444444",
  comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore nihil, obcaecati aliquid nulla inventore consequuntur ut, vitae amet sint vero. Libero molestias suscipit cumque alias, laboriosam dolorem pariatur labore.
Obcaecati velit tempora nemo provident impedit ab tenetur iusto similique ipsa quibusdam dolor adipisci quas molestiae, temporibus voluptas possimus facere, tempore distinctio quo eligendi incidunt eos? Molestias corporis sequi harum!
 accusamus, culpa voluptatem repudiandae esse voluptatum. A impedit facere tempore vel error, possimus fugiat velit.
Quae ratione error veritatis, neque reiciendis voluptates maiores sint voluptatum harum, omnis voluptate repellendus consectetur ab labore enim voluptatem fuga sit assumenda modi dolor, id aperiam ad placeat. Necessitatibus, quibusdam`,
} as YelpRecentLoginEmailProps;

export default YelpRecentLoginEmail;

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
  // maxWidth: "100%",
  // height: "auto",

  height: "200px",
  width: "200px",
  marginLeft: "auto",
  marginRight: "auto",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
