const noRoute = (req,res) => {
    res.status(404).json({
        code: res.statusCode,
        message: 'Opps Page Not Found'
    });
}

module.exports = noRoute