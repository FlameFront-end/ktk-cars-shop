import { TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'

import './AuthModal.scss'

const AuthModal = ({ onClose, open }) => {
  return (
    <Modal className="auth-modal" onClose={onClose} open={open}>
      <Box className="modal-box-auth">
        <form>
          <h3>Вход</h3>
          <TextField label="Телефон" required />
          <TextField label="Пароль" required type="password" />
          <Button color="primary" type="submit" variant="contained">
            Войти
          </Button>
        </form>
      </Box>
    </Modal>
  )
}

export default AuthModal
