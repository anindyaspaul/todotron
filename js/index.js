var items = TodoTxt.parse('(A) Try out jsTodoTxt @computer\nx 2017-08-23 Have fun @home +personal\n')
for (const item of items) {
    console.log(item)
    document.getElementById('todo-list').innerText += item.text + '\n'
}
