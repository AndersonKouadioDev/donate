interface menuItem {
  id: number;
  label: string;
  href: string;
  active: boolean;
}

interface CinetPayConfig {
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

interface CinetPaySDK {
  setConfig(config: CinetPayConfig): void;
  getCheckout(options: CheckoutOptions): void;
  waitResponse(callback: (data: { status: string }) => void): void;
  onError(callback: (data: any) => void): void;
}
