import React from 'react'

const ExperienceModal = ({toggleModal,setModalOpen}) => {
  const handleFormSubmit = () => {
    console.log("form submitted")
    setModalOpen(false)
}
  return (
    <>
        <div className="w-full z-50 h-screen fixed top-0 left-0 bg-gray-600 backdrop-blur-sm bg-opacity-50"></div>
        <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Add Experience
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form className="p-4 md:p-5"  onSubmit={handleFormSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="totalExperience"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Total Experience
                    </label>
                    <input
                      type="text"
                      name="totalExperience"
                      id="totalExperience"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Enter your Total Experience"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="designation"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      id="designation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Enter your Designation"
                    />
                  </div>
                  
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="startDate"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Start Date
                    </label>
                    <input
                      type="text"
                      name="startDate"
                      id="startDate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Enter Starting Date"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="endDate"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      End Date
                    </label>
                    <input
                      type="text"
                      name="endDate"
                      id="endDate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Enter End Date"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-orange hover:bg-orangeDark focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Submit 
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default ExperienceModal