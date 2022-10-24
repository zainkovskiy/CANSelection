import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { checkPhone } from '../../Api';

import './Authorization.scss';

export function Authorization({ confirmAuthorization }) {
  const [noLogin, setNoLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // checkPhone(data).then(answer => {
    //   if (answer.result === 'ok') {
    //     confirmAuthorization(data.phone);
    //     return
    //   }
    //   setNoLogin(true);
    // });
    confirmAuthorization(data.phone);
  }
  return (
    <div className='authorization'>
      <form
        className='authorization__container'
        onSubmit={handleSubmit(onSubmit)}
      >
        <span
          className='text authorization__text'
        >Введите свой номер телефона для авторизации</span>
        <div className='authorization__input'>
          <span
            className='text error'
            style={{ textAlign: 'center' }}
          >
            {noLogin && 'Не верно указан номер'}
          </span>
          <TextField
            autoComplete='off'
            id="filled-basic"
            variant="outlined"
            size='small'
            placeholder='89007778899'
            error={errors.phone && true}
            {...register('phone', {
              required: 'Обязательное поле',
              pattern: {
                value: /^(89)+(\d{9})$/,
                message: 'Пример ввода 89007778899'
              },

            })}
          />
          <span
            className='text error'
          >
            {errors.phone && errors.phone.message}
          </span>
        </div>
        <Button
          variant="contained"
          fullWidth
          type='submit'
        >
          Авторизироваться
        </Button>
      </form>
    </div>
  )
}