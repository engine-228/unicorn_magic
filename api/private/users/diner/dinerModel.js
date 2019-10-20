const db = require(dbConfig)
module.exports={
    findAll,
    findAllById,
    remove,
    add,
    editById
}
const table=''
function findAll(){
    return db(table)
}
function findAllById(id){
    return db(table)
    .where({id})
    .first()
}
function remove(id) {
    return db(table)
    .where({id})
    .del()
}
function editById(id,update){
    return db(table)
    .where({ id })
    .update(update, '*');
}
function add(obj){
    return db(table)
    .insert(obj)
    .then(findById(id))
}
