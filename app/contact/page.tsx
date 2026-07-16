import Nav from "../components/nav";
import Footer from "../components/footer";

export default function ContactMe() {
    return (
        <section className="border-2 min-h-screen flex flex-col items-center justify-center gap-10">
            <Nav />

            <h2 className="text-4xl font-extralight">Contact Me</h2>

            <form className="flex flex-col gap-4">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        className="border h-12 w-125 cursor-pointer"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Subject Title"
                        className="border h-12 w-125 cursor-pointer"
                    />
                </div>
                <div>
                    <textarea
                        className="border h-65 w-125 overflow resize cursor-pointer"
                    />
                </div>
                <div>
                    <button
                        className="border h-12 w-125 rounded-xs font-poppins text-xl capitlize cursor-pointer"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <Footer />
        </section>
    );
};