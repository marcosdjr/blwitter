import React from 'react'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';



export default function Month() {
    return (
        <>
            <Form.Group as={Col} controlId="FormGridDay">
                <Form.Label>Cidade</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="FormGridMonth">
                <Form.Label>Mês</Form.Label>
                <Form.Control as="select" defaultValue="Agosto">
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
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="FormGridYear">
                <Form.Label>Ano</Form.Label>
                <Form.Control />
            </Form.Group>

        </>
    )
}