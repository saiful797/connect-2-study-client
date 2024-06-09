import React from 'react';

const AddUserRole = () => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg w-1/3">
            <div className="flex justify-end">
              <button onClick={closeModal} className="text-gray-700">&times;</button>
            </div>
            <div className="mt-2">
              <p>Some text in the Modal..</p>
            </div>
          </div>
        </div>
    );
};

export default AddUserRole;