import bannerImg from '../../../assets/banner.png'

const Banner = () => {
    

    return (
        <div className="hero bg-base-200 min-h-screen w-">
            <div className="hero-content flex-col lg:flex-row-reverse w-3/4">
                <img
                    src={bannerImg}
                    className="max-w-sm shadow-2xl ml-5 rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold leading-normal">Books to freshen up your bookshelf!</h1>

                    <button className="btn bg-custom-primary text-neutral-100 mt-5">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;