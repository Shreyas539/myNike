
import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section className=" max-container flex flex-wrap gap-9 justify-center">
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service} />
      ))}

      {/* {services.map((service) => (
              <ServiceCard key={service.label} {...service} />
            ))} */}
      
    </section>
  );
};

export default Services;