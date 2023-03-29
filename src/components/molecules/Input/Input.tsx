import { Typography, Wrapper } from '@/components/atoms'
import { ForwardedRef, forwardRef, memo, useCallback, useState } from 'react'
import styles from './Input.module.scss'
import { InputError, InputProps } from './InputProps'
 
const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    placeholder,
    name,
    type = "text",
    validate,
    className,
    variant = 'default',
    ...rest
  } = props

  const [error, setError] = useState<InputError>()

  const defaultClasses = `${styles.input} ${className ?? ''}`
  const variantClass = `${variant === 'invisible' ? styles.invisible : ''}`
  const errorClass = `${error ? styles.error : ''}`

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!validate) return

    const value = event.target.type === 'number' ? Number(event.target.value) : event.target.value
    const fieldName = event.target.name
    const validation = validate(fieldName, value)

    if (validation?.error) {
      return setError(validation)
    }

    setError(undefined)
  }, [])

  return (
    <Wrapper className={styles.input__control} aria-label="textbox">
      <input
        type={type}
        className={`${defaultClasses} ${variantClass} ${errorClass}`}
        placeholder={placeholder}
        name={name}
        ref={ref}
        onChange={handleChange}
        autoComplete="off"
        aria-label={rest['aria-label'] ? rest['aria-label'] : 'input'}
        aria-invalid={!!error}
        aria-errormessage="error"
        {...rest}
      />
      {error && (
        <Typography
          element="span"
          id="error"
          role="alert"
          className={styles.message}
        >
          {error.message}
        </Typography>
      )}
    </Wrapper>
  )
})

export default memo(Input)
