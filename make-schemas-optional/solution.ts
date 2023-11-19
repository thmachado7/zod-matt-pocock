import { z } from 'zod'

const Form = z.object({
  name: z.string(),
  phoneNumber: z.string().optional(),
})

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values)

  return parsedData
}
