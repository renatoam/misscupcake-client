import { PropsWithChildren } from "react";
import Wrapper from "../Wrapper";
import styles from "./Container.module.scss";
import { ContainerProps } from "./ContainerProps";

export default function Container(props: PropsWithChildren<ContainerProps>) {
  const { className = '', children } = props

  return (
    <Wrapper element="section" className={`${styles.container} ${className}`}>
      {children}
    </Wrapper>
  )
}
