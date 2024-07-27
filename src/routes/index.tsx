import { Routes as R, Route } from 'react-router-dom'

import Home from '.././pages/Home'

const Routes = () => (
  <R>
    <Route path="/" element={<Home />} />
  </R>
)

export default Routes
