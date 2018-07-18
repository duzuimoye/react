import React,{ Component } from 'react'
import Note from './Note';
class Notes extends Component {
    // state 相当于vue data
    state = {
        entities: [
            '正不压邪',
            '我是药老'
        ]
    }
    createEntry () {
        console.log(this.state.entities);
    }
    destoryEntity (entity) {
        console.log(entity);
    }
    render() {
        // <!-- react 独有的jsx 模板引擎
        // 在js 里直接写HTML -->
        // react classname html 是会被编译成js的 class 是一个关键字
        const entities = this.state.entities;
        const noteItems = entities.map((entity,index) =>
          <Note
          key={index}
          entity={entity}
          destoryEntity={this.destoryEntity}
          />
        )
        console.log(noteItems);
        return(
            <div className="ui container notes">
                <h4 className="ui horizontal divider header">
                    <i className="paw icon"></i>
                    notes app _ react.js
                </h4>
                <button className="ui right floated basic violet button" onClick={this.createEntry.bind(this)}>添加笔记</button>  
                <div className="ui divided items">
                {noteItems}
                {!this.state.entities.length &&<span >还没有笔记 请先添加</span>}
                </div>
            </div>
        )
    }
}
export default Notes
