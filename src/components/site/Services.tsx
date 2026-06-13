import { motion } from "framer-motion";
import { Car, Sparkles, Shield, Wind, Wrench, Gauge } from "lucide-react";
import exterior from "@/assets/service-exterior.jpg";
import interior from "@/assets/service-interior.jpg";
import ceramic from "@/assets/service-ceramic.jpg";

const services = [
  { icon: Car, title: "Exterior Wash", desc: "Foam cannon, hand wash, tire shine and streak-free finish.", img: exterior },
  { icon: Wind, title: "Interior Detailing", desc: "Vacuum, steam clean, leather treatment, dashboard polish.", img: interior },
  { icon: Shield, title: "Ceramic Coating", desc: "9H hardness coating — 2 years of mirror gloss & protection.", img: ceramic },
  { icon: Sparkles, title: "Paint Correction", desc: "Multi-stage polish to remove swirls, scratches and oxidation.", img: exterior },
  { icon: Wrench, title: "Engine Bay Cleaning", desc: "Degrease, dress and protect — every component spotless.", img: interior },
  { icon: Gauge, title: "Express Wash", desc: "15-minute touchless wash for busy drivers, anytime.", img: ceramic },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-aqua">What we do</p>
          <h2 className="text-4xl font-black sm:text-5xl">
            Every service your car <span className="text-gradient-aqua">deserves</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a 15-minute express rinse to a full ceramic coating — handled by trained detailers using premium chemicals.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group glass-card relative overflow-hidden rounded-3xl p-6 transition-shadow hover:shadow-card"
            >
              <div className="relative mb-5 h-44 overflow-hidden rounded-2xl">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-xl bg-gradient-aqua glow-aqua">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
