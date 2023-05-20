require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
})

const mailOptions = {
	from: 'kasdrums.jsx@gmail.com',
	to: 'kasdrums.jsx@gmail.com',
	subject: 'mail from node.js',
	text: 'text from mail from node.js',
}

transporter.sendMail(mailOptions)
