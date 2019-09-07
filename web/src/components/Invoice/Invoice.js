import { forwardRef, useImperativeHandle, useState } from 'react'
import { Flex } from 'src/lib/primitives'

import TextInput from '../TextInput'
import InvoiceInfo from '../InvoiceInfo'
import LineItems from '../LineItems'
import Summary from '../Summary'

const MARGIN_BOTTOM = 5

const Invoice = forwardRef(({ ...invoice }, ref) => {
  const [title, setTitle] = useState(invoice.title)
  const [companyName, setCompanyName] = useState(invoice.companyName)
  const [companyInfo, setCompanyInfo] = useState(invoice.companyInfo)
  const [recipient, setRecipient] = useState(invoice.recipient)
  const [information, setInformation] = useState(invoice.information)
  const [lineItems, setLineItems] = useState(invoice.lineItems)
  const [summary, setSummary] = useState(invoice.summary)
  const [notesA, setNotesA] = useState(invoice.notesA)
  const [notesB, setNotesB] = useState(invoice.notesB)

  useImperativeHandle(ref, () => ({
    getBody () {
      return {
        title,
        companyName,
        companyInfo,
        recipient,
        information,
        lineItems,
        summary,
        notesA,
        notesB,
      }
    },
  }))

  return (
    <>
      <TextInput
        value={title}
        onChange={setTitle}
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
          onChange={setCompanyName}
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
          onChange={setCompanyInfo}
          width={1 / 2}
          textAlign="right"
        />
      </Flex>
      <Flex mb={MARGIN_BOTTOM}>
        <TextInput
          multiline
          value={recipient}
          onChange={setRecipient}
          width={1 / 2}
        />
        <InvoiceInfo
          value={information}
          onChange={setInformation}
          width={1 / 2}
          ml="auto"
        />
      </Flex>
      <LineItems
        value={lineItems}
        onChange={setLineItems}
        width={1}
        mb={2}
        css={`
          width: calc(100% + 48px);
        `}
      />
      <Summary
        ml="auto"
        mb={MARGIN_BOTTOM}
        value={summary}
        onChange={setSummary}
        lineItems={lineItems}
      />
      <Flex mb={MARGIN_BOTTOM}>
        <TextInput
          multiline
          value={notesA}
          onChange={setNotesA}
          width={1 / 2}
        />
        <TextInput
          multiline
          value={notesB}
          onChange={setNotesB}
          width={1 / 2}
          textAlign="right"
        />
      </Flex>
    </>
  )
})

export default Invoice
