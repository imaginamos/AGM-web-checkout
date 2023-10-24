import { useRouter } from "next/router";
import { NextRequest } from "next/server";

export const config = {
  runtime: 'experimental-edge',
}

export default function About(req: NextRequest) {

  const url = new URL("https://bcde-2800-e2-327f-feab-c5a8-c9d-9bad-9d78.ngrok-free.app/about?merchantId=508029&merchant_name=Test+PayU&merchant_address=Av+123+Calle+12&telephone=7512354&merchant_url=http%3A%2F%2Fpruebaslapv.xtrweb.com&transactionState=4&lapTransactionState=APPROVED&message=APPROVED&referenceCode=tourist-package-00002&reference_pol=2149863739&transactionId=83ed8d3f-899a-4a15-8d04-1cafc0272ed7&description=Test+PAYU&trazabilityCode=CRED+-+666267681&cus=CRED+-+666267681&orderLanguage=es&extra1=&extra2=&extra3=&polTransactionState=4&signature=b51276bdb063a4731659e9a8d69a540c&polResponseCode=1&lapResponseCode=APPROVED&risk=&polPaymentMethod=10&lapPaymentMethod=VISA&polPaymentMethodType=2&lapPaymentMethodType=CREDIT_CARD&installmentsNumber=1&TX_VALUE=20000.00&TX_TAX=3193.00&currency=COP&lng=es&pseCycle=&buyerEmail=test%40test.com&pseBank=&pseReference1=&pseReference2=&pseReference3=&authorizationCode=350368&TX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE=.00&processingDate=2023-06-29")

  const { searchParams } = url;

  searchParams.forEach( (value, key) => {
    console.log(`${key}: ${value}`);
  });

    return <div> Response of Order</div>
  }