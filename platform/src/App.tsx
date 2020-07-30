import React, { Component } from 'react'
import CustomComponent from 'test'

import 'test/dist/index.css'
import './index.css'

export default class App extends Component<{}, {}> {
  render() {
    return <CustomComponent />
  }
}
