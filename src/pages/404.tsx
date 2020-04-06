import * as React from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';

class Error extends React.Component<{}, {}> {
    render() {
        console.log(this.props);
        return (
            <Layout>
                <Container>
                    <Row>
                        <Col>
                            404
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Page Not Found.
                        </Col>
                    </Row>
                </Container>
            </Layout>
        )
    }
}

export default Error;