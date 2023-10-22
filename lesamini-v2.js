/* mini stream lesa static v2 Copyright © 2023 lesa.one
Launch: onclick="setInterval(() => lesamini() , 7000) */
const lesastream = document.getElementById("lesastream")
function lesaRA(min, max) {min = Math.ceil(min);max = Math.floor(max)
 return Math.floor(Math.random() * (max - min + 1) + min)}
async function lesamini() {const response = await fetch('stories.mp4')
if (!response.ok) {throw new Error("lesa:Connection error fetch-err-1")}
const lesaBlob = await response.blob()
console.log('lesa:byte', `server:${lesaBlob.size} front:${localStorage['ldb']}`) //byte size control + https-301
if(lesaBlob.size.toString()===localStorage['ldb'] || undefined===localStorage['ldb']) {
console.log('byte the value has not changed or is not assigned. check after 7 seconds')
localStorage['ldb'] = lesaBlob.size}
else {console.log('lesa: STREAM RELOG')
document.getElementById("lesastream").src = `stories.mp4?lesa=${lesaRA(1,9999)}` //asynchronous replacement of video value and no caching
localStorage.clear()
}} 

