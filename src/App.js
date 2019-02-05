import React, { Component, Fragment } from 'react'
import ImagePicker from 'filestack-react'

import './App.css'

class App extends Component {
  state = {
    image: null
  }

  componentDidMount() {
    const image = localStorage.getItem('image')

    if (image) {
      this.setState({ image })
    }
  }

  handleFileUploaded = result => {
    const image = result.filesUploaded[0].url

    localStorage.setItem('image', image)

    this.setState({ image })
  }

  render() {
    const { image } = this.state

    return (
      <Fragment>
        <ImagePicker
          apikey={process.env.REACT_APP_FILESTACK_API_KEY}
          onSuccess={this.handleFileUploaded}
          render={({ onPick }) => (
            <button
              className="image-picker"
              style={{ backgroundImage: `url("${image}")` }}
              onClick={onPick}
            />
          )}
        />
      </Fragment>
    )
  }
}

export default App
