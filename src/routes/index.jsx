import { Route, Switch } from 'react-router-dom'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <SignIn />
            </Route>
            <Route path='/register'>
                <SignUp />
            </Route>
            <Route path='/dashboard'>
                <Dashboard />
            </Route>
        </Switch>
    )
}
export default Routes;