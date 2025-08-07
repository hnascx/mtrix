"use client"

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
  return (
    <Card className="border border-primary rounded-lg shadow-none border-opacity-20">
      <CardContent className="p-6">
        <Typography className="mb-3 text-heading-md font-bold">
          Preencha os dados abaixo para finalizar a compra
        </Typography>

        <Stack className="gap-4">
          <div className="grid grid-cols-[3fr_1fr] w-full gap-3">
            <TextField
              fullWidth
              label="Nome Completo"
              value={formData.fullName}
              onChange={(e) => onInputChange("fullName", e.target.value)}
              required
            />

            <TextField
              fullWidth
              label="CPF"
              value={formData.cpf}
              onChange={(e) => onInputChange("cpf", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-[3fr_1fr] w-full gap-3">
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => onInputChange("email", e.target.value)}
              required
            />

            <TextField
              fullWidth
              label="Telefone"
              value={formData.phone}
              onChange={(e) => onInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-[1fr_3fr] w-full gap-3">
            <TextField
              fullWidth
              label="CEP"
              value={formData.cep}
              onChange={(e) => onInputChange("cep", e.target.value)}
              required
            />

            <TextField
              fullWidth
              label="Endereço"
              value={formData.address}
              onChange={(e) => onInputChange("address", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-[3fr_1fr] w-full gap-3">
            <TextField
              fullWidth
              label="Cidade"
              value={formData.city}
              onChange={(e) => onInputChange("city", e.target.value)}
            />

            <TextField
              fullWidth
              label="Estado"
              value={formData.state}
              onChange={(e) => onInputChange("state", e.target.value)}
            />
          </div>

          {/* Método de Pagamento */}
          <div className="w-full">
            <FormControl className="w-full [&_.MuiOutlinedInput-root.Mui-focused_fieldset]:border-primary" required>
              <InputLabel>Método de Pagamento</InputLabel>
              <Select
                value={formData.paymentMethod}
                label="Método de Pagamento"
                onChange={(e) => onInputChange("paymentMethod", e.target.value)}
                required
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
