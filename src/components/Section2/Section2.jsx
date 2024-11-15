import { BoxTitle } from "../BoxTitle/BoxTitle";
import { Section2Item } from "./Section2Item";

export const Section2 = () => {
    return (
        <>
            <section className="py-[120px]">
                <div className="container mx-auto">
                    <BoxTitle 
                        title="How Horizon works?"
                        desc="Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum."
                    />

                    <div className="mt-[60px] flex items-center gap-x-[40px]">
                        <Section2Item
                            number="1"
                            title="Create your Account"
                            desc="Condimentum vit pellemsque habitant morbi at molestie."
                        />
                        <Section2Item
                            number="2"
                            title="Setup your Account"
                            desc="Condimentum vit pellemsque habitant morbi at molestie."
                        />
                        <Section2Item
                            number="3"
                            title="Start creating with Horizon"
                            desc="Condimentum vit pellemsque habitant morbi at molestie."
                        />
                    </div>
                </div>
            </section>
        </>
    );
}