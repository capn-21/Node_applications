const file=require('fs')

 const first= file.readFileSync('./content/fst.txt','utf-8')
 
 const sec=file.writeFileSync('./content/written.txt','here is the written values')
 
 const writing= file.readFileSync('./content/written.txt','utf-8')

 console.log(first)
 console.log(writing);