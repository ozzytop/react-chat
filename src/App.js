import './App.css';
import { Container, Row } from 'reactstrap';
import Header from './components/Header';
import LiveVisitors from './components/LiveVisitors';

function App() {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <LiveVisitors></LiveVisitors>
                </Row>
            </Container>
        </div>
    );
}

export default App;
