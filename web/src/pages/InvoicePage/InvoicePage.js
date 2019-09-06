import { useState, useEffect } from "react";
import { useAuth, useQuery } from "@hammerframework/hammer-web";

import { Box } from "src/lib/primitives";
import { AppBar, Invoice } from "src/components";

const FETCH_LATEST_INVOICE = gql`
  query FETCH_LATEST_INVOICE {
    invoicesNewest {
      id
      body
    }
  }
`;

const DEFAULT_INVOICE = {
  title: "I N V O I C E",
  companyName: "Lolsoft Inc.",
  companyInfo: "Peter Pistorius\nBusiness Address\n101010\nBerlin, Germany",
  recipient: "Reliable customer\nBusiness address\n12345\nBerlin, Germany",
  information: [
    [{ value: "Invoice #" }, { value: "001" }],
    [{ value: "Date" }, { value: new Intl.DateTimeFormat().format(new Date()) }]
  ],
  lineItems: [
    [{ value: "Description" }, { value: "Quantity" }, { value: "Price" }],
    [{ value: "Wheel of cheese" }, { value: 1 }, { value: 500 }],
    [{ value: "Jar of sausages" }, { value: 2 }, { value: 2.99 }],
    [{ value: "Tin of waffles" }, { value: 2 }, { value: 3.01 }]
  ],
  summary: [
    [{ value: "Subtotal" }, undefined, "0.0"],
    [{ value: "VAT" }, { value: 14 }, "0.0"],
    [{ value: "Total" }, { value: "£" }, "0.0"]
  ],
  notesA: "",
  notesB: "Invoice by Billable.me"
};

const parseInvoiceData = data => {
  if (data && data.invoicesNewest) {
    const { id, body } = data.invoicesNewest;
    return {
      id,
      ...JSON.parse(body)
    };
  }

  return DEFAULT_INVOICE;
};

const Page = () => {
  const [loading, setLoading] = useState(true);

  // Do not fetch the user's invoice if they're not authenticated
  const { loading: authLoading, isAuthenticated } = useAuth();
  const { loading: fetchLoading, data } = useQuery(FETCH_LATEST_INVOICE, {
    skip: !(isAuthenticated === true)
  });

  useEffect(() => {
    if (!authLoading && !fetchLoading) {
      setLoading(false);
    }
  }, [authLoading, fetchLoading]);

  const invoiceData = parseInvoiceData(data);

  return (
    <>
      <AppBar />
      <Box
        mx="auto"
        css={`
          max-width: 800px;
        `}
      >
        {loading ? "Loading..." : <Invoice {...invoiceData} />}
      </Box>
    </>
  );
};

export default Page;
