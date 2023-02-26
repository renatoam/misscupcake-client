import styles from "./Container.module.scss";
import { ContainerProps } from "./ContainerProps"

export default function Container(props: ContainerProps) {
  const { className = '', children } = props

  return (
    <section className={`${styles.container} ${className}`}>
      {children}
    </section>
  )
}
