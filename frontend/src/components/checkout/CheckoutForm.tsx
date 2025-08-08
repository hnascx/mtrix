"use client"

import { useFormValidation } from "@/hooks/useFormValidation"
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material"

interface CheckoutFormProps {
  formData: {
    fullName: string
    cpf: string
    email: string
    phone: string
    cep: string
    address: string
    city: string
    state: string
    paymentMethod: string
  }
  onInputChange: (field: string, value: string) => void
}

export function CheckoutForm({ formData, onInputChange }: CheckoutFormProps) {
  const { errors, handleBlur } = useFormValidation()

  const handleFieldChange = (field: string, value: string) => {
    onInputChange(field, value)
  }

  const handleFieldBlur = (field: string, value: string) => {
    handleBlur(field, value)
  }

  return (
    <Card className="border border-primary rounded-lg shadow-none border-opacity-20">
      <CardContent className="p-6">
        <Typography className="mb-3 text-heading-md font-bold">
          Preencha os dados abaixo para finalizar a compra
        </Typography>

        <Stack className="gap-4">
          <div className="grid grid-cols-[60%_1fr] md:grid-cols-[3fr_1fr] w-full gap-3">
            <TextField
              label="Nome Completo"
              name="fullName"
              data-field="fullName"
              value={formData.fullName}
              onChange={(e) => handleFieldChange("fullName", e.target.value)}
              onBlur={(e) => handleFieldBlur("fullName", e.target.value)}
              error={!!errors.fullName}
              helperText={errors.fullName}
              required
            />

            <TextField
              label="CPF"
              name="cpf"
              data-field="cpf"
              value={formData.cpf}
              onChange={(e) => handleFieldChange("cpf", e.target.value)}
              onBlur={(e) => handleFieldBlur("cpf", e.target.value)}
              error={!!errors.cpf}
              helperText={errors.cpf}
              required
            />
          </div>

          <div className="grid grid-cols-[60%_1fr] md:grid-cols-[3fr_1fr] w-full gap-3">
            <TextField
              label="Email"
              name="email"
              data-field="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
              onBlur={(e) => handleFieldBlur("email", e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              required
            />

            <TextField
              label="Telefone"
              name="phone"
              data-field="phone"
              value={formData.phone}
              onChange={(e) => handleFieldChange("phone", e.target.value)}
              onBlur={(e) => handleFieldBlur("phone", e.target.value)}
              error={!!errors.phone}
              helperText={errors.phone}
              required
            />
          </div>

          <div className="grid grid-cols-[30%_1fr] md:grid-cols-[1fr_3fr] w-full gap-3">
            <TextField
              label="CEP"
              name="cep"
              data-field="cep"
              value={formData.cep}
              onChange={(e) => handleFieldChange("cep", e.target.value)}
              onBlur={(e) => handleFieldBlur("cep", e.target.value)}
              error={!!errors.cep}
              helperText={errors.cep}
              required
            />

            <TextField
              label="Endereço"
              name="address"
              data-field="address"
              value={formData.address}
              onChange={(e) => handleFieldChange("address", e.target.value)}
              onBlur={(e) => handleFieldBlur("address", e.target.value)}
              error={!!errors.address}
              helperText={errors.address}
              required
            />
          </div>

          <div className="grid grid-cols-[60%_1fr] md:grid-cols-[3fr_1fr] w-full gap-3">
            <TextField
              label="Cidade"
              name="city"
              data-field="city"
              value={formData.city}
              onChange={(e) => handleFieldChange("city", e.target.value)}
              onBlur={(e) => handleFieldBlur("city", e.target.value)}
              error={!!errors.city}
              helperText={errors.city}
            />

            <TextField
              label="Estado"
              name="state"
              data-field="state"
              value={formData.state}
              onChange={(e) => handleFieldChange("state", e.target.value)}
              onBlur={(e) => handleFieldBlur("state", e.target.value)}
              error={!!errors.state}
              helperText={errors.state}
            />
          </div>

          <div className="w-full">
            <FormControl
              required
              error={!!errors.paymentMethod}
              className="w-full [&_.MuiOutlinedInput-root.Mui-focused_fieldset]:border-primary"
            >
              <InputLabel>Método de Pagamento</InputLabel>
              <Select
                name="paymentMethod"
                data-field="paymentMethod"
                value={formData.paymentMethod}
                label="Método de Pagamento"
                onChange={(e) =>
                  handleFieldChange("paymentMethod", e.target.value)
                }
                onBlur={(e) => handleFieldBlur("paymentMethod", e.target.value)}
              >
                <MenuItem value="credit">Cartão de Crédito</MenuItem>
                <MenuItem value="debit">Cartão de Débito</MenuItem>
                <MenuItem value="pix">PIX</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Stack>
      </CardContent>
    </Card>
  )
}
