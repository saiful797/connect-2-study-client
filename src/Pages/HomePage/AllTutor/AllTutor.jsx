
const AllTutor = ({ tutor }) => {
     
    const { name, image } = tutor;
    return (      
        <div key={tutor._id}> 
            <img className="h-24 w-24 rounded-full" src={image} alt="tutor image" />
            <p>{name}</p>
        </div>
    );
};

export default AllTutor;