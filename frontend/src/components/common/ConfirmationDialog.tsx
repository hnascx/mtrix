"use client"

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material"

interface ConfirmationDialogProps {
  open: boolean
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
  confirmText?: string
  cancelText?: string
  severity?: "warning" | "error" | "info"
}

export function ConfirmationDialog({
  open,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  severity = "warning",
}: ConfirmationDialogProps) {
  const getConfirmButtonColor = () => {
    switch (severity) {
      case "error":
        return "bg-red-600 hover:bg-red-700"
      case "warning":
        return "bg-orange-600 hover:bg-orange-700"
      default:
        return "bg-primary hover:bg-primary/80"
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      maxWidth="sm"
      className="w-full rounded-md"
    >
      <DialogTitle className="text-heading-md font-bold">{title}</DialogTitle>
      <DialogContent>
        <Typography className="text-body-md">{message}</Typography>
      </DialogContent>
      <DialogActions className="gap-2 p-4">
        <Button
          onClick={onCancel}
          variant="text"
          className="border-primary text-primary hover:bg-gray-100"
        >
          {cancelText}
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          className={`!bg-secondary text-white hover:bg-secondary/90`}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
