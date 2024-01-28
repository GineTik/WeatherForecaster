import Image from "next/image";

const weatherFooter = () => {
    return (
        <footer className="fixed bottom-20 left-28 flex items-center">
            <div className="text-9xl flex relative">
                <span>16</span>
                <span className="after:content-[''] absolute -top-6 -right-10 text-8xl">
                    &#8728;
                </span>
            </div>
            <div className="ps-14">
                <p className=" text-6xl">London</p>
                <p className="text-lg">06:09 - Monday, 9 Sep 23</p>
            </div>
            <Image
                src="/images/cloud.svg"
                alt="cloud"
                height={60}
                width={60}
                className="ms-8"
            />
        </footer>
    );
};

export default weatherFooter;
