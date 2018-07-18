import Loki from 'lokijs';
// db 配置 初始化，连接及数据查询 db 句柄 代表数据库数据库名（一个项目一个库）-> collection（table 的别称）-> rows(数据记录) ->column(列名)
// sql查询，典型的异步操作 用promise来封装，连接数据库 查询 返回都需要时间

export const db = new Loki('notes', {            //notes 数据库的名字
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    aotosaveInterval: 3000,
    persistenceMethod: 'localStorage'

})
function databaseInitialize (){
    const notes = db.getCollection('notes');
    if(notes ===null) {
        db.addCollection('notes');
    }
}
export function loadCollection(collection){
    return new Promise(resolve =>{
        db.loadDatabase({},() =>{
            const _collection = db.getCollection(collection) || db.addCollection(collection);
            resolve(_collection);
        })
    })
}