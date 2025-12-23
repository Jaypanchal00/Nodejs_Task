
const usermodel = require("../model/usermodel");
const LocalStrategy = require("passport-local").Strategy;

const LocalAuth = (passport) => {
    passport.use(
        new LocalStrategy(
            { usernameField: "email" },  // ← IMPORTANT
            async (email, password, done) => {
                try {
                    const user = await usermodel.findOne({ email });

                    if (!user) {
                        return done(null, false, { message: "User Not Found" });
                    }

                    if (user.password !== password) {
                        return done(null, false, { message: "Invalid Password" });
                    }

                    return done(null, user);
                } catch (err) {
                    done(err);
                }
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await usermodel.findById(id);
        done(null, user);
    });
};

module.exports = LocalAuth;
