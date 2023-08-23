import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/logo1.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" style={{ width: "120px" }} />
        <NewTransactionButton>Nova transaçao</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
