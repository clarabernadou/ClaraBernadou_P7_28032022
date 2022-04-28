module.exports = (req, res, next) => {
    let userPassLength = req.body.password.length
        if (userPassLength > 8 && userPassLength < 100){
            next();
        }else{
            res.status(400).json({ 
                message: 'Password required: 8 characters minimum and 100 characters maximum.'
            });
        }
    }