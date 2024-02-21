// Practice Basic ExpressJS
// author @affdn-nrflh23 | Wed, March 9 2022

import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";

import { check, validationResult } from "express-validator";
import { loadContacts, findContact, addContact, deleteContact, updateContact } from "./utils/contacts.js";
const app = express();
const port = 9000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: true}));

// Configuration flash
app.use(cookieParser("secret"));
app.use(session({
    cookie: { maxAge: 6000},
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// root
app.get("/", (_, res) => {
    
    res.render("index", {
        title: "Home", 
        layout: "layouts/main"
    });
});

// about
app.get("/about", (_, res) => {
    res.render("about", {
        title: "About",
        layout: "layouts/main"
    });
});

// contact
app.get("/contact", (req, res) => {
    const data = loadContacts();
    res.render("contact", {
        title: "Contact",
        layout: "layouts/main",
        data,
        message: req.flash("message")
    });
});

// form add contact
app.get("/contact/add", (_, res) => {
    res.render("add", {
        title: "Add Contact",
        layout: "layouts/main"
    });
});
app.post("/contact", 
    check("name").custom((name) => {
        const duplicate = findContact(name);
        if (duplicate) {
            throw new Error("Name is Registered");
        }
        return true;
    }),
    check("phone", "Number Phone is Not Valid").isMobilePhone("id-ID"),
    check("email", "Email is Not Valid").isEmail().optional({checkFalsy: true}),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render("add", {
                title: "Add Contact",
                layout: "layouts/main",
                errors: errors.array()
            });
        } else {
            addContact(req.body);
            req.flash("message", "New Contact Added Successfully")
            res.redirect("/contact")
        }
    }
);

// form update contact
app.get("/contact/update/:name", (req, res) => {
    const contact = findContact(req.params.name);
    res.render("update", {
        title: "Update Contact",
        layout: "layouts/main",
        contact
    })
})
app.post(
    "/contact/update",
    check("name").custom((name, {req}) => {
        const duplicate = findContact(name);
        if (req.body.oldName !== name && duplicate) {
            throw new Error("Name is Registered");
        }
        return true;
    }),
    check("phone", "Number Phone is Not Valid").isMobilePhone("id-ID"),
    check("email", "Email is Not Valid").isEmail().optional({checkFalsy: true}),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render("update", {
                title: "Add Contact",
                layout: "layouts/main",
                errors: errors.array(),
                contact: req.body
            });
        } else {
            req.flash("message", `Contact ${req.body.name} Updated Successfully`);
            updateContact(req.body);
            res.redirect("/contact");
        }
    }
)


// delete contact 
app.get("/contact/delete/:name", (req, res) => {
    const contact = findContact(req.params.name);
    if (!contact) {
        res.status(404)
        .send("Contact Not Found");
    } else {
        deleteContact(req.params.name);
        req.flash("message", `Contact ${req.params.name} Deleted Successfully`);
        res.redirect("/contact");
    }
});


// detail contact
app.get("/contact/:name", (req, res) => {
    const dataDetail = findContact(req.params.name);
    res.render("detail", {
        title: "Detail Contact",
        layout: "layouts/main",
        dataDetail
    });
});



app.use("/", (_, res) => {
    res.status(404);
    res.send("Page Not Found\n 404");
});

app.listen(port, () => {
    console.log(`App listening on http://127.0.0.1:${port}`);
});
