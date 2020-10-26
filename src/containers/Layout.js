import { Container, Row } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import LiveVisitors from '../components/LiveVisitors';
import PublicChat from '../components/PublicChat';
import RoomChat from '../components/RoomChat';

import routes from '../routes'

function App() {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Switch>
                        <Route path="/" exact component={PublicChat}></Route>
                        <Route path="/roomChat" component={RoomChat}></Route>
                        <Route path="/liveVisitors" component={LiveVisitors}></Route>
                    </Switch>
                </Row>
            </Container>
        </div>
    );
}

export default App;
