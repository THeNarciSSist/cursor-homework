"use strict"

async function getRandomChinese (length) {
	if(length < 0 || !Number.isInteger(length)) throw new Error("Arguments error. Only positive nums")

 		let symbols = []
		for (let i = 0; i < length; i++) {
			const sign = String(Date.now()).slice(-5)
			await new Promise((resolve, reject) => setTimeout(resolve, 50))
			symbols.push(String.fromCharCode(sign))
			}
			return symbols.join("")
}

getRandomChinese(4).then(result => alert(result)).catch(err => alert(err))
