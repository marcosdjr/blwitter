import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/index.module.css'
import { signUp } from './signup'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';


export default function Home() {
  return (
    <div className='page'>
      <Head>
        <title>Blwitter</title>
        <meta name="description" content="Twitter da Blue" />
        <link rel="icon" href="/images/twittericon.ico" />
      </Head>
      <Container className="login-container">
        <Col className="login-top-col">
          <Row className='login-top-row'>
            <>
              <img
                src="/images/twitter.png"
                className='login-top__icon__image'
                alt='twitter-icon'
              />
              <h1 className='login-top-row-h1'>Entrar no Blwitter</h1>
            </>
          </Row>
          <Row>
            <Form>
              <Form.Group controlId="Email">
                <Form.Control type="email" placeholder="Celular, e-mail ou nome de usuário" />
              </Form.Group>

              <Form.Group controlId="Password">
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>
              <Button className="login-send-btn" variant="primary" type="submit">
                Entrar
              </Button>
            </Form>
          </Row>
          <Row>
            


            
          <p><a href="/">Esqueceu sua senha?</a> · <Link href="/signup"><a>Inscrever-se no Blwitter</a></Link></p>
          </Row>

        </Col>
        
      </Container>




    </div>
  )
}
