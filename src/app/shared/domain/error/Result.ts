export default function result<T, Err extends Error>(value?: T, error?: Err) {
  const isOk = (): boolean => {
    return error === undefined
  }

  const isError = (): boolean => {
    return error !== undefined
  }

  const getValue = (): T => {
    if (!value || error) {
      throw new Error('Cannot get value from a result with error.')
    }

    return value
  }

  const getError = (): Err => {
    if (value || !error) {
      throw new Error('Cannot get error value from a successful result.')
    }

    return error
  }

  return {
    isOk,
    isError,
    getValue,
    getError,
  }
}
