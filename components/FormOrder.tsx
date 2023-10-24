import md5 from "md5";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

type Inputs = {
  merchantId: string;
  accountId: string;
  description: string;
  referenceCode: string;
  amount: string;
  tax: string;
  taxReturnBase: string;
  currency: string;
  signature: string;
  test: string;
  buyerEmail: string;
  responseUrl: string;
  confirmationUrl: string;
};

export default function FormOrder() {
  const { query } = useRouter();
  const {
    description,
    referenceCode,
    amount,
    tax,
    taxReturnBase,
    currency,
    buyerEmail,
    responseUrl,
    confirmationUrl,
  } = query as Inputs;
  const IRefForm = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (!query) return;
    if (IRefForm.current) {
      // IRefForm.current.submit();
    }
  }, [query]);

  const createSignature = (
    referenceS: string,
    priceS: string,
    currencyS: string
  ) => {
    return md5(
      `${process.env.NEXT_PUBLIC_API_KEY_PAYU}~${process.env.NEXT_PUBLIC_MERCHAND_ID_PAYU}~${referenceS}~${priceS}~${currencyS}`
    );
  };

  return (
    <form
      name="form"
      id="formPago"
      method="post"
      action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu" // Send post request with the FormData
      ref={IRefForm}
    >
      <input
        name="merchantId"
        type="hidden"
        value={Number(process.env.NEXT_PUBLIC_MERCHAND_ID_PAYU)}
      />
      <input
        name="accountId"
        type="hidden"
        value={Number(process.env.NEXT_PUBLIC_ACCOUNT_ID_PAYU)}
      />
      <input name="description" type="hidden" value={description} />
      <input name="referenceCode" type="hidden" value={referenceCode} />
      <input name="amount" type="hidden" value={amount} />
      <input name="tax" type="hidden" value={tax} />
      <input name="taxReturnBase" type="hidden" value={taxReturnBase} />
      <input name="currency" type="hidden" value={currency} />
      <input
        name="signature"
        type="hidden"
        value={createSignature(referenceCode, amount, currency)}
      />
      <input name="test" type="hidden" value="0"></input>
      <input name="buyerEmail" type="hidden" value={buyerEmail} />
      <input name="responseUrl" type="hidden" value={responseUrl} />
      <input name="confirmationUrl" type="hidden" value={confirmationUrl} />
      <input name="Submit" type="submit" value="Enviar" />
    </form>
  );
}
