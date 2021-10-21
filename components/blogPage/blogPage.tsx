import Link from 'next/link'

export default function blogPage() {
    return (
        <div>
            <Link href="/"><p className="font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black p-4">Go back</p></Link>
            <div className="flex flex-col items-center w-full">
                <h1 className="my-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font font-dancingScript"> Blog Title </h1>
                <img className="py-2 px-10 float-right h-full w-screen rounded-lg " alt="hero" src="https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/3e79b/hero.jpg" />
                <p className="m-8 leading-relaxed text-justify text-lg text-blueGray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic reprehenderit eligendi minima laudantium. Tempora consequuntur quis totam voluptatum qui voluptatem quia ab deleniti! Iste veniam tempore ratione. Eveniet impedit aspernatur culpa corrupti quidem consectetur eos doloremque eius repellat reiciendis earum alias labore possimus ut cupiditate modi, ullam cumque reprehenderit! Illo esse modi natus, omnis distinctio cum repudiandae, debitis molestiae eaque similique nostrum nobis eos veniam nesciunt. Perspiciatis esse dignissimos eius eveniet autem voluptas, quis delectus est at consequuntur dolores enim quibusdam quae praesentium necessitatibus adipisci rem, ullam, commodi cum assumenda neque. Temporibus porro totam, enim alias distinctio non pariatur! Pariatur, perspiciatis ullam rem totam recusandae, laboriosam voluptas facilis autem laudantium officiis maxime atque, quidem aperiam at. Itaque temporibus architecto id iusto facere maxime illum iste tempora officiis ipsam? Tenetur, soluta. Atque ipsam rerum officiis expedita saepe adipisci exercitationem dolorum itaque iusto. Corporis deserunt at nam libero vel aliquam minima.</p>
                <p className="m-8 leading-relaxed text-justify text-lg text-blueGray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic reprehenderit eligendi minima laudantium. Tempora consequuntur quis totam voluptatum qui voluptatem quia ab deleniti! Iste veniam tempore ratione. Eveniet impedit aspernatur culpa corrupti quidem consectetur eos doloremque eius repellat reiciendis earum alias labore possimus ut cupiditate modi, ullam cumque reprehenderit! Illo esse modi natus, omnis distinctio cum repudiandae, debitis molestiae eaque similique nostrum nobis eos veniam nesciunt. Perspiciatis esse dignissimos eius eveniet autem voluptas, quis delectus est at consequuntur dolores enim quibusdam quae praesentium necessitatibus adipisci rem, ullam, commodi cum assumenda neque. Temporibus porro totam, enim alias distinctio non pariatur! Pariatur, perspiciatis ullam rem totam recusandae, laboriosam voluptas facilis autem laudantium officiis maxime atque, quidem aperiam at. Itaque temporibus architecto id iusto facere maxime illum iste tempora officiis ipsam? Tenetur, soluta. Atque ipsam rerum officiis expedita saepe adipisci exercitationem dolorum itaque iusto. Corporis deserunt at nam libero vel aliquam minima.</p>
            </div>
            <p className="p-8 text-md md:text-lg float-right font-black tracking-tighter text-black title-font font-dancingScript"> By John Doe </p>
        </div>

    )
}
