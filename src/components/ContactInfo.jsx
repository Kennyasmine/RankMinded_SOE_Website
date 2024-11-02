import { Link } from "react-router-dom"
import { contacts } from "../constants"

const ContactInfo = () => {
  return (
    <section className="bg-[#080808] text-white py-8 px-2">
        <div className="max-w-6xl m-auto mb-32">
            <div className="px-8 sm:px-6 lg:px-10">
                <h2 className="text-3xl font-bold text-center mt-16 mb-10">Contact</h2>
                <div className="max-w-4xl m-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contacts.map((contact) => (
                        <div key={contact.text} className="flex flex-col items-center space-y-2">
                            <Link 
                                to={contact.href.includes('@') ? `mailto:${contact.href}` : contact.href}
                                className="flex flex-col items-center space-y-2">
                                <img src={contact.icon} alt={contact.text} className="w-6 h-6
                                    filter invert brightness-0 contrast-100 cursor-pointer" 
                                />
                                <p className="text-lg font-semibold">{contact.text}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactInfo
