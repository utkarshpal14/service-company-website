import { services } from "../data/servicesData";
import ServiceCard from "../components/cards/ServiceCard";

export default function ServicesSection() {
  return (
    <section  id="services"  className="px-8 py-24">

      <div className="max-w-6xl mx-auto">

        <p className="text-sm uppercase tracking-widest text-primary mb-3">
          Our Services
        </p>

        <h2 className="text-4xl font-bold mb-6">
          Expertise That Drives Business Results
        </h2>

        <p className="text-lightText max-w-2xl mb-12">
          We offer a comprehensive range of consulting and professional services
          designed to support organizations at every stage of growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}

            />
          ))}
        </div>

      </div>
    </section>
  );
}
