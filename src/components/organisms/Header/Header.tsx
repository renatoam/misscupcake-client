import { Container, Icon, Wrapper } from '@/components/atoms';
import { useEditContext } from '@/contexts/EditContext';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import MainMenu from '../MainMenu';
import styles from './Header.module.scss';
 
export default function Header() {
  const { editable, setEditable } = useEditContext()
  const editButtonText = editable ? 'Save' : 'Edit'

  function handleEditing() {
    setEditable(!editable)
  }
  
  return (
    <Wrapper element="header" className={styles.header}>
      <Container className={styles.header__container}>
        <MainMenu />
        <Wrapper className={styles.header__actions}>
          <button onClick={handleEditing}>{editButtonText}</button>
          <Icon
            label="cart"
            icon={faCartShopping}
            onClick={() => {}}
          />
        </Wrapper>
      </Container>
    </Wrapper>
  )
}
