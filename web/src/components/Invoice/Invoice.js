import { Flex } from 'src/lib/primitives'

import TextInput from '../TextInput'
import InvoiceInfo from '../InvoiceInfo'
import LineItems from '../LineItems'
import Summary from '../Summary'

const MARGIN_BOTTOM = 5

const Invoice = ({ invoice, onInvoiceChange }) => {
  const {
    title,
    companyName,
    companyInfo,
    recipient,
    information,
    lineItems,
    summary,
    notesA,
    notesB,
  } = invoice

  return (
    <>
      <TextInput
        value={title}
        onChange={(value) => onInvoiceChange({ ...invoice, title: value })}
        width={1}
        my={MARGIN_BOTTOM}
        textAlign="center"
        css={`
          border: 1px #d4d6d9 solid;
          border-width: 1px 0;
          height: 48px;
          line-height: 48px;
        `}
      />
      <Flex mb={MARGIN_BOTTOM}>
        <TextInput
          multiline
          value={companyName}
          onChange={(value) =>
            onInvoiceChange({ ...invoice, companyName: value })
          }
          width={1 / 2}
          css={`
            textarea {
              font-size: 40px;
            }
          `}
        />
        <TextInput
          multiline
          value={companyInfo}
          onChange={(value) =>
            onInvoiceChange({ ...invoice, companyInfo: value })
          }
          width={1 / 2}
          textAlign="right"
        />
      </Flex>
      <Flex mb={MARGIN_BOTTOM}>
        <TextInput
          multiline
          value={recipient}
          onChange={(value) =>
            onInvoiceChange({ ...invoice, recipient: value })
          }
          width={1 / 2}
        />
        <InvoiceInfo
          value={information}
          onChange={(value) =>
            onInvoiceChange({ ...invoice, information: value })
          }
          width={1 / 2}
          ml="auto"
        />
      </Flex>
      <LineItems
        value={lineItems}
        onChange={(value) => onInvoiceChange({ ...invoice, lineItems: value })}
        width={1}
        mb={2}
        css={`
          width: calc(100% + 48px);
        `}
      />
      <Summary
        value={summary}
        lineItems={lineItems}
        onChange={(value) => onInvoiceChange({ ...invoice, summary: value })}
        ml="auto"
        mb={MARGIN_BOTTOM}
      />
      <Flex mb={MARGIN_BOTTOM}>
        <TextInput
          multiline
          value={notesA}
          onChange={(value) => onInvoiceChange({ ...invoice, notesA: value })}
          width={1 / 2}
        />
        <TextInput
          multiline
          value={notesB}
          onChange={(value) => onInvoiceChange({ ...invoice, notesB: value })}
          width={1 / 2}
          textAlign="right"
        />
      </Flex>
    </>
  )
}

export default Invoice
