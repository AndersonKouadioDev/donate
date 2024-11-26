import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  name: string;
  email: string;
}

export default function NotificationConfirmationEmail({
  name,
  email,
}: EmailProps) {
  return (
    <Html>
      <Head>
        <Preview>
          Confirmation de votre demande de réservation - Agence Mirna
        </Preview>
      </Head>
      <Body style={main}>
        <Container>
          <Section>
            <Heading as="h1">
              Confirmation de votre demande de réservation
            </Heading>
            <Text>
              Cher(e) {name},
            </Text>
            <Text>
              Nous avons bien reçu votre demande de réservation pour la
              propriété suivante :
            </Text>
           
            <Text>
              Si vous avez des questions ou besoin d&apos;informations
              supplémentaires, n&apos;hésitez pas à nous contacter.
            </Text>
            <Text>Cordialement,</Text>
            <Text>L&apos;équipe de l&apos;Agence Mirna</Text>
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

const propertyNameStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#4F46E5",
  marginTop: "16px",
  marginBottom: "16px",
};
