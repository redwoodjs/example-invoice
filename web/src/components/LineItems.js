import produce from 'immer'

import { Box, Button } from 'src/lib/primitives'
import { TextInput } from 'src/components'

const LineItems = ({ value, onChange, ...rest }) => {
  const handleChange = (rowIndex, colIndex) => (newValue) =>
    onChange(
      produce(value, (draft) => {
        draft[rowIndex][colIndex].value = newValue
      })
    )

  return (
    <Box
      as="table"
      {...rest}
      css={`
        tr:first-child input {
          font-weight: bold;
        }
        td {
          border-bottom-width: 0;
        }
      `}
    >
      <tbody>
        {value.map((row, rowIndex) => (
          <tr
            key={`invoice-info-${rowIndex}`}
            css={`
              vertical-align: middle;
            `}
          >
            <Box as="td" width="400px">
              <TextInput
                multiline={rowIndex !== 0}
                onChange={handleChange(rowIndex, 0)}
                width={1}
                {...row[0]}
              />
            </Box>
            <td>
              <TextInput
                onChange={handleChange(rowIndex, 1)}
                width={1}
                type={rowIndex !== 0 ? 'number' : 'text'}
                {...row[1]}
              />
            </td>
            <td>
              <TextInput
                onChange={handleChange(rowIndex, 2)}
                width={1}
                type={rowIndex !== 0 ? 'number' : 'text'}
                {...row[2]}
              />
            </td>
            {rowIndex !== 0 && (
              <Box
                as="td"
                width="48px"
                textAlign="right"
                css={`
                  vertical-align: middle;
                  padding-right: 8px;
                  border-color: transparent;
                `}
              >
                <Button
                  width="28px"
                  onClick={() =>
                    onChange(
                      produce(value, (draft) => {
                        delete draft[rowIndex]
                      })
                    )
                  }
                >
                  -
                </Button>
              </Box>
            )}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr
          css={`
            border: 0;
            background: red;
          `}
        >
          <td colSpan="4">
            <Box
              textAlign="right"
              css={`
                padding-right: 7px;
              `}
            >
              <Button
                width="28px"
                onClick={() =>
                  onChange(
                    produce(value, (draft) => {
                      draft.push([
                        { value: '' },
                        { value: 1 },
                        { value: '0.0' },
                      ])
                    })
                  )
                }
              >
                +
              </Button>
            </Box>
          </td>
        </tr>
      </tfoot>
    </Box>
  )
}

export default LineItems
