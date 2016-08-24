import { render } from 'react-dom'
import React from 'react'
import Root from './frontend/components/root'
import configureStore from './frontend/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content")
  render(<Root store={configureStore()} />, root)
})