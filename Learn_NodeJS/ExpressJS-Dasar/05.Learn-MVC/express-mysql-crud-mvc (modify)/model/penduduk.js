module.exports = {
    get: (db, callback) => {
        db.query("SELECT * FROM kemandungan ORDER BY NIP, Nama", callback);
    },
    create: (db, data, callback) => {
        db.query(`INSERT INTO kemandungan VALUES(${data.nip}, "${data.nama}", "${data.pekerjaan}")`, callback);
    },
    getByNip: (db, nip, callback) => {
        db.query(`SELECT * FROM kemandungan WHERE NIP=${nip} ORDER BY NIP, Nama`, callback);
    },
    update: (db, data, nip, callback) => {
        db.query(`UPDATE kemandungan SET nama="${data.nama}", pekerjaan="${data.pekerjaan}" WHERE nip=${nip}`, callback);
    },
    destroy: (db, nip, callback) => {
        db.query(`DELETE FROM kemandungan WHERE nip=${nip}`, callback);
    }
    
};
