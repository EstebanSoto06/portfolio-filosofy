import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const Reflexion = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="reflexion"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"REFLEXIÓN FINAL."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Gracias por haber leido todo, este curso me gustó por la parte de realizar un par de actividades diferentes (islas de polinizadores y el picnic) con las cuales quedé muy a gusto." />

                        <AnimatedBody
                            delay={0.1}
                            text="Como aprendizaje obtuve muchos conceptos nuevos, y mucho entendimiendo sobre como diferentes ecosistemas sobreviven y se adaptan a los cambios climáticos que vivimos hoy en día. Muchas gracias profe por tenerme paciencia, creame que le tomé cierto cariño y agradezco mucho su esfuerzo por brindarnos un curso agradable."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reflexion;
