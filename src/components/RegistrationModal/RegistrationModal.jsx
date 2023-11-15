import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { useState } from 'react'

import './RegistrationModal.scss'

const RegistrationModal = ({ onClose, open }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <Modal className="register-modal" onClose={onClose} open={open}>
      <Box className="modal-box-register">
        <form>
          <h3>Регистрация</h3>
          <div className="top">
            <div className="column">
              <TextField className="text-field" label="Имя" required />
              <TextField className="text-field" label="Фамилия" required />
              <TextField className="text-field" label="Отчество" required />
            </div>
            <div className="column">
              <TextField className="text-field" label="Паспортные данные" required />
              <TextField className="text-field" label="Телефон" required />
              <TextField className="text-field" label="Дата рождения" required />
            </div>
          </div>
          <div className="center">
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              className="text-field"
              label="Пароль"
              required
              type={showPassword ? 'text' : 'password'}
            />

            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              className="text-field"
              label="Повтор пароля"
              required
              type={showPassword ? 'text' : 'password'}
            />
          </div>
          <Button color="primary" type="submit" variant="contained">
            Зарегистрироваться
          </Button>
        </form>
      </Box>
    </Modal>
  )
}

export default RegistrationModal
