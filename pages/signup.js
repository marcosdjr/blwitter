import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import { Month } from './components/Month'
import { Home } from './index'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';


export default function signUp() {
  return (
    <div className='page'>
      <Head>
        <title>Inscreva-se</title>
        <meta name="description" content="Twitter da Blue" />
        <link rel="icon" href="/images/twittericon.ico" />
      </Head>
      <Container className="signup-container">
        <Col className="signup-top-col">
          <Row className='signup-top-row'>
            <>
              <img
                src="/images/twitter.png"
                className='signup-top__icon__image'
                alt='twitter-icon'
              />
              <h1 className='signup-top-row-h1'>Crie sua conta</h1>
            </>
          </Row>
          <Row >
            <Form>
              <Form.Group controlId="Name">
                <Form.Control type="name" placeholder="Nome" />
              </Form.Group>

              <Form.Group controlId="Phone">
                <Form.Control type="phone" placeholder="Telefone" />
              </Form.Group>

              <Row lg={3}>
                <Form.Group as={Col} controlId="FormGridDay" >
                  <Form.Control placeholder="Dia" />
                </Form.Group>

                <Form.Group as={Col} controlId="FormGridMonth">

                  <Form.Control as="select" defaultValue="Mês" placeholder="Mês">
                    <option>Mês</option>
                    <option>Janeiro</option>
                    <option>Fevereiro</option>
                    <option>Março</option>
                    <option>Abril</option>
                    <option>Maio</option>
                    <option>Junho</option>
                    <option>Julho</option>
                    <option>Agosto</option>
                    <option>Setembro</option>
                    <option>Outubro</option>
                    <option>Novembro</option>
                    <option>Dezembro</option>
                  </Form.Control >
                </Form.Group>

                <Form.Group as={Col} controlId="FormGridYear">
                  <Form.Control placeholder="Ano" />
                </Form.Group>
              </Row>

              <Button className="signup-send-btn" variant="primary" type="submit">
                Entrar
              </Button>
            </Form>
          </Row>
          <Row>
            <p><a href="/">Esqueceu sua senha?</a> · <a href="/">Inscrever-se no Blwitter</a></p>
          </Row>

          

        </Col>

      </Container>




    </div>
  )
}
