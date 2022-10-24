import WrapperStyle from "./style";

function Wrapper({ children }) {
  return <WrapperStyle className="wrapper">{children}</WrapperStyle>;
}

export default Wrapper;
