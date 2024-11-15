import { Section3Item } from "./Section3Item";

import MessageIcon from '../../assets/images/Section3-Icon-Message.svg';
import ShowChartIcon from '../../assets/images/Section3-Icon-ShowChar.svg';
import UserIcon from '../../assets/images/Section3-Icon-User.svg';




export const Section3 = () => {
    return (
        <>
            <section className="py-[120px]">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between gap-x-[8px]">
                        <Section3Item
                            icon={MessageIcon}
                            title="Share team inboxes"
                            desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone "
                        />
                        <Section3Item
                            icon={ShowChartIcon}
                            title="Analytics dashboard"
                            desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone "
                        />
                        <Section3Item
                            icon={UserIcon}
                            title="Deliver instant answer"
                            desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone "
                        />
                    </div>

                </div>
            </section>
        </>
    );
}