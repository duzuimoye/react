import React,{Component} from 'react';

class Note extends Component {
    state = {
        entity: this.props.entity,
        destoryEntity: this.props.destoryEntity
    }
    render(){
        return(
            <div className="item">
            {this.state.entity}
            <i className="right floated trash outline icon" onClick={() =>
            this.state.destoryEntity(this.state.entity)}></i>
            </div>
        )
    }
}
export default Note