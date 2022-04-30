import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

// import {Component} from 'react'
// import './index.css'

// class LightDarkMode extends Component {
//   state = {
//     isDarkMode: true,
//   }

//   onClickButton = () => {
//     this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
//   }

//   render() {
//     const isDarkMode = this.state
//     const classModeName = isDarkMode ? 'dark-mode' : 'light-mode'
//     const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'

//     return (
//       <div className="bg-cont">
//         <div className={`app-cont ${classModeName}`}>
//           <h1 className="heading">Click To Change Mode</h1>
//           <button className="button" type="button" onClick={this.onClickButton}>
//             {buttonText}
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

export default LightDarkMode
