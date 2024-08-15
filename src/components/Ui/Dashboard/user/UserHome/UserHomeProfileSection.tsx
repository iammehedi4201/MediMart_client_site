"use client";
import { useGetMyProfileQuery } from "@/redux/api/user/userApi";
import { getUserInfo } from "@/services/auth.services";
import Image from "next/image";

const UserHomeProfileSection = () => {
  // Get User Info
  const userInfo = getUserInfo();

  //: Get My Profile
  const {
    data: myProfile,
    isLoading: isProfileLoading,
    isFetching: isProfileFetching,
  } = useGetMyProfileQuery(userInfo?.email);

  return (
    <section
      className="section about-section  w-full lg:col-span-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-5"
      id="about w-full"
    >
      <div className="container mx-auto px-4">
        <div className="  lg:flex lg:flex-row items-center justify-between">
          <div className="w-full lg:w-6/12 ">
            <div className="about-avatar ">
              <Image
                width={300}
                height={300}
                className="mx-auto rounded-full shadow-lg"
                src={
                  myProfile?.data?.photo ||
                  "https://bootdey.com/img/Content/avatar/avatar7.png"
                }
                title=""
                alt=""
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="about-text go-to">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                About Me
              </h3>
              <h6 className="text-red-500 font-semibold lg:text-xl leading-relaxed">
                Doing a fullstack &amp; fullstack internship at Qwik IT
              </h6>
              <p className="text-black lg:text-lg">
                I{" "}
                <span className="bg-red-500 text-black font-semibold px-2 py-1 rounded">
                  design and develop
                </span>{" "}
                services for customers of all sizes, specializing in creating
                stylish, modern websites, web services, and online stores. My
                passion is to design digital user experiences through the bold
                interface and meaningful interactions.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 mt-4">
                <div className="media">
                  <label className="font-semibold text-black">Birthday</label>
                  <p className="text-black">4th April 1998</p>
                </div>
                <div className="media">
                  <label className="font-semibold text-black">Age</label>
                  <p className="text-black">22 Yr</p>
                </div>
                <div className="media">
                  <label className="font-semibold text-black">Residence</label>
                  <p className="text-black">Dhaka</p>
                </div>
                <div className="media">
                  <label className="font-semibold text-black">Address</label>
                  <p className="text-black">Bashabo,Khilgoa</p>
                </div>
                <div className="media">
                  <label className="font-semibold text-black">E-mail</label>
                  <p className="text-black">{myProfile?.data?.email}</p>
                </div>
                <div className="media">
                  <label className="font-semibold text-black">Phone</label>
                  <p className="text-black">01775777038</p>
                </div>
                <div className="media">
                  <label className="font-semibold text-black">Skype</label>
                  <p className="text-black">skype.0404</p>
                </div>
                <div className="media">
                  <p className="text-black">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserHomeProfileSection;
