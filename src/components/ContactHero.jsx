import { contact } from "../assets/images"

const ContactHero = () => {
  return (
    <section className="relative bg-cover bg-center h-[450px] t-[86px] overflow-hidden" 
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-85 z-10"></div>
    </section>
  )
}

export default ContactHero
