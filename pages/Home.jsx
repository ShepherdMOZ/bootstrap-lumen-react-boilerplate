import React, { Component } from 'react'
import {Container, Row, Col, Button,
    Form, InputGroup, Table, FormControl } from 'react-bootstrap'



import JSONReader from '../JSONReader'
import MainJumbotron from'../components/jumbotron'
const emptyList =[{
    "category": "", 
    "title": "", 
    "weight": 0, 

}]

export default class Home extends Component {
  constructor(props){
      super(props)
      this.state={
          targetUrl: 'null',
          avgCubicWeight:0.0,
          tableContent: emptyList,
          buttonCaption: 'Calc! '
      }
  }
  handleSubmit = (event) => {
      event.preventDefault()

      const url = this.state.targetUrl
      var reader = new JSONReader(url).readPaginatedJSON()
      this.setState({

        tableContent:reader.itemList,
        avgCubicWeight:reader.avgWeight,

      })
    }
  
  handleInputChange = (event) =>{
      event.preventDefault()
      this.setState({
        [event.target.name]: event.target.value
      })
  }
  render() {
    const {avgCubicWeight,tableContent, buttonCaption,loadingState} = this.state

    return (
        <Container className="mt-5" >
            <Row>
                <Col>
                    <MainJumbotron />
                </Col>

            </Row>
            <Row>
                <Col>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                        <InputGroup>
                            <InputGroup.Append>
                                <InputGroup.Text>
                                    url
                                </InputGroup.Text> 
                            </InputGroup.Append>
                                <FormControl name='targetUrl' onChange={this.handleInputChange}/>
                                <InputGroup.Append>
                                    <Button type="submit" color='primary'>
                                        {buttonCaption}
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                <h3>The current average cubic weight for all <strong>Air Conditioners</strong> is <strong>{avgCubicWeight}</strong> kg</h3>
                <Table dark>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent.map((itemDetail, index) => {
                                return <tr key={index}>
                                        <td>{itemDetail.category}</td>
                                        <td>{itemDetail.title}</td>
                                        <td>{(itemDetail.weight/1000).toFixed(2)} kg</td>
                                    </tr>
                            })}
                    </tbody>
                </Table>
                </Col>
            </Row>

        </Container>
    )
  }
}
