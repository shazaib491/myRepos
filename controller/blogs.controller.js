let blogs = [{
    id: 1,
    username: 'admin',
    email: 'admin@gmail.com',
    password: "padd@123"
}];

console.log("Hello Wolrd")

exports.getPost = (req, res) => {
    res.status(200).json({
        message: 'post fetched successfully',
        data: blogs
    })
}


exports.savePost = (req, res) => {
    let singleBlog = {
        id: req.body.id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    blogs.push(singleBlog);
    res.status(201).json({
        message: 'post saved successfully',
    })
}

exports.singlePost = (req, res) => {
    const {
        id
    } = req.params;
    let singleBlog = blogs.find((element) => element.id == id);
    res.status(200).json({
        message: 'single post fetched successfully',
        data: singleBlog
    })
}
exports.updatePost = (req, res) => {
    const {
        id
    } = req.params;
    let singleBlog = {
        id: req.body.id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    let index = blogs.findIndex((element => element.id == id));

    console.log(index);

    blogs[index] = singleBlog;

    res.status(201).json({
        message: 'post updated successfully',
    })
}
exports.deletePost = (req, res) => {
    const {
        id
    } = req.params;
    blogs = blogs.filter((element) => element.id != id);
    res.status(201).json({
        message: 'post delete successfully',
        data: blogs
    })
}