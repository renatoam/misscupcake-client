import { Button, Icon, Wrapper } from '@/components/atoms'
import { Input } from '@/components/molecules'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { ForwardedRef, forwardRef } from 'react'
import styles from './QuantityControl.module.scss'
import { QuantityControlProps } from './QuantityControlProps'
 
const QuantityControl = forwardRef((
  props: QuantityControlProps,
  ref: ForwardedRef<HTMLInputElement>) => {
  const {
    handleChange,
    handleIncrease,
    handleDecrease,
    inputProps
  } = props
  
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
        onClick={handleDecrease}
      >
        <Icon
          label="minus icon"
          icon={faMinus}
        />
      </Button>
      <Input
        {...inputProps}
        name="quantity"
        aria-label="quantity box"
        variant="invisible"
        role="alert"
        aria-live="assertive"
        id="quantity"
        ref={ref}
        onChange={handleChange}
      />
      <Button
        variant="text"
        aria-label="plus"
        aria-controls="quantity"
        onClick={handleIncrease}
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
