import organizations from '../../data/organizations.json';

const OrganizationsComponent = () => {
    return (
        <div className="bg-white  max-lg:h-56 max-sm:w-7/12  max-[510px]:w-full  h-64 w-4/12 max-xl:w-5/12 rounded-2xl max-lg:mb-4   border-2">
            <p className="text-xl font-semibold text-[#582270] mt-3 ml-4">Organizasyonlar</p>
            <div className="w-full h-0.5 bg-gray-200 mt-3"></div>
            <div className="relative p-4 w-full h-fit flex-col justify-center max-lg:space-y-2 flex space-y-3">
                {organizations.slice(0, 3).map((organization) => (
                    <a key={organization.organization_id} href={organization.organization_url} className="w-full h-10 bg-[#582270] rounded-2xl flex flex-row ">
                        <p className="text-white font-semibold pl-5 flex items-center max-md:text-sm  w-full h-full">{organization.organization_name} </p>
                        <div className="w-0.5 h-full bg-[#B748E9] mr-4" />
                        <div className="flex  h-full justify-end mr-4 items-center text-white max-md:text-sm font-semibold">{organization.organization_year} </div>
                    </a>
                ))}

            </div>
        </div>
    );
}

export default OrganizationsComponent;