import React from 'react';
import store from "../helpers/store";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state      =  {
                          number_account_bank:"",
                          status:false,
                          question:false,
                        };
  }

  componentDidMount() {
    this.setState(this.props);
    this.setState(store.get("motel"));
    this.setState({check_number_account_bank:(store.get("motel")[this.props.name]!==undefined && store.get("motel")[this.props.name]!=="")?true:false});
  }

  componentWillUnmount() {
    this.setState({});
  }

  handleClick=(e)=>{
    this.setState({status: this.state.status?false:true  })
  }

  on=()=>{

    return <i className="fas fa-angle-up text-pink"></i>
  }

  off=()=>{
    return <i className="fas fa-angle-down text-pink"></i>
  }

  KeyUp=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    let get = store.get("motel")
        get[e.target.name]  = e.target.value;
        store.set("motel",get);
  }

  InputQuestion=()=>{
    if (this.props.question!==undefined && this.state.status) {
      return this.props.question.map((v,k)=>{
        return  <div key={k} className="row">
                  <div className="col-2 text-center">
                    <input  autoComplete="off" type="radio" name={v.name}/>
                  </div>
                  <div className="col">
                    <div className="items-question pt-2">
                      {v.title}
                    </div>
                  </div>
                </div>
      })
    }
  }

  InputAccount=()=>{
    if (this.props.times!==undefined) {
      return this.props.times.map((v,k)=>{
        return <div key={k} className="row justify-content-center">
          <div className="col-12 col-sm-12 text-left mt-3">
            <div className="input-group mb-3">
              <div className="col-6 label label-group pt-2" >{v.title}</div>
              <input  autoComplete="off"
                defaultValue={this.state[this.props.name]}
                onChange={this.KeyUp}
                type="text"
                name={v.name}
                className="form-control text-right"
                placeholder={this.props.placeholder}
                />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      })
    }


  }

  render(){
    return  <div>
              <div className="row">
                {(this.props.icon!==undefined)?<div className="col-3"><img className="img-fluid rounded" src={this.props.icon}/></div>:''}
                <div className="col pl-0">
                  <div className="App-Question--x2 text-left pt-3 ">{this.props.label}</div>
                </div>
                <div className="col-2 pt-4" onClick={this.handleClick}>
                  {
                    (!this.state.status)?this.off():this.on()
                  }
                </div>
              </div>
              {(this.state.question)?this.InputQuestion():''}
              {(this.state.status)?this.InputAccount():''}
            </div>
  }

}

export default App;
