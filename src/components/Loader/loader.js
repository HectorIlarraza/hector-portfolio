import LogoH from "../../assets/images/LogoHv4.png";
import "./loader.scss"

export const Loader = () => {

  return (
    <div className='preloader' style={{display: "none", transform: "translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0)"}}>
      <div className='inner'>
        <img src={LogoH} alt="logo" />
        <span>Hector is working</span>
        <div className='progress-bar'>
          <div className='progress-bar_bg'>
            <div style={{ width: "0%"}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
