const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  nickName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }  
}, {
  timestamps: true, // 在我的模型中插入时间戳.记录数据的修改和新增时间  craetedAt, updatedAt
})

const Message = mongoose.model('message', messageSchema);

module.exports = Message;