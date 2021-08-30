// npm install --save --save-exact react-scripts@3.4.0


import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import "../style/Form.css";
const requiredsample='*';

let pointcount=1;

 
class App extends Component  {
  constructor(props) {
    super(props);
  
    // Setting up state
    this.state = {
      lat : "",
      lon : "",
      list:[{'id':'5','lat':'خط العرض','lon':'خط الطول'}]
    }
  }
  
  // Set a user input value
  updateInput(value,type){
    
    if (type==='lat')
    {
    this.setState({
      lat: value,
    });
    }
    else if (type==='lon')
    {
      this.setState({
        lon: value,
      });
      }
  }
  
  // Add item if user input in not empty
  addItem(){
    if(this.state.lat !== ''&&this.state.lon !== '' ){
      const userInput = {
  
        // Add a random id which is used to delete
        id :  Math.random(),
  
        // Add a user value to list
        lat : this.state.lat,
        lon : this.state.lon

      };
  
      // Update list
      const list = [...this.state.list];
      list.push(userInput);
  
      // reset state
      this.setState({
        list,
        lat:"",
        lon:""
      });
    }
  }
  
  // Function to delete item from list use id to delete
  deleteItem(key){
    const list = [...this.state.list];
  
    // Filter values and leave value which we need to delete
    const updateList = list.filter(item => item.id !== key);
  
    // Update list in state
    this.setState({
      list:updateList,
    });
  
  }
  
  onChange(e){
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (e.target.value === '' || re.test(e.target.value)) {
       this.setState({value: e.target.value})
    }
}

   sayHello() {
    const coordinates=`
    <div class="contact-item">

    <div class="item">

      <label>خط الطول :</label><br></br>
      <input class='lon' type="number" step="any"></input><br></br>
      </div>
      <div class="item">
      <label>دائرة العرض :</label><br></br>
      <input class='lat' type="number" step="any" value='20'></input><br></br>
    </div>
    
    </div>
    `
    document.getElementById('morepoints').innerHTML=
    document.getElementById('morepoints').innerHTML+coordinates
    console.log(pointcount);
    pointcount++

  }
  render(){
  return (
    <div className="testbox entry-form"   dir='rtl'>
       
  <Container>
  
  <Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: '3rem',
          fontWeight: 'bolder',
        }}
        >
        <form>
        <label>الأسم : <span className="required">{requiredsample}</span></label><br></br>
        <input type="text" required></input><br></br>
        <label>العنوان : <span className="required">{requiredsample}</span></label><br></br>
        <input type="text"required></input><br></br>
        
        <div id='morepoints'></div>
        {/* <button type="button" id='addpoint'  onClick={this.sayHello} >إضافة احداثيات اخري</button> */}
        <br></br><br></br>
        <button type="submit" id='submit'>submit</button>
       </form>
    </Row>

   <hr/>
  <Row className='coordinates'>
  <Col md={{ span: 12, offset: 4 }}>

  <InputGroup className="mb-3">
  <FormControl
    type="number" 
    step="any"
    placeholder="إضافة خط العرض . . . "
    size="lg"
    value = {this.state.lat}
    onChange = { item => this.updateInput(item.target.value,'lat')}
    aria-label="add something"
    aria-describedby="basic-addon2"
  />
   <FormControl
    type="number" 
    step="any"
    placeholder="إضافة خط الطول . . . "
    size="lg"
    value = {this.state.lon}
    onChange = {item => {this.updateInput(item.target.value,'lon');console.log(item)}}
    aria-label="add something"
    aria-describedby="basic-addon2"
  />
    <Button
      variant="dark"
      size="lg"
      onClick = {()=>this.addItem()}
      >
      إضافة
    </Button>
</InputGroup>

</Col>
</Row>
<Row>
<Col md={{ span: 12, offset: 4 }}>
<ListGroup dir='rtl'> 
  {/* map over and print items */}
 {this.state.list.map(item => {return(

    <ListGroup.Item variant="dark" action 
      onClick = { () => this.deleteItem(item.id) }>
      <div className='lat'>خط العرض : {item.lat}</div>
      <div className='lon'>خط الطول : {item.lon} </div>
      
    </ListGroup.Item>


 )})}
</ListGroup>

</Col>
</Row>
</Container>
    </div>
  );
}
}
export default App;