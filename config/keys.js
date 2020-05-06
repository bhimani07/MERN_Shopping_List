const DB_USER = 'Kishan';
const PASSWORD = encodeURIComponent('Kishan123'); 
module.exports = {
    mongoURI: `mongodb+srv://${DB_USER}:${PASSWORD}@cluster0-kd4ws.mongodb.net/test?retryWrites=true&w=majority`
}