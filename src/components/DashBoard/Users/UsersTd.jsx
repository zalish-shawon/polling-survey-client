/* eslint-disable react/no-unknown-property */

const UsersTd = ({user}) => {
    const {name, email, image, role} = user;

    const handleNewRole = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }


    return (
       
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src={image} alt="Jese image" />
                    <div class="ps-3">
                        <div class="text-base font-semibold">{name}</div>
                        
                    </div>
                </th>
                <td class="px-6 py-4">
                    {email}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <p>{role}</p>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="relative inline-flex">
                        <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
                        <select onChange={handleNewRole} class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                            
                            <option value={'admin'}>Admin</option>
                            <option value={'surveyor'}>Surveyor</option>

                        </select>
                    </div>
                </td>
            </tr>
        
    );
};

export default UsersTd;