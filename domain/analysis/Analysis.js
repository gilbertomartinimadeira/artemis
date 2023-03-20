
module.exports = function Analysis (id, date, message, approved, proposal){
    return {
        id : id || 0,
        date: date || Date(),
        message: message || '',
        approved: approved || undefined,
        proposal: proposal || {}
    }
}