import { Container, Icon, Wrapper } from '@/components/atoms';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import MainMenu from '../MainMenu';
import styles from './Header.module.scss';
 
export default function Header() {
  return (
    <Wrapper element="header" className={styles.header}>
      <Container className={styles.header__container}>
        <MainMenu />
        <Icon
          label="cart"
          icon={faCartShopping}
          className={styles.header__cart}
          onClick={() => {}}
        />
      </Container>
    </Wrapper>
  )
}
