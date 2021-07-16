import './App.css'
import Cart from './Components/Cart'
import Header from './Components/Header'
import Table_header from './Components/Table_header'
import ClassTable from './Components/Table'
import UserTable from './Components/UserTable'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Cart />
      <div className='App'>
        <Switch>
          <Route path='/user'>
            <UserTable />
          </Route>
          <Route path='/'>
            <Header />
            <Table_header />
            <ClassTable />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
