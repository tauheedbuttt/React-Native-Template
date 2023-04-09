import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login, logout, user } from '../features/auth/slice';
import { error } from '../config/functions';

export default () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState();
  const state = useSelector(state => state.auth)

  // remove token
  // dispatch(logout())

  const onLogin = async (data) => {
    setErrorMessage(undefined)
    setLoading(true);
    try {

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrorMessage(error(err, false))
    }
  }
  const onSignup = async (data) => {
    setErrorMessage(undefined)
    setLoading(true);
    try {

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrorMessage(error(err, false))
    }
  }
  const onLogout = async () => {
    try {
      setLoading(true);
      dispatch(logout())
      setLoading(false);
    } catch (err) {
      error(err);
      setLoading(false);
    }
  }
  const onUser = async () => {
    try {
    } catch (err) {
      error(err);
      setLoading(false);
    }
  }

  return {
    loading,
    errorMessage,
    user: state.user,
    onLogin,
    onSignup,
    onLogout,
  }
}