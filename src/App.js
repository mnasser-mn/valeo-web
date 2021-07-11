import AppProvider from "./store";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from "./components/home";
import Second from "./components/second";

const App = () => (
    <AppProvider>
        <Router>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/second" component={Second} />
                            <Route path="*" render={() => (<>
                                <h1 className="text-danger text-center" style={{ fontSize: '80px' }}>
                                    404
                                </h1>
                                <p>
                                    page is not found, navigate to&nbsp;
                                    <Link to="/">Home</Link>
                                </p>
                            </>)} />
                        </Switch>
                    </div>
                </div>
            </div>

        </Router>
    </AppProvider>
)

export default App;