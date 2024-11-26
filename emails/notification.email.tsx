import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Img,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  name: string;
  email: string;
}

export default function NotificationEmail({
  name,
  email,
}: EmailProps) {
  return (
    <Html>
      <Head>
        <Preview>Nouvelle demande de réservation - Agence Mirna</Preview>
      </Head>
      <Body style={main}>
        <Container>
          <Section style={sectionStyle}>
            <Heading as="h1" style={headingStyle}>
              Nouvelle demande de réservation
            </Heading>
            <Text style={subheadingStyle}>
              Une nouvelle demande de réservation a été reçue pour la propriété
              suivante :
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const sectionStyle = {
  marginTop: "32px",
  textAlign: "center" as const,
};

const imageStyle = {
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  borderRadius: "12px",
  objectFit: "cover" as const,
};

const headingStyle = {
  fontSize: "36px",
  fontWeight: "600",
  lineHeight: "40px",
  letterSpacing: "0.4px",
  color: "#111827",
};

const subheadingStyle = {
  marginTop: "8px",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#6B7280",
};

const propertyNameStyle = {
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "28px",
  color: "#4F46E5",
  marginTop: "16px",
};

// ... You can add more styles for other elements if needed ...
