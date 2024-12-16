"use client";
import { useState, useEffect, useCallback } from "react";

interface UseCinetPayOptions {
  apikey: string;
  site_id: string;
  notify_url: string;
  mode: "PRODUCTION" | "DEVELOPMENT";
}

interface CheckoutOptions {
  transaction_id: string;
  amount: number;
  currency: string;
  channels: string;
  description: string;
  customer_name: string;
  customer_surname: string;
  customer_email: string;
  customer_phone_number: string;
  customer_address: string;
  customer_city: string;
  customer_country: string;
  customer_state: string;
  customer_zip_code: string;
}

interface PaymentDetails extends Omit<CheckoutOptions, "transaction_id"> {}

interface CinetPaySDK {
  setConfig(config: UseCinetPayOptions): void;
  getCheckout(options: CheckoutOptions): void;
  waitResponse(callback: (data: { status: string }) => void): void;
  onError(callback: (error: any) => void): void;
}

// Augmenter le type Window pour inclure CinetPay
declare global {
  interface Window {
    CinetPay?: CinetPaySDK;
  }
}

export function useCinetPay({
  apikey,
  site_id,
  notify_url,
  mode,
}: UseCinetPayOptions) {
  const [sdkReady, setSdkReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.CinetPay) {
      const script = document.createElement("script");
      script.src = "https://cdn.cinetpay.com/seamless/main.js";
      script.async = true;
      script.onload = () => setSdkReady(true);
      document.body.appendChild(script);
    } else if (window.CinetPay) {
      setSdkReady(true);
    }
  }, []);

  useEffect(() => {
    if (sdkReady && window.CinetPay) {
      window.CinetPay.setConfig({ apikey, site_id, notify_url, mode });
    }
  }, [sdkReady, apikey, site_id, notify_url, mode]);

  const initializePayment = useCallback(
    (paymentDetails: PaymentDetails) => {
      if (!sdkReady || !window.CinetPay) {
        setError("CinetPay SDK not loaded");
        return;
      }

      setLoading(true);
      setError(null);

      const transaction_id = Math.floor(Math.random() * 100000000).toString();

      window.CinetPay.getCheckout({
        ...paymentDetails,
        transaction_id,
      });

      window.CinetPay.waitResponse((data: { status: string }) => {
        setLoading(false);
        if (data.status === "REFUSED") {
          setError("Payment failed");
        } else if (data.status === "ACCEPTED") {
          // Payment successful
        }
      });

      window.CinetPay.onError((error: any) => {
        setLoading(false);
        setError("An error occurred during payment");
        console.error("CinetPay error:", error);
      });
    },
    [sdkReady],
  );

  return { initializePayment, loading, error, sdkReady };
}
