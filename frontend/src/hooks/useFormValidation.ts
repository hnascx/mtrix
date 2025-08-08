import { useState } from "react"

interface ValidationErrors {
  [key: string]: string | undefined
}

interface FormData {
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

export function useFormValidation() {
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateCPF = (cpf: string): boolean => {
    const cleanCPF = cpf.replace(/\D/g, "")

    if (cleanCPF.length !== 11) return false
    if (/^(\d)\1{10}$/.test(cleanCPF)) return false

    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanCPF.charAt(i)) * (10 - i)
    }
    let remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(cleanCPF.charAt(9))) return false

    sum = 0
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanCPF.charAt(i)) * (11 - i)
    }
    remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(cleanCPF.charAt(10))) return false

    return true
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return false

    const domain = email.split("@")[1]
    if (!domain || domain.length < 3) return false

    return true
  }

  const validatePhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, "")
    return cleanPhone.length >= 10 && cleanPhone.length <= 11
  }

  const validateCEP = (cep: string): boolean => {
    const cleanCEP = cep.replace(/\D/g, "")
    return cleanCEP.length === 8
  }

  const validateField = (field: string, value: string): string | undefined => {
    switch (field) {
      case "fullName":
        if (!value.trim()) return "Nome é obrigatório"
        if (value.trim().length < 3)
          return "Nome deve ter pelo menos 3 caracteres"
        if (value.trim().length > 100)
          return "Nome deve ter no máximo 100 caracteres"
        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value.trim()))
          return "Nome deve conter apenas letras"
        break

      case "cpf":
        if (!value.trim()) return "CPF é obrigatório"
        if (!validateCPF(value)) return "CPF inválido"
        break

      case "email":
        if (!value.trim()) return "Email é obrigatório"
        if (!validateEmail(value)) return "Email inválido"
        break

      case "phone":
        if (!value.trim()) return "Telefone é obrigatório"
        if (!validatePhone(value)) return "Telefone inválido"
        break

      case "cep":
        if (!value.trim()) return "CEP é obrigatório"
        if (!validateCEP(value)) return "CEP inválido"
        break

      case "address":
        if (!value.trim()) return "Endereço é obrigatório"
        if (value.trim().length < 5)
          return "Endereço deve ter pelo menos 5 caracteres"
        break

      case "city":
        if (value.trim() && value.trim().length < 2)
          return "Cidade deve ter pelo menos 2 caracteres"
        break

      case "state":
        if (value.trim() && value.trim().length !== 2)
          return "Estado deve ter 2 caracteres"
        break

      case "paymentMethod":
        if (!value.trim()) return "Método de pagamento é obrigatório"
        break
    }
    return undefined
  }

  const handleBlur = (field: string, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const error = validateField(field, value)
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }))
  }

  const handleInputChange = (
    field: string,
    value: string,
    onInputChange: (field: string, value: string) => void
  ) => {
    onInputChange(field, value)

    if (touched[field]) {
      const error = validateField(field, value)
      setErrors((prev) => ({
        ...prev,
        [field]: error,
      }))
    }
  }

  const validateForm = (formData: FormData): boolean => {
    const newErrors: ValidationErrors = {}
    let isValid = true

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field as keyof FormData])
      if (error) {
        newErrors[field] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  return {
    errors,
    touched,
    handleBlur,
    handleInputChange,
    validateForm,
  }
}
