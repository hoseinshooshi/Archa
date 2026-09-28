import { useOutletContext } from "react-router";
import LOGOSvg from "./SVGs/LOGOSvg"
import Button from "./ui/Button";

const Navbar = () => {
  const { isSignedIn, userName, signIn, signOut,refreshAuth } = useOutletContext<AuthContext>()

  const handleAutchClick = async () => {
    if(isSignedIn) {
      try {
        await signOut();
        
      } catch (error) {
        console.error(`Puter Sign Failed: ${error}`)
      }
      return
    }
    try {
      await signIn();
      
    } catch (error) {
      console.error(`Puter Auth Failed: ${error}`)
    }
    return;
  }
  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <LOGOSvg className="w-6 h-6 text-chart-1/70 hover:text-chart-1/80"/>
            <span className="name">Archa</span>
          </div>
          <ul className="links">
            <a href="#">1st link</a>
            <a href="#">2st link</a>
            <a href="#">3st link</a>
          </ul>
        </div>
        <div className="actions">
          {isSignedIn ? (
            <>
              <span className="greeting">
                {userName ? `hi ${userName}` : 'signed In'}
              </span>
              <Button size="sm" onClick={handleAutchClick} className="btn bg-red-600">
                Log Out
              </Button>
            </> 
          ) : (
            <>
              <Button onClick={handleAutchClick} size="sm" variant="ghost">
                Log In
              </Button>
              <a href="#upload" className="cta">Get Started</a>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar