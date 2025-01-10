import Image from "next/image";
import backgroundImage from "@/public/background.webp";
export interface UserData {
  userName: string;
  mobileNo: string;
  shopName: string;
  pinCode: string;
  parentNo: string;
  alternateNo: string;
  fatherName: string;
  motherName: string;
  gender: string;
  email: string;
  panno: string;
  shopaddress: string;
  permantaddress: string;
  aadhaarNo: string;
}
export default function Home({
  props,
  searchParams,
}: {
  props: any;
  searchParams: UserData;
}) {
  console.log(searchParams, "props");
  return (
    <div className=" w-full h-[100vh] flex justify-center items-center ">
      <Image
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-fill -z-0"
        layout="fill"
      />
      <div className="resume-container z-10">
        <div className="header">
          {/* <img src="profile-photo.jpg" alt="Profile Photo" /> */}
          <div>
            <h1>{searchParams.userName}</h1>
            <div className="field">
              <div className="flex gap-2 justify-start">
                {" "}
                <span className="field-label">Mobile No:</span>
                <span className=" text-white" id="mobileno">
                  {searchParams.mobileNo}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="section">
            <h2 className="section-title">Personal Information</h2>
            <div className="field">
              <span className="field-label">Gender:</span>
              <span className="field-value" id="gender">
                {searchParams.gender}
              </span>
            </div>
            <div className="field">
              <span className="field-label">Shop Name:</span>
              <span className="field-value" id="shopName">
                {searchParams.shopName}
              </span>
            </div>
            <div className="field">
              <span className="field-label">Pincode:</span>
              <span className="field-value" id="pinCode">
                {searchParams.pinCode}
              </span>
            </div>
            <div className="field">
              <span className="field-label">Parent No:</span>
              <span className="field-value" id="parentNo">
                {searchParams.parentNo}
              </span>
            </div>
            <div className="field">
              <span className="field-label">Alternate No:</span>
              <span className="field-value" id="alternateNo">
                {searchParams.alternateNo}
              </span>
            </div>
          </div>
          <div className="section">
            <h2 className="section-title">Family Information</h2>
            <div className="field">
              <span className="field-label">Father Name:</span>
              <span className="field-value" id="fatherName">
                {searchParams.fatherName}
              </span>
            </div>
            <div className="field">
              <span className="field-label">Mother Name:</span>
              <span className="field-value" id="motherName">
                {searchParams.motherName}
              </span>
            </div>
          </div>
          <div className="section">
            <h2 className="section-title">Other Details</h2>

            <div className="field">
              <span className="field-label">Email:</span>
              <span className="field-value" id="email">
                {searchParams.email}
              </span>
            </div>
            <div className="field">
              <span className="field-label">Aadhaar No:</span>
              <span className="field-value" id="aadhaarNo">
                {searchParams.aadhaarNo}
              </span>
            </div>
            <div className="field">
              <span className="field-label">Pan Card No:</span>
              <span className="field-value" id="pancardNo">
                {searchParams.panno}
              </span>
            </div>
            <div className="field">
              <span className="field-label">Shop Address:</span>
              <span className="field-value" id="shopaddress">
                {searchParams.shopaddress}
              </span>
            </div>
            <div className="field">
              <span className="field-label">Permanent Address:</span>
              <span className="field-value" id="permanentaddress">
                {searchParams.permantaddress}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
