import { Section4BoxTitle } from "./Section4BoxTitle";

import Section4Image from '../../assets/images/Section4-Image.png';
import { Section4Item } from "./Section4Item";

export const Section4 = () => {
    return (
        <>
            <section className="py-[120px]">
                <div className="container mx-auto">
                    <div className="flex gap-x-[110px]">
                        <div className="w-[50%]">
                            <Section4BoxTitle />

                            <div className="flex items-center flex-wrap gap-y-[60px] gap-x-[40px]">
                                <Section4Item
                                    number="340+"
                                    title="Successful Projects"
                                    desc="Urna duis convallis convallis tellus interdum velit laoreet."
                                />
                                <Section4Item
                                    number="$10m"
                                    title="Annual Percentage Rate"
                                    desc="Urna duis convallis convallis tellus interdum velit laoreet."
                                />
                                <Section4Item
                                    number="2.8k+"
                                    title="Clients Worldwide"
                                    desc="Urna duis convallis convallis tellus interdum velit laoreet."
                                />
                                <Section4Item
                                    number="7000+"
                                    title="Daily Visits"
                                    desc="Urna duis convallis convallis tellus interdum velit laoreet."
                                />
                            </div>
                        </div>

                        <div className="">
                            <img
                                className="aspect-square" 
                                src={Section4Image} 
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}