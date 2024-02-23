import ArgentBanklogo from "../../assets/argentBankLogo.png"
import { useSelector } from "react-redux";

const Nav = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <nav className="main-nav">
    <a className="main-nav-logo" href="/">
      <img
        className="main-nav-logo-image"
        src={ArgentBanklogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
    <div>
    {isAuthenticated ? (
          <a className="main-nav-item" href="/" >
            <i className="fa fa-sign-out"></i>
            Logout
          </a>
        ) : (
          <a className="main-nav-item" href="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
    </div>
  </nav>
  )
}

export { Nav };