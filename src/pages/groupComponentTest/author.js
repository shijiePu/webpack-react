// Author构造函数

export function Author(name) {
    this._name = name
}
Author.prototype.onChange = function (newName) {
    this._name = newName
}

