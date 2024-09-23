import express from "express";
import cors from 'cors';
import DB from "./crowdfunding_db.js";
const app = express();
// 处理跨域
app.use(cors())

// 测试
app.get('/test', function (req, res) {
    res.status(200).send('test')
})

// 获取分类
app.get("/categories", async (req, res) => {
    try {
        const [rows] = await DB.query("SELECT * FROM CATEGORY");
        res.status(200).send(rows);
    } catch (err) {
        res.status(500);
    }
});


// 筹款项目列表
app.get("/fundraisers", async (req, res) => {
    try {
        const [rows] = await DB.query('SELECT * FROM FUNDRAISER');
        res.status(200).send(rows)
    } catch (err) {
        res.status(500);
    }
});

// 查询id
app.get("/fundraiser/:id", async (req, res) => {
    const fundraiserId = req.params.id;
    try {
        const [rows] = await DB.query(`SELECT * FROM FUNDRAISER WHERE FUNDRAISER_ID = ${fundraiserId}`);
        res.status(200).send(rows[0]);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// 启动服务器
app.listen(3000, () => {
    console.log(`http://localhost:3000/`);
});
