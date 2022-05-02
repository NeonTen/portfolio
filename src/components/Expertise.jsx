import Heading from "./Heading"

function Expertise() {
    return (
        <section id="expertise" className="py-20">
			<div className="container">

				<Heading
					subheading="Expertise"
					heading="Experience"
				/>

				<div className="flex space-x-9 pb-16 -mb-1">
                    <p className="w-[135px] font-bold text-right shrink-0">2021 - Present</p>

					<div className="mt-1 relative">
                    	<div className="w-4 h-4 rounded-full bg-secondary shrink-0"></div>
						<div className="w-px bg-primary/20 absolute left-2 top-4 -bottom-16"></div>
					</div>

                    <div className="flex flex-col space-y-6">
                    	<p className="font-bold">Full Stack WordPress Developer</p>
                    	<p className="opacity-80">
							Proin tincidunt netus in scelerisque. Eros neque nam aliquam sagittis egestas et, at urna. Nulla elit mattis aliquam sit ut amet hendrerit diam amet. Nisi, hendrerit orci, at nunc tincidunt venenatis diam. Tellus integer sit arcu suspendisse nec auctor sed a, malesuada. Pellentesque faucibus maecenas sed sagittis, eget. Volutpat ut eros, odio ullamcorper nibh neque.
						</p>
                    	<p className="font-bold text-sm">
							- Company name | <a href="https://mythemeshop.com/" target="_blank" rel="noreferrer" className="hover:text-secondary">Website</a>
						</p>
                    </div>
                </div>

				<div className="flex space-x-9 pb-16 -mb-1">
                    <p className="w-[135px] font-bold text-right shrink-0">2019 - 2021</p>

					<div className="mt-1 relative">
                    	<div className="w-4 h-4 rounded-full bg-secondary shrink-0"></div>
						<div className="w-px bg-primary/20 absolute left-2 top-4 -bottom-16"></div>
					</div>

                    <div className="flex flex-col space-y-6">
                    	<p className="font-bold">Full Stack WordPress Developer</p>
                    	<p className="opacity-80">
							Proin tincidunt netus in scelerisque. Eros neque nam aliquam sagittis egestas et, at urna. Nulla elit mattis aliquam sit ut amet hendrerit diam amet. Nisi, hendrerit orci, at nunc tincidunt venenatis diam. Tellus integer sit arcu suspendisse nec auctor sed a, malesuada. Pellentesque faucibus maecenas sed sagittis, eget. Volutpat ut eros, odio ullamcorper nibh neque.
						</p>
                    	<p className="font-bold text-sm">
							- Company name | <a href="https://mythemeshop.com/" target="_blank" rel="noreferrer" className="hover:text-secondary">Website</a>
						</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Expertise