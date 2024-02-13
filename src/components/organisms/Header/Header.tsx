import { Button, Container, Icon, Wrapper } from '@/components/atoms';
import { useAuth } from '@/states/authentication';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import MainMenu from '../MainMenu';
import styles from './Header.module.scss';
 
export default function Header() {
  const [auth, setAuth] = useAuth()
  const loginButtonText = auth.isAuthenticated ? 'Logout' : 'Login'

  function handleLogin() {
    console.log({ isAuthenticated: auth.isAuthenticated })
    setAuth({ isAuthenticated: !auth.isAuthenticated})
  }
  
  return (
    <Wrapper element="header" className={styles.header}>
      <Container className={styles.header__container}>
        <MainMenu />
        <Wrapper className={styles.header__actions}>
          <Button onClick={handleLogin}>{loginButtonText}</Button>
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
