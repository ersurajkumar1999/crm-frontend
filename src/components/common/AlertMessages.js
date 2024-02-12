import { Alert } from "@mui/material"
export const ErrorMessage = ({ handlonCloseeMessage, message }) => {
    return (
        <Alert severity="error" onClose={() => handlonCloseeMessage(null)} sx={{ width: '100%', mt: 2 }}>
            {message}
        </Alert>
    )
}
export const SuccessMessage = ({ handlonCloseeMessage, message }) => {
    return (
        <Alert severity="success" onClose={() => handlonCloseeMessage(null)} sx={{ width: '100%', mt: 2 }}>
            {message}
        </Alert>
    )
}