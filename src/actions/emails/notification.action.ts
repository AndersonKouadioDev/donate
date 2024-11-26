"use server";

import NotificationEmail from "@/emails/booking_asking.email";
import NotificationConfirmationEmail from "@/emails/notification.confirmation.email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function NotificationAction({
  name,
  email,
  amount
}: {
  name: string;
  email: string;
  amount: number;
}) {
  try {
    // Envoi de l'e-mail de demande de réservation à l'agence
    const { data: requestData, error: requestError } = await resend.emails.send(
      {
        from: "website@.com",
        to: ["info@.com"],
        subject: "Nouvelle demande de réservation - Agence Mirna",
        react: NotificationEmail({
          name,
          email,
        }),
      }
    );

    if (requestError) {
      return { success: false, error: requestError.message };
    }

    // Envoi de l'e-mail de confirmation au client
    const { data: confirmationData, error: confirmationError } =
      await resend.emails.send({
        from: "info@mdm.com",
        to: [email],
        subject: "Confirmation de votre demande de réservation - Agence Mirna",
        react: NotificationConfirmationEmail({
          name,
          email,
        }),
      });

    if (confirmationError) {
      return { success: false, error: confirmationError.message };
    }

    return { success: true, data: { requestData, confirmationData } };
  } catch (error) {
    return {
      success: false,
      error: "Une erreur s'est produite lors de l'envoi des e-mails",
    };
  }
}
