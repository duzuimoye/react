import React, { Component } from 'react';
import './App.css';
//对react ui阿里的antd 部分引用
import { Table, Pagination, Input, Row, Button, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal;

class App extends Component {
  columns =[{
      dataIndex:'username',
      title: '用户'
  },{
      dataIndex: 'age',
      title: '年龄'
  },{
      dataIndex: 'address',
      title: '地址'
  },{
      dataIndex: "action",
      title: "操作",
      width: 200,
      render: (text,row) =>{
          return (
              <div>
                  <Button onClick={ ()=>this.modal('edit',row)}>编辑</Button>
                  <Button type="danger" style={{marginLeft: 10}} onClick={()=>this.remove(row)}>删除</Button>    
              </div>
          )
      }
  }]
  state = {
    visible: false,
    users: [{
        username: 'cjk',
        age: '18',
        address: '深圳',
        id: 1
    },{
        username: 'wxf',
        age: '16',
        address: '杭州',
        id: 2
    }]
  }
  remove(row) {
    const that =this;
    confirm({
        title:'是否删除该用户？',
        okText: '是',
        okType: '否',
        onOk() {
            const _users = that.state.users.filter(data =>{
                return data.id !== row.id
            });
            that.setState({
                users: _users
            })
        }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;  //把字段装饰下再输出
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4}
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16}
      }
    }
    return (
      <div className="App">
        <Row>
          <Search style={{width:300}}/>
          <Button type="primary" style={{marginLeft:20}}
          onClick={() => this.modal('add')}>添加用户
          </Button>
        </Row>
        <Row style={{paddingTop:20}}>
            <Table dataSource={this.state.users} columns={this.columns} rowKey={row=>row.id} bordered pagination={false}></Table>
           
        </Row>
        <Modal title="添加用户" visible={this.state.visible}
        onOk={() => this.handleOk()}
        onCancel={() => this.setState({visible: false})}>
          <Form>
            <FormItem label="用户" {...formItemLayout}>
              {
                getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your username!'
                    }
                  ]
                })(<Input placeholder="username" />)
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your age!'
                    }
                  ]
                })(
                  <Input placeholder="age"/>
                )
              }
            </FormItem>
            <FormItem label="地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your address!'
                    }
                  ]
                })(
                  <Input placeholder="address"/>
                )
              }
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
  handleOk() {
    // console.log('ok');
    // this.setState({
    //   visible: false
    // });
    this.props.form.validateFieldsAndScroll((err,valus) =>{
        if(!err){
        this.setState({
            visible: false
        })
    }
    })
  }
  modal(type,row) {
    this.setState({
      visible: true
    },() =>{
        this.props.form.resetFields();
        if(type === 'add') {return;}
        this.props.form.setFieldsValue({
            username: row.username,
            age: row.age,
            address: row.address,
        })

    });
  }
}

export default Form.create()(App);
