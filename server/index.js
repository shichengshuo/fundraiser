import express from "express";
import cors from 'cors';
const app = express();
// 处理跨域
app.use(cors())

// 测试
app.get('/test', function (req, res) {
    res.status(200).send('test')
})
// 启动服务器
app.listen(3000, () => {
    console.log(`http://localhost:3000/`);
});
