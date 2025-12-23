const isAuth = (req, res, next) => {
    if (req.cookies.data) {
        return next();
    }
    res.redirect("/blog/register")
}