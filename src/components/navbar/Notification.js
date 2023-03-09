import Notifications from '../../data/notifications.json';
import { useState } from 'react';


import { ReactComponent as ExamNotification } from "../../assets/ExamNotification.svg";
import { ReactComponent as EyeNotification } from "../../assets/EyeNotification.svg";




const ExamData = [
    {
        id: 1,
        syntax: 'ileri-seviye-css-1',
        title: 'İleri Seviye CSS',
        date: '12.12.2021',
        score: '78%',
        status: 'success',
    },
    {
        id: 2,
        syntax: 'javascript-1',
        title: 'Javascript',
        date: '12.12.2021',
        score: '92',
        status: 'success',
    }
]

const ProfileViewCount = [
    {
        syntax: 'profile-view-count',
        count: 50,
    }
]



const Notification = () => {
    const [ShowNotifications, setShowNotifications] = useState(false);

    const handleShow = () => {
        setShowNotifications(!ShowNotifications);
    };


    const Finder = (table, syntax) => {
        return table.find((table_2) => table_2.syntax === syntax);
    }




    return (
        <div className="inline-block max-xl:block w-12 ">
            <div onClick={handleShow} className="hidden max-xl:block pl-5">
                <div className="rounded-full bg-[#73CE00] w-[4.5vh] h-[4.5vh] flex justify-center items-center text-2xl text-white font-semibold">{Notifications.length}</div>
            </div>

            {ShowNotifications && (
                <div className='w-[20em] h-fit absolute z-50 bg-white border-[#DFDCDC] shadow-2xl border-2 rounded-2xl mt-2 divide-y-2 divide-[#DFDCDC]'>
                    {Notifications.map((notification) => (
                        <div key={notification.id} className="py-1  w-full flex space-x-[1vw] justify-center items-center">
                            <div className="pl-4 w-[7.5vw] h-auto">
                               {notification.icon === 'ExamNotification' && (
                                   <ExamNotification />
                                )}
                                {notification.icon === 'EyeNotification' && (
                                    <EyeNotification />
                                )}
                            </div>
                            <div className="w-full pt-2 pr-4 pb-1">
                                <div className="text-[1.2vw] text-start leading-tight h-14">
                                    {/* Burada bildirimin content tipine göre filtreleme yaptıktan sonra gereken yerlerden veri çekme işlemi gerçekleşiyor */}


                                    {notification.content === 'exam' && (
                                        <p>Son sınavın olan <span className="font-bold">{Finder(ExamData, notification.syntax).title}</span> <br /> sınavında
                                            <span className="font-bold text-[#73CE00]"> {Finder(ExamData, notification.syntax).score}
                                            </span> puan aldın. Profiline
                                            <br />eklemek ister misin?
                                        </p>


                                    )}
                                    {notification.content === 'view' && (
                                        <p>Profiline şu ana kadar <span className="font-bold text-[#582270]">{Finder(ProfileViewCount, notification.syntax).count} </span> kişi baktı. <br />
                                            Profilini güncelle ve <span className="font-bold">daha fazla kişiye</span> ulaş!</p>
                                    )}


                                </div>
                            </div>
                        </div>
                    ))}




                </div>
            )}

        </div>
    );
}

export default Notification;