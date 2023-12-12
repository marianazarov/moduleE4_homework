const testObj = {
    color: "red",
    numb:5
};
const c="8"
const b="numb"
function hasProperty(a, testObj) {
    return a in testObj;
}
console.log(hasProperty(c, testObj))
console.log(hasProperty(b, testObj))
