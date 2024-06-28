
const AllTutor = ({ tutor }) => {
     
    const { name, image } = tutor;
    return (      
        <div className="mx-auto grid place-content-center shadow-lg w-72 p-5 border border-[#f0c1a6] rounded-md hover:border-[#c97f54] hover:bg-[#ffeadc]"> 
            <div className="flex justify-center items-center">
                <img className="h-24 w-24 rounded-full hover:scale-105" src={image} alt="tutor image" />
            </div>
            <p className="mt-3 text-xl font-bold text-[#D35400]">{name.toUpperCase()}</p>
        </div>
    );
};

export default AllTutor;