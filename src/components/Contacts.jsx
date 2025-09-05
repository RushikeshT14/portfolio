import { useState } from "react";


const Contacts = () => {

    const scriptURL =
        "https://script.google.com/macros/s/AKfycby-aTFOETMwjxAdyzuh1m9CouFpWy8mePk_QzwySq9YrdMdptkN7aikaeb5ltX2MaWf4w/exec";

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const formData = new FormData(e.target);
            const response = await fetch(scriptURL, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setMessage("Request submitted successfully!")
                setTimeout(() => {
                    setMessage("");
                },2000);
                e.target.reset();
            } else {
                setMessage("Something went wrong!");
            }
        } catch (error) {
            setMessage("Error: " + error.message);
        }

        setLoading(false);
    };

    return (
        <div id='Contacts' className='Contacts'>
            <h2 data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">Contacts</h2>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-delay="300" >
                <div className="contact-illusion">
                    <div className="orb">
                        <div className="shine"></div>
                        <div className="shadow"></div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-delay="300">
                <form
                    name="submit-to-google-sheet"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="Name"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="number"
                        name="Number"
                        placeholder="Number"
                        required
                    />
                    <textarea
                        name="Message"
                        placeholder="Message"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    {message && <p className="text-sm mt-2">{message}</p>}
                </form>

            </div>
        </div>
    )
}

export default Contacts;
