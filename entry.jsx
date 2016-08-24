import { render } from 'react-dom'
import React from 'react'
import Root from './components/root'
import configureStore from './store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content")
  render(<Root store={configureStore()}>, root)
})