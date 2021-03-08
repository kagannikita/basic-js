module.exports = function createDreamTeam(members) {
    let str = ""
    if (members instanceof Array) {

        members.map(i => {
            if (typeof (i) === "string") {
                str += i.trim().split('')[0].toUpperCase()
            }
        })
        return str.split('').sort().join('')
    }
    return false
};
