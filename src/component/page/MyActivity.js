import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'
import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser} from '../index.js'

import {base_url} from '../../env/Environment'
class MyActivity extends Component {
    constructor(){
        super()
        this.state = {
            data:[
                {
                    id: '',
                    name: '',
                    status: '',
                    description: '',
                    due_date: ''
                }
            ]
        }
    }
    componentDidMount(){
        fetch(base_url + '/api/v1/course/assignment/149?pg=1&ttl=10', {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            return data.code === 200
                ? this.setState({data: data.data})
                : null
        })
    }
    handleAll = () => {
        let all = document.getElementById('all')
        let submitted = document.getElementById('submitted')
        let notSubmitted = document.getElementById('notSubmitted')

        let dom = ReactDOM.findDOMNode
        dom(submitted).className = ""
        dom(notSubmitted).className = ""
        dom(all).className = "_ta5l3a"

        fetch(base_url + '/api/v1/course/assignment/149?pg=1&ttl=10', {
          method: 'GET',
          credentials: 'include',
          crossDomain: true
        }).then((res) => {
          return res.json()
        }).then((data) => {
          if(data.code === 200){
              this.setState({data: data.data})
          }
        })
    }
    handleSubmitted = () => {
        let all = document.getElementById('all')
        let submitted = document.getElementById('submitted')
        let notSubmitted = document.getElementById('notSubmitted')

        let dom = ReactDOM.findDOMNode
        dom(submitted).className = "_ta5l3a"
        dom(notSubmitted).className = ""
        dom(all).className = ""

        /*
        fetch(base_url + '/api/v1/course/assignment/149?pg=1&ttl=10', {
          method: 'GET',
          credentials: 'include',
          crossDomain: true
        }).then((res) => {
          return res.json()
        }).then((data) => {
          if(data.code === 200){
              this.setState({data: data.data})
          }
        })*/
    }
    handleNotSubmitted = () => {
        let all = document.getElementById('all')
        let submitted = document.getElementById('submitted')
        let notSubmitted = document.getElementById('notSubmitted')

        let dom = ReactDOM.findDOMNode
        dom(submitted).className = ""
        dom(notSubmitted).className = "_ta5l3a"
        dom(all).className = ""

        const data = this.state.data
   
        function checkNotSubmitted(status) {
            return status === 1;
        }
        if (data.code === 200){
            this.setState({data: data.filter(checkNotSubmitted)})
        }
    }
    render() {
        const {is_logged_in} = this.props
        const data = this.state.data

        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match}/>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_pd5m3n _c5m312 _c5x312">
                                <h1 className="_he3b">My Acitivity</h1>
                            </div>
                        </div>
                    </div>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                                <div className="_ta">
                                    <ul className="_ta5l">
                                        <li>
                                            <Link
                                                id="all"
                                                onClick=
                                                {e => {e.preventDefault(); this.handleAll()}}
                                                className="_ta5l3a"
                                                to="#">
                                                All
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                id="submitted"
                                                onClick=
                                                {e => {e.preventDefault(); this.handleSubmitted()}}
                                                to="#">
                                                Submitted
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                id="notSubmitted"
                                                onClick=
                                                {e => {e.preventDefault(); this.handleNotSubmitted()}}
                                                to="#">
                                                Not Submitted
                                            </Link>
                                        </li>
                                    </ul>
                                    <ListActivity data={data} />

                                    <div className="_ta5c _dn">
                                        <div className="_se _se3a">
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _c5m38 _pd">
                                                    <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3b">add</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _pd _c5m38">
                                                    <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3b">add</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _pd _c5m38">
                                                    <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3b">add</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x33 _c5m32 ">
                                                    <p className="_se5ct">YESTERDAY</p>
                                                </div>
                                                <div className="_c5x35 _pd _c5m38">
                                                    <p className="_se5c ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                                </div>
                                                <div className="_c5x34 _c5m32">
                                                    <button className="_bt3b">add</button>
                                                </div>
                                            </div>
                                            <div className="_ro">
                                                <div className="_c5x312">
                                                    <hr/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_ta5c _dn">
                                        <div className="_se _se3a">
                                            <div className="_ro _pd3l3t">
                                                <div className="_c5x312 _c5m312">
                                                    <h1 className="_he3m3bk">Lorem Ipsum</h1>
                                                    <p className="_ct _pd3l3t">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Etiam non sagittis tortor. Mauris mattis sem vitae tellus fringilla lacinia.
                                                        Etiam suscipit leo ac ligula pretium, nec aliquet purus dapibus. Ut consectetur
                                                        libero metus, sit amet interdum justo egestas in. Suspendisse velit leo,
                                                        venenatis at elementum eu, venenatis non mi. Aliquam dignissim dignissim erat,
                                                        at tincidunt nisi commodo nec. Pellentesque nec elit interdum, accumsan ligula
                                                        nec, vehicula ex. Nam et ultricies sus, quis varius elit.</p>
                                                </div>
                                            </div>
                                            <div className="_ro _pd3l3t">
                                                <div className="_c5m312 _c5x312">
                                                    <table className="_tb">
                                                        <thead>
                                                            <tr>
                                                                <th>Status</th>
                                                                <th>Grade</th>
                                                                <th>Time</th>
                                                                <th>File</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>No Attempt</td>
                                                                <td>No Grade</td>
                                                                <td>4 Hours</td>
                                                                <td>No Attempt</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="_ro _pd3l3t">
                                                <div className="_c5x35 _c5x3o7 _c5m33 _c5m3o9">
                                                    <button className="_bt5m3b">Add submition</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Newsbar/>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>)
    }
}
const ListActivity = (props)=>{
    return(
        <div className="_ta5c">
        <div className="_se _se3a">
            {props.data.map((data,i)=>(
                <div className="_ro" key={i}>
                        <div className="_c5x33 _c5m32">
                            <p className="_se5ct">{data.due_date}</p>
                        </div>
                        <div className="_c5x35 _pd _c5m38">
                            <p className="_se5c">{data.name}</p>
                        </div>
                        <div className="_c5x34 _c5m32">
                            <Link to={'/myactivity/detail/' + data.id}>
                                {data.status === 1 
                                    ? <button className="_bt3g">Not Submited</button> 
                                    : <button className="_bt3g">Read Detail</button>}
                            </Link>
                        </div>
                    </div>
            ))}
        </div>
    </div>
    )
}
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(MyActivity)