import { Button, Icon, Wrapper } from '@/components/atoms'
import { Input } from '@/components/molecules'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react'
import styles from './QuantityControl.module.scss'
import { QuantityControlProps } from './QuantityControlProps'
 
const QuantityControl = forwardRef((
  props: QuantityControlProps,
  ref: ForwardedRef<HTMLInputElement>) => {
  const { inputProps = {} } = props
  const { defaultValue, value, ...rest } = inputProps
  const [inputValue, setInputValue] = useState(Number(value) || 0)

  function increaseByOne() {
    setInputValue(current => current + 1)
  }
  
  function decreaseByOne() {
    if (inputValue <= 0) return
    setInputValue(current => current - 1)
  }

  function handleQuantity(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(Number(event.target.value))
  }
  
  return (
    <Wrapper
      element="section"
      className={styles.controls}
      aria-label="quantity control"
    >
      <Button
        variant="text"
        aria-label="minus"
        aria-controls="quantity"
        onClick={decreaseByOne}
      >
        <Icon
          label="minus icon"
          icon={faMinus}
        />
      </Button>
      <Input
        {...rest}
        name="quantity"
        aria-label="quantity box"
        variant="invisible"
        role="alert"
        aria-live="assertive"
        id="quantity"
        ref={ref}
        value={inputValue}
        onChange={handleQuantity}
      />
      <Button
        variant="text"
        aria-label="plus"
        aria-controls="quantity"
        onClick={increaseByOne}
      >
        <Icon
          label="minus icon"
          icon={faPlus}
        />
      </Button>
    </Wrapper>
  )
})

export default QuantityControl
