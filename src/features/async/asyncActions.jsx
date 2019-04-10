import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from './asyncConstants';

export const asyncACtionStart = () => {
  return {
    type: ASYNC_ACTION_START
  }
}

export const asyncACtionFinish = () => {
  return {
    type: ASYNC_ACTION_FINISH
  }
}

export const asyncACtionError = () => {
  return {
    type: ASYNC_ACTION_ERROR
  }
}