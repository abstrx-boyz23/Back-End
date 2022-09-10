const penduduk = require("../model/penduduk");

module.exports = {
    index: (req, res) => {
        penduduk.get(req.db, (err, result) => {
            if (err) throw err;
            res.render("penduduk/index", { result }); // meRender File Yg Ada di Dalam Views nya
        });
    },
    create: (req, res) => {
        res.render("penduduk/create");
    },
    storage: (req, res) => {
        penduduk.create(req.db, req.body, (err) => {
            if (err) throw err;
            console.log(req.body);
            res.redirect("/penduduk");
        });
    },
    edit: (req, res) => {
        penduduk.getByNip(req.db, req.params.nip, (err, result) => {
            if (err) throw err;
            res.render("penduduk/edit", {result: result[0]});
        });
    },
    update: (req, res) => {
       penduduk.update(req.db, req.body, req.params.nip, (err) => {
           if (err) throw err;
           console.log(req.body);
           res.redirect("/penduduk");
       });
    },
    destroy: (req, res) => {
        penduduk.destroy(req.db, req.params.nip, (err) => {
            if (err) throw err;
            res.redirect("/penduduk");
        });
    }

 
};
