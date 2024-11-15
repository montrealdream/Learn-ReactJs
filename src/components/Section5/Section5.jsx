import { BoxTitle } from "../BoxTitle/BoxTitle";
import { Section5Item } from "./Section5Item";

export const Section5 = () => {
    return (
        <>
            <section className="py-[120px]">
                <div className="container mx-auto">
                    <BoxTitle
                        title="Customer Testimonials"
                        desc="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                    />

                    <div className="mt-[74px] flex gap-x-[18px]">
                        <Section5Item 
                            review="“A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”"
                            avatar="https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/refs/heads/master/PHP/Emilia_Holding_Programming_PHP.png"
                            fullName="Tiana Schleifer"
                            position="CEO & Founder"
                        />
                        <Section5Item 
                            review="“A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”"
                            avatar="https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/refs/heads/master/PHP/Emilia_Holding_Programming_PHP.png"
                            fullName="Tiana Schleifer"
                            position="CEO & Founder"
                        />
                    </div>
                </div>
            </section>

        </>
    );
}