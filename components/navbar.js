import Link from "next/link";
import { connect } from 'react-redux';

// Fixed top Navbar displaying the logo and links to other pages
const Navbar = (props) => {
  const { auth } = props
  console.log('auth', auth)
  return(
    <nav className="navbar navbar-light bg-light fixed-top justify-content-start">
      <a className="navbar-brand" href="/root">
        <img src="../static/lanconf.png"
          width="32"
          height="40"
          className="d-inline-block align-top "
          alt="logo" />
      </a>

      <p className="navbar-text text-right">
       an inline element
      </p>
    </nav>
  )
}

const mapStateToProps = (state) =>{
  return{
    auth: state.firebase.authR
  }
}

export default connect(mapStateToProps)(Navbar);
