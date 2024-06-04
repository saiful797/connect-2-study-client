
const AllTutor = ({ tutor }) => {
     
    const { name, image } = tutor;
    return (      
        <div key={tutor._id} className="grid place-content-center shadow-lg w-72 p-5"> 
            <div className="flex justify-center items-center">
                <img className="h-24 w-24 rounded-full" src={image} alt="tutor image" />
            </div>
            <p className="mt-3 text-4xl font-bold">{name}</p>
        </div>
    );
};

export default AllTutor;