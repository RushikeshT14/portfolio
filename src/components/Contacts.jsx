

const Contacts = () => {
    return (
        <div id='Contacts' className='Contacts'>
            <h2>Contacts</h2>
            <div className="contact-illusion">
                <div className="orb">
                    <div className="shine"></div>
                    <div className="shadow"></div>
                </div>
            </div>
            <div>
                <form method="POST"
                    action="https://script.google.com/macros/s/AKfycbyZn-ShtjRZ0VxvIan1miC1vq8NsGnUw4YZcPizSKzrI-eXyIuY8hjfjpkZFRo890oEeA/exec">
                    <input type="text" name="Name" id="Name" placeholder='Name' required />
                    <input type="email" name="Email" id="Email" placeholder='Email' required />
                    <input type="number" name="Number" id="Number" placeholder='Number' min={1111111111} max={9999999999} />
                    <textarea name="Message" id="Message" placeholder='Message'></textarea>
                    <button>Send</button>
                </form>

            </div>
        </div>
    )
}

export default Contacts;
