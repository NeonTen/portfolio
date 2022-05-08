import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Heading from "./Heading"
import Popup from './Popup'

function Contact() {

	const [message, setMessage] = useState(false)
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('sajidkhan.in', 'template_sajidkhan.in', form.current, 'a5m1HzrBSDR2dnWEQ')
		.then((result) => {
			console.log(result.text)
			setMessage(true)
			setTimeout(()=>{
				setMessage(false)
			},2500)
		}, (error) => {
			console.log(error.text)
		});
	}

	return (
		<section id="contact" className="bg-primary/3 dark:bg-white/3 py-20">
			<div className="container">
				{
					message
					? <Popup
						content="Message send sucessfully! You will get response within 24 hours."
						type="success"
					/>
					: ''
				}
			
				<Heading
					subheading="Contact Me"
					heading="Get in touch"
				/>

				<div className="grid md:grid-cols-4 gap-10 md:gap-6 items-start">

					{/* Sidebar */}
					<div className="grid grid-cols-2 md:grid-cols-1 gap-6">
						<div className="grid gap-3">
							<p className="font-bold uppercase">Location</p>
							<p className="text-sm leading-relaxed">Greater Noida West, India</p>
						</div>
						<div className="grid gap-3">
							<p className="font-bold uppercase">Contact details</p>
							<p className="text-sm"><a className="hover:text-secondary" href="tel:+918010335015">(+91)8010335015</a></p>
							<p className="text-sm"><a className="hover:text-secondary" href="mailto:sajid.cs08@gmail.com">sajid.cs08@gmail.com</a></p>
							<p className="text-sm"><strong>Skype:</strong> neo10-1987</p>
						</div>
					</div>

					{/* Content */}
					<div className="content md:col-span-3 grid gap-6">
						<form className="grid gap-6" ref={form} onSubmit={sendEmail}>
							<div className="grid sm:grid-cols-3 gap-6">
								<input type="text" name="name" placeholder="Name" required />
								<input type="email" name="email" placeholder="Email" required />
								<input type="tel" name="phone" placeholder="Phone" required />
							</div>
							<div className="grid">
								<textarea name="message" rows="6" placeholder="Message" required></textarea>
							</div>
							<button className="button bg-transparent dark:text-white/80" type="submit">Get in touch</button>
						</form>
					</div>

				</div>

			</div>
		</section>
	)
}

export default Contact