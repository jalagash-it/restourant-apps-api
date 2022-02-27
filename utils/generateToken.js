module.exports = (length = 100) => {
    const arr = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        arr.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }
    return arr.join('');
}