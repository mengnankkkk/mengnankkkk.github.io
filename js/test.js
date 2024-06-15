
 function randomPost() {
     fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
         let ls = data.querySelectorAll('url loc');
         location.href = ls[Math.floor(Math.random() * ls.length)].innerHTML
     })
 }
// 旧代码
// function randomPost() {
    // fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
    //     let ls = data.querySelectorAll('url loc');
    //     let list = [];
    //     ls.forEach(i => list.push(i.innerHTML))
    //     location.href = list[Math.floor(Math.random() * ls.length)]
    // })
// }
